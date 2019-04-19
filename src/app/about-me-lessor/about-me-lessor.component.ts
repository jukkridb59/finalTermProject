import { Component, OnInit } from '@angular/core';
import { LessorService } from '../shared/lessors/lessor.service';
import { RentalService } from '../shared/rentals/rental.service';
import { AuthRentalService } from '../auth/auth-rental.service';

@Component({
  selector: 'app-about-me-lessor',
  templateUrl: './about-me-lessor.component.html',
  styleUrls: ['./about-me-lessor.component.css']
})
export class AboutMeLessorComponent implements OnInit {

  constructor(public rentalService: AuthRentalService) { }

  // rentals: any;
  // uid: string;
  // userName: string;
  // email: string;
  // emailVerify: boolean;
  // userAddress: string;
  // userSex: string;
  // userAge: Number;

  ngOnInit() {
    // this.rentalService.readRental().subscribe(data => {
    //   this.rentals = data.map(e => {
    //     return {
    //       id: e.payload.doc.id,
    //       isEdit: false,
    //       userName: e.payload.doc.data()['userName'],
    //       email: e.payload.doc.data()['email'],
    //       emailVerify: e.payload.doc.data()['emailVerified'],
    //       userAddress: e.payload.doc.data()['userAddress'],
    //       userSex: e.payload.doc.data()['userSex'],
    //       userAge: e.payload.doc.data()['userAge'],
    //     };
    //   })
    //   console.log(this.rentals);
    // });
  }

}
