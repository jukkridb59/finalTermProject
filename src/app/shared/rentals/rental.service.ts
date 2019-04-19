import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private firestore: AngularFirestore) { }
  createRental(record) {
    return this.firestore.collection('user-rental').add(record);
  }

  readRental() {
    return this.firestore.collection('user-rental').snapshotChanges();
  }

  updateLessor(recordID, record) {
    this.firestore.doc('user-rental/' + recordID).update(record);
  }

  deleteLessor(recordID) {
    this.firestore.doc('user-rental/' + recordID).delete();
  }
}
