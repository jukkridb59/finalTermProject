import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarServiceService } from '../shared/cars/car-service.service';
import { Car } from '../shared/cars/car';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-rental-car-reservation',
  templateUrl: './rental-car-reservation.component.html',
  styleUrls: ['./rental-car-reservation.component.css']
})
export class RentalCarReservationComponent implements OnInit {


  constructor(
    private activatedRoute: ActivatedRoute,
    private carService: CarServiceService,
    private fireStore: AngularFirestore
  ) { }

  ngOnInit() {
  }

}
