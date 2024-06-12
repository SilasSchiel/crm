import { Component, OnInit } from '@angular/core';
import { collection, Firestore, onSnapshot } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddLeadComponent } from './dialog-add-lead/dialog-add-lead.component';
import { Lead } from '../../interface/lead.interface';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrl: './leads.component.scss'
})
export class LeadsComponent implements OnInit {

  allLeads: Lead[] = [];
  leadNr: number = 0;

  constructor(public dialog: MatDialog, public firestore: Firestore) { }

  ngOnInit(): void {
    this.setLeads();
  }

  setLeads() {
    return onSnapshot(collection(this.firestore, 'leads'), (leadList) => {
      this.allLeads = [];
      leadList.forEach(element => {
        this.leadNr++;
        const leads = this.setUsersObject(element.data(), element.id, this.leadNr);
        this.allLeads.push(leads);
      })
    })
  }

  setUsersObject(obj: any, id: string, leadNr: any): Lead {
    return {
      id: id || '',
      leadNr: leadNr || '',
      name: obj.name || '',
      company: obj.company || '',
      email: obj.email || '',
      telNumber: obj.telNumber || '',
      street: obj.street || '',
      zipCode: obj.zipCode || '',
      city: obj.city || '',
      product: obj.product || '',
      status: obj.status,
      timestamp: obj.timestamp
    }
  }

  openLeadDialog() {
    return this.dialog.open(DialogAddLeadComponent);
  }
}
