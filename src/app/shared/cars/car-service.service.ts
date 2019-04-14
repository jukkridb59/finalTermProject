import { Injectable } from '@angular/core';
import { Car } from './car';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {

  carsRef: AngularFireList<any>;
  carRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // Create car
  AddCar(car: Car) {
    this.carsRef.push({
      band: car.band,
      category: car.category,
      seat: car.seat,
      gear: car.gear,
      color: car.color,
      position: car.position,
      year: car.year,
      price: car.price,
      lessorKey: car.lessorKey
    });
  }

  // Fetch Single car Object
  GetCar(id: string) {
    this.carRef = this.db.object('car-list/' + id);
    return this.carRef;
  }

  // Fetch car List
  GetCarList() {
    this.carsRef = this.db.list('car-list');
    return this.carsRef;
  }

  // Update car Object
  UpdateCar(car: Car) {
    this.carRef.update({
      band: car.band,
      category: car.category,
      seat: car.seat,
      gear: car.gear,
      color: car.color,
      position: car.position,
      year: car.year,
      price: car.price,
      lessorKey: car.lessorKey
    });
  }

  // Delete car Object
  DeleteCar(id: string) {
    this.carRef = this.db.object('car-list/' + id);
    this.carRef.remove();
  }
}
