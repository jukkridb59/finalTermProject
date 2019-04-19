import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../shared/reservations/reservation.service';


@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  cars: any;
  userName: string;
  userCar: string;
  userDate1: Date;
  userDate2: Date;
  userAddress: string;
  userSex: string;
  userAge: Number;
  userPhone: string;

  constructor(
    public reservationService: ReservationService,
  ) { }

  ngOnInit() {
  }

  CreateRecord() {
    let record = {};
    record['name'] = this.userName;
    record['car'] = this.userCar;
    record['dateFrom'] = this.userDate1;
    record['dateTo'] = this.userDate2;
    record['address'] = this.userAddress;
    record['sex'] = this.userSex;
    record['age'] = this.userAge;
    record['phone'] = this.userPhone;

    this.reservationService.createReservation(record).then(res => {
      this.userName = "";
      this.userCar = "";
      this.userDate1 = undefined;
      this.userDate2 = undefined;
      this.userAddress = "";
      this.userSex = "";
      this.userAge = undefined;
      this.userPhone = undefined;
      console.log(res);
    })
      .catch(err => {
        console.log(err);
      });
  }
}