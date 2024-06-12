import { Component } from '@angular/core';
import { User } from '../../../interface/user.interface';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { AddFirestoreServiceService } from '../../services/add-firestore-service.service';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {

  loading = false;

  firstName = '';
  lastName = '';
  email = '';
  birthDate = '';
  street = '';
  zipCode = '';
  city = ''


  constructor( public dialogRef: MatDialogRef<DialogAddUserComponent>, private firestore: Firestore, private addService: AddFirestoreServiceService ) {}

  onNoClick() {
    throw new Error('Method not implemented.');
  }

  saveUser() {
    this.loading = true;
    const newUser: User = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      birthDate: this.birthDate,
      street: this.street,
      zipCode: this.zipCode,
      city: this.city
    };
    this.addUser(newUser);
  }
  
  async addUser(user: User) {
    const userData = { ...user };
    await this.addService.addDataToFirestore(userData, 'users')
    this.loading = false;
    this.dialogRef.close();
  }   
}