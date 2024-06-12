import { Component, OnInit } from '@angular/core';
import { addDoc, doc, Firestore, getDoc, onSnapshot, updateDoc } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { collection } from '@firebase/firestore';
import { EditAdressComponent } from './../edit-adress/edit-adress.component';
import { AddFirestoreServiceService } from '../../services/add-firestore-service.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit {

  userId: string | null = '';
  user = {}
  docRef: any;
  docSnap: any;
  docData: any;

  constructor(private route: ActivatedRoute, private firestore: Firestore, public dialog: MatDialog, public addService: AddFirestoreServiceService) {
  
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( async paramMap => {
      this.userId = paramMap.get('id');

      this.addService.setSingleDoc(this.userId, 'users');
    });
  }

  openDialogAdress() {
    this.dialog.open(EditAdressComponent, {
      data: { docData: this.docData, userId: this.userId } // Datenübertragung
    });
  }

}
