import { Component, OnInit } from '@angular/core';
import { CarServiceService } from '../shared/cars/car-service.service';

@Component({
  selector: 'app-lesson-add-car',
  templateUrl: './lesson-add-car.component.html',
  styleUrls: ['./lesson-add-car.component.css']
})
export class LessonAddCarComponent implements OnInit {

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
  status: boolean;


  constructor(
    public carService: CarServiceService
  ) { }

  ngOnInit() {

  }
    // name: string;
    // band: string;
    // category: string;
    // seat: string;
    // gear: string;
    // color: string;
    // position: string;
    // year: Date;
    // price: Number;
    // lessorKey: string;
  CreateRecord() {
    let record = {};
    record['name'] = this.carName;
    record['band'] = this.carBand;
    record['category'] = this.carCategory;
    record['seat'] = this.carSeat;
    record['gear'] = this.carGear;
    record['color'] = this.carColor;
    record['position'] = this.carPosition;
    record['year'] = this.carYear;
    record['price'] = this.carPrice;
    record['lessorID'] = this.lessorID;
    record['status'] = "ว่าง";

    this.carService.createCar(record).then(res => {
      this.carName = "";
      this.carBand = "";
      this.carCategory = "";
      this.carSeat = "";
      this.carGear = "";
      this.carColor = "";
      this.carPosition = "";
      this.carYear = undefined;
      this.carPrice = undefined;
      this.lessorID = "";
      this.status = undefined;
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });

  }


}
