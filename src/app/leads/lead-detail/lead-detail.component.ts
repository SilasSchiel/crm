import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddFirestoreServiceService } from '../../services/add-firestore-service.service';
import { Lead } from '../../../interface/lead.interface';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddQualicallComponent } from '../dialog-add-qualicall/dialog-add-qualicall.component';
import { collection, Firestore, onSnapshot, Timestamp } from '@angular/fire/firestore';
import { LeadQuali } from '../../../interface/lead-quali.interface';
import { DialogAddSaleComponent } from '../dialog-add-sale/dialog-add-sale.component';
import { LeadSale } from '../../../interface/lead-sale.interface';

@Component({
  selector: 'app-lead-detail',
  templateUrl: './lead-detail.component.html',
  styleUrl: './lead-detail.component.scss'
})
export class LeadDetailComponent implements OnInit {
  lead: Lead[] = [];
  leadQualiInfos: LeadQuali | null = null
  leadSaleInfos: LeadSale | null = null
  leadId: any;
  isProduction: boolean = false;
  isDone: boolean = false;

  constructor(private route: ActivatedRoute, public addService: AddFirestoreServiceService, public dialog: MatDialog, private firestore: Firestore) { }

  checked = false;
  currentDate: number | undefined;
  qualiCallDate: number | undefined;

  ngOnInit(): void {
    
      this.route.paramMap.subscribe( async paramMap => {
        this.leadId = paramMap.get('id');
        this.addService.setSingleDoc(this.leadId, 'leads');
      });

      this.setLeadQualiCall();
      this.setLeadSaleCall();
  }

  setLeadQualiCall() {
    return onSnapshot(collection(this.firestore, 'leads', this.leadId, 'qualiCall'), (qualiCallList) => {
      qualiCallList.forEach(element => {
        const leadQuali = this.setLeadQualiCallObject(element.data());
        this.leadQualiInfos = leadQuali;
        
      })
    })
  }

  setLeadSaleCall() {
    return onSnapshot(collection(this.firestore, 'leads', this.leadId, 'saleCall'), (saleCallList) => {
      saleCallList.forEach(element => {
        const leadQuali = this.setLeadSaleCallObject(element.data());
        this.leadSaleInfos = leadQuali;
        
      })
    })
  }

  setLeadQualiCallObject(obj: any): LeadQuali {
    return {
      NotLike: obj.NotLike || '',
      budget: obj.budget || '',
      currentlyUse: obj.currentlyUse || '',
      followUpDate: obj.followUpDate, 
      notice: obj.notice || '',
      problemSolving: obj.problemSolving || ''
    }
  }

  setLeadSaleCallObject(obj: any): LeadSale {
    return {
      amountSold: obj.amountSold || '',
      companyDescription: obj.companyDescription || '',
      goalInvestment: obj.goalInvestment || '',
      importantRequirements: obj.importantRequirements || '',
      notice: obj.notice || '',
      timeFrameDate: obj.timeFrameDate || ''
    }
  }

  setSaledToProduction() {
    if(this.isProduction) {
      this.addService.updateLeadStatus(this.leadId, 'Production');
    }
  }

  setSaledToCompleted() {
    if(this.isDone) {
      this.addService.updateLeadStatus(this.leadId, 'Completed');
    }
  }

  getDateForQualiCall() {
    if(this.addService.docData && this.addService.docData.timestamp) {
      return this.addService.docData.timestamp + (2 * 24 * 60 * 60 * 1000);
    }
  }

  openDialogAddQualiCall() {
    this.dialog.open(DialogAddQualicallComponent, {
      data: { leadId: this.leadId } // Datenübertragung
    });
  }

  openDialogAddSaleCall() {
    this.dialog.open(DialogAddSaleComponent, {
      data: { leadId: this.leadId } // Datenübertragung
    });
  }
  
}

