import { Component } from '@angular/core';
import { Lead } from '../../../interface/lead.interface';
import { AddFirestoreServiceService } from '../../services/add-firestore-service.service';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../../user/dialog-add-user/dialog-add-user.component';
import { doc, Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-add-lead',
  templateUrl: './dialog-add-lead.component.html',
  styleUrl: './dialog-add-lead.component.scss'
})
export class DialogAddLeadComponent {
  loading = false;

  name: string = '';
  company: string = '';
  zipCode: number | string = '';
  city: string = '';
  email: string = '';
  telNumber: number | string = '';
  product: string = '';
  street: string = '';

  constructor(private addService: AddFirestoreServiceService, public dialogRef: MatDialogRef<DialogAddUserComponent>,) {}

  saveLead() {
    this.loading = true;
    const newLead: Lead = {
      name: this.name,
      company: this.company,
      email: this.email,
      telNumber: this.telNumber,
      street: this.street,
      zipCode: this.zipCode,
      city: this.city,
      product: this.product,
      status: 'New',
      timestamp: Date.now()
    }
    this.addNewLead(newLead);
  }

  async addNewLead(lead: Lead) {
    const leadData = { ...lead }
    await this.addService.addDataToFirestore(leadData, 'leads');
    this.loading = false;
    this.dialogRef.close();
  }

}
