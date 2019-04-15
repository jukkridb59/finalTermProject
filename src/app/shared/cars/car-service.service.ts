import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {


  constructor(private firestore: AngularFirestore) { }

  createCar(record) {
    return this.firestore.collection('carList').add(record);
  }

  readCar() {
    return this.firestore.collection('carList').snapshotChanges();
  }

  updateCar(recordID, record) {
    this.firestore.doc('carList/' + recordID).update(record);
  }

  deleteCar(recordID) {
    this.firestore.doc('carList/' + recordID).delete();
  }
}
