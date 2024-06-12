import { Component, Inject, OnInit } from '@angular/core';
import { User } from '../../../interface/user.interface';
import { doc, Firestore, getDoc, updateDoc } from '@angular/fire/firestore';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-adress',
  templateUrl: './edit-adress.component.html',
  styleUrl: './edit-adress.component.scss'
})

export class EditAdressComponent implements OnInit {

  user!: User;

  userId: string | null = '';
  docRef: any;
  docSnap: any;
  docData: any;

  constructor(public firestore: Firestore, public dialogRef: MatDialogRef<EditAdressComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  async ngOnInit(): Promise<void> {

    this.docRef = doc(this.firestore, 'users', this.data.userId ?? 'default');
        this.docSnap = await getDoc(this.docRef);
        if(this.docSnap.exists()) {
          this.user = this.docSnap.data() as User;
        }
    }

    async saveUser() {
      this.updateUser(this.user);
    }

    async updateUser(user: User) {
      await updateDoc(this.docRef, user).catch(
        (err) => { console.log(err) }
      ).then(() => {
        this.dialogRef.close();
      });
    }
  
}

