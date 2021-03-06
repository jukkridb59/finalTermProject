import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarLoginComponent } from './navbar-login/navbar-login.component';
import { RentalComponent } from './rental/rental.component';
import { LessorComponent } from './lessor/lessor.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterLessorComponent } from './register-lessor/register-lessor.component';
import { ChangPsComponent } from './chang-ps/chang-ps.component';
import { RentalHistoryComponent } from './rental-history/rental-history.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { LessorListComponent } from './lessor-list/lessor-list.component';
import { AboutMeLessorComponent } from './about-me-lessor/about-me-lessor.component';
import { AboutMeAdminComponent } from './about-me-admin/about-me-admin.component';
import { ChangPsLessorComponent } from './chang-ps-lessor/chang-ps-lessor.component';
import { ChangPsAdminComponent } from './chang-ps-admin/chang-ps-admin.component';
import { LessonAddCarComponent } from './lesson-add-car/lesson-add-car.component';
import { RentalCarReservationComponent } from './rental-car-reservation/rental-car-reservation.component';

// Firebase Modules
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AuthRentalService } from '../app/auth/auth-rental.service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ChildComponent } from './child/child.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    NavbarLoginComponent,
    RentalComponent,
    LessorComponent,
    AdminComponent,
    RegisterLessorComponent,
    ChangPsComponent,
    RentalHistoryComponent,
    RentalListComponent,
    LessorListComponent,
    AboutMeLessorComponent,
    AboutMeAdminComponent,
    ChangPsLessorComponent,
    ChangPsAdminComponent,
    LessonAddCarComponent,
    RentalCarReservationComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    ChildComponent,
    HistoryComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase), // Main Angular fire module
    AngularFirestoreModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatTableModule

  ],
  providers: [AuthRentalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
