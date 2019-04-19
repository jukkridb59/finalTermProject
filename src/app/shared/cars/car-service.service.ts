import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {catchError, map, tap} from 'rxjs/operators';
import { Car } from '../cars/car';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarServiceService {

  private carCollection: AngularFirestoreCollection<Car>;

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

  getCar(car: Car) {
    if (localStorage.getItem('car')) {
      JSON.parse(localStorage.getItem('car'));
    } else {
      console.log('localStorage empty');
    }
  }

}
