import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LeadSale } from '../../../interface/lead-sale.interface';
import { AddFirestoreServiceService } from '../../services/add-firestore-service.service';

@Component({
  selector: 'app-dialog-add-sale',
  templateUrl: './dialog-add-sale.component.html',
  styleUrl: './dialog-add-sale.component.scss'
})
export class DialogAddSaleComponent {
  companyDescription: string = '';
  goalInvestment: string = '';
  importantRequirements: string = '';
  timeFrameDate: any = '';
  notice: string = '';
  amountSold: number | string = '';

  isTimeframe: boolean = false;
  isSaled: boolean = false;

  constructor(public dialogRef: MatDialogRef<DialogAddSaleComponent>, public addService: AddFirestoreServiceService, @Inject(MAT_DIALOG_DATA) public data: any) {} 

  saveInfosQualiCall() {
    if(!this.isSaled) {
      const newInfos: LeadSale = {
        companyDescription: this.companyDescription,
        goalInvestment: this.goalInvestment,
        importantRequirements: this.importantRequirements,
        timeFrameDate: this.covertDateToTimestamp(this.timeFrameDate),
        notice: this.notice,
        amountSold: this.amountSold
     }
     this.addNewInfosFromQualiCallToFirestore(newInfos);
    } else if(this.isSaled) {
      this.addService.updateLeadStatus(this.data.leadId, 'Not qualified');
      this.dialogRef.close();
    }
 }

 covertDateToTimestamp(dateString: string) {
  const date = new Date(dateString)
  return date.getTime();
 }

 addNewInfosFromQualiCallToFirestore(data: LeadSale) {
  const newData = {...data}
  this.addService.addSingleDataToFirestore(this.addService.docData, 'leads', this.data.leadId, 'saleCall', newData);
  this.addService.updateLeadStatus(this.data.leadId, 'Sold');
  this.dialogRef.close();
}

}


