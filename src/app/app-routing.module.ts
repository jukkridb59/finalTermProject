import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
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
import { RentalCarReservationComponent } from './rental-car-reservation/rental-car-reservation.component'
import { from } from 'rxjs';

const routes: Routes = [
  { path: 'home' , component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'about-me', component: AboutMeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'rental' , component: RentalComponent},
  { path: 'lessor' , component: LessorComponent},
  { path: 'admin' , component: AdminComponent},
  { path: 'register-lessor' , component: RegisterLessorComponent},
  { path: 'chang-ps' , component: ChangPsComponent},
  { path: 'rental-list', component: RentalListComponent},
  { path: 'lessor-list', component: LessorListComponent},
  { path: 'about-me-lessor', component: AboutMeLessorComponent},
  { path: 'about-me-admin', component: AboutMeAdminComponent},
  { path: 'chang-ps-lessor', component: ChangPsLessorComponent},
  { path: 'chang-ps-admin', component: ChangPsAdminComponent},
  { path: 'lesson-add-car', component: LessonAddCarComponent},
  { path: 'rental-car-reservation', component: RentalCarReservationComponent},

  { path: 'rental-history' , component: RentalHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
