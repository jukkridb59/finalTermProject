import { Component, OnInit } from '@angular/core';
import { CarServiceService } from '../shared/cars/car-service.service';
 
@Component({
  selector: 'app-lessor',
  templateUrl: './lessor.component.html',
  styleUrls: ['./lessor.component.css']
})
export class LessorComponent implements OnInit {

  cars: any;
  carName: string;
  carBand: string;
  carCategory: string;
  carSeat: string;
  carGear: string;
  carColor: string;
  carPosition: string;
  carYear: Date;
  carPrice: Number;
  lessorID: string;

  constructor(public carService: CarServiceService) { }

  ngOnInit() {
    this.carService.readCar().subscribe(data => {
      this.cars = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          carName: e.payload.doc.data()['name'],
          carBand: e.payload.doc.data()['band'],
          carCategory: e.payload.doc.data()['category'],
          carSeat: e.payload.doc.data()['seat'],
          carGear: e.payload.doc.data()['gear'],
          carColor: e.payload.doc.data()['color'],
          carPosition: e.payload.doc.data()['position'],
          carYear: e.payload.doc.data()['year'],
          carPrice: e.payload.doc.data()['price'],
          lessorID: e.payload.doc.data()['lessorID']
        };
      })
      console.log(this.cars);

    });
  }

}
