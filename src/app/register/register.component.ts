import { Component, OnInit } from '@angular/core';
import { AuthRentalService } from '../auth/auth-rental.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public authRentalService: AuthRentalService) { }

  ngOnInit() {
  }

}
 