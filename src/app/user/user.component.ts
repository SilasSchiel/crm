import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from './dialog-add-user/dialog-add-user.component';
import { User } from '../../interface/user.interface';
import { collection, onSnapshot } from '@firebase/firestore';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {

  birthDate: Date | undefined;

  allUsers: User[] = [];

  constructor(public dialog: MatDialog, private firestore: Firestore) {
    
  }
  ngOnInit(): void {
    this.setUsers();
  }

  setUsersObject(obj: any, id: string): User {
    return {
      id: id || '',
      firstName: obj.firstName || '',
      lastName: obj.lastName || '',
      email: obj.email || '',
      birthDate: obj.birthDate || '',
      street: obj.street || '',
      zipCode: obj.zipCode || '',
      city: obj.city || ''
    }
  }

  setUsers() {
    return onSnapshot(collection(this.firestore, 'users'), (userList) => {
          this.allUsers = [];
          userList.forEach(element => {
            const user = this.setUsersObject(element.data(), element.id);
            this.allUsers.push(user);
        });
    });
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}
