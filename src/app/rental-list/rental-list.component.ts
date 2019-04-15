import { Component, OnInit } from '@angular/core';
import { CarServiceService } from '../shared/cars/car-service.service'

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css']
})
export class RentalListComponent implements OnInit {

  constructor(public carService: CarServiceService) { }

  ngOnInit() {
  }

}
