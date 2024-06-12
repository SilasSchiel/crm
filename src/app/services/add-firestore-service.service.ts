import { Injectable } from '@angular/core';
import { addDoc, collection, doc, Firestore, onSnapshot, setDoc, updateDoc } from '@angular/fire/firestore';
import { User } from '../../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AddFirestoreServiceService {
  docData: any;

  constructor(private firestore: Firestore) { }

  /**
   * 
   * @param data - Data from Firestore.
   * @param collectionName - Name of the collection from Firetstore.
   * 
   * This function add data to the firestore
   */
  async addDataToFirestore(data: any, collectionName: string) {
    await addDoc(collection(this.firestore, collectionName), data).catch(
      (err) => { console.log(err) }
    );
  }

  async addSingleDataToFirestore(data: any, collectionName: string, id: string, subcollectionName?:string, subcollectionData?:any) {
    const docRef = doc(this.firestore, collectionName, id ?? 'default')
    await setDoc(docRef, data)

    if(subcollectionName && subcollectionData) {
      const subcollectionRef = collection(docRef, subcollectionName);
      await addDoc(subcollectionRef, subcollectionData);
    }
  } 

  setSingleDoc(id: string | null, collectionName: string) {
    onSnapshot(doc(this.firestore, collectionName, id ?? 'default'), (item) => {
      if(item.exists()) {
        this.docData = item.data()
        console.log(this.docData)
      }
    })
  }

  updateLeadStatus(leadId: string, newStatus: string) {
    const docRef = doc(this.firestore, 'leads', leadId);
    return updateDoc(docRef, {status: newStatus});
  }



}
