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
  carStatus: string;

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
          lessorID: e.payload.doc.data()['lessorID'],
          carStatus: e.payload.doc.data()['status']
        };
      })
      console.log(this.cars);

    });
  }

  RemoveCar(rowID) {
    this.carService.deleteCar(rowID);
  }

  EditCar(record) {
    record.isEdit = true;
    record.EditName = record.name;
    record.EditBand = record.band;
    record.EditSeat = record.seat;
    record.EditGear = record.gear;
    record.EditColor = record.color;
    record.EditPosition = record.position;
    record.EditYear = record.year;
    record.EditPrice = record.price;
    record.EditLessorID = record.lessorID;
  }
 
  UpdateCar(recordRow) {
    let record = {};
    record['name'] = recordRow.EditName;
    record['band'] = recordRow.EditBand;
    record['seat'] = recordRow.EditSeat;
    record['gear'] = recordRow.EditGear;
    record['color'] = recordRow.EditColor;
    record['position'] = recordRow.EditPosition;
    record['year'] = recordRow.EditYear;
    record['price'] = recordRow.EditPrice;
    this.carService.updateCar(recordRow.id, record);
    recordRow.isEdit = false;
  }

}
