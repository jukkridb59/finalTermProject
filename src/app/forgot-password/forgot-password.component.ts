import { Component, OnInit } from '@angular/core';
import { AuthRentalService } from '../auth/auth-rental.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(public authRentalService: AuthRentalService) { }

  ngOnInit() {
  }

}
