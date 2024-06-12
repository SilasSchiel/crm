import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AddFirestoreServiceService } from '../../services/add-firestore-service.service';
import { LeadQuali } from '../../../interface/lead-quali.interface';
import { doc, Firestore, setDoc, Timestamp, updateDoc } from '@angular/fire/firestore';
import { Lead } from '../../../interface/lead.interface';

@Component({
  selector: 'app-dialog-add-qualicall',
  templateUrl: './dialog-add-qualicall.component.html',
  styleUrl: './dialog-add-qualicall.component.scss'
})

export class DialogAddQualicallComponent implements OnInit {

  lead?: Lead;
  leadId: string | null = '';
  isChecked: boolean = false;
  isQualified: boolean = false;
  problemSolving: string = '';
  currentlyUse: string = '';
  NotLike: string = '';
  budget: number | string = '';
  notice: string = '';
  followUpDate: any = '';

  constructor(public dialog: MatDialog, 
      public addService: AddFirestoreServiceService, 
      public dialogRef: MatDialogRef<DialogAddQualicallComponent>, 
      private firestore: Firestore,
      @Inject(MAT_DIALOG_DATA) public data: any)
      {}
  
  ngOnInit(): void {
    
  }

  saveInfosQualiCall() {
    if(!this.isQualified) {
      const newInfos: LeadQuali = {
        problemSolving: this.problemSolving,
        currentlyUse: this.currentlyUse,
        NotLike: this.NotLike,
        budget: this.budget,
        notice: this.notice,
        followUpDate: this.covertDateToTimestamp(this.followUpDate)
     }
     this.addNewInfosFromQualiCallToFirestore(newInfos);
    } else if(this.isQualified) {
      this.addService.updateLeadStatus(this.data.leadId, 'Not qualified');
      this.dialogRef.close();
    }
 }

 covertDateToTimestamp(dateString: string) {
  const date = new Date(dateString)
  return date.getTime();
 }

 addNewInfosFromQualiCallToFirestore(data: LeadQuali) {
    const newData = {...data}
    this.addService.addSingleDataToFirestore(this.addService.docData, 'leads', this.data.leadId, 'qualiCall', newData);
    this.addService.updateLeadStatus(this.data.leadId, 'Qualified');
    this.dialogRef.close();
  }
 }

