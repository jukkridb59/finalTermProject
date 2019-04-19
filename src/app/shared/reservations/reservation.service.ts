import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private firestore: AngularFirestore) { }

  createReservation(record) {
    return this.firestore.collection('reservation').add(record);
  }

  readReservation() {
    return this.firestore.collection('reservation').snapshotChanges();
  }

  updateReservation(recordID, record) {
    this.firestore.doc('reservation/' + recordID).update(record);
  }

  deleteReservation(record_id) {
    this.firestore.doc('reservation' + record_id).delete();
  }
}
