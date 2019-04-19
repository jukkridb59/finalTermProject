import { Component, OnInit } from '@angular/core';
import { AuthRentalService } from '../auth/auth-rental.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authRentalService: AuthRentalService) { }

  ngOnInit() {
  }

}
 