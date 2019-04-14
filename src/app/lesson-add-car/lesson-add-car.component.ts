import { Component, OnInit } from '@angular/core';
import { CarServiceService } from '../shared/cars/car-service.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-lesson-add-car',
  templateUrl: './lesson-add-car.component.html',
  styleUrls: ['./lesson-add-car.component.css']
})
export class LessonAddCarComponent implements OnInit {
   public carForm: FormGroup;

  constructor(
    public carApi: CarServiceService,
    public fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.carApi.GetCarList();
    this.carForms();
  }

  carForms() {
    this.carForm = this.fb.group({
      band: ['', [Validators.required, Validators.minLength(2)]],
      category: ['', [Validators.required, Validators.minLength(2)]],
      seat: ['', [Validators.required, Validators.minLength(2)]],
      gear: ['', [Validators.required, Validators.minLength(2)]],
      color: ['', [Validators.required, Validators.minLength(2)]],
      position: ['', [Validators.required, Validators.minLength(2)]],
      year: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      price: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      lessorKey: ['', [Validators.required, Validators.minLength(2)]]

    });
  }

  get band() {
    return this.carForm.get('band');
  }
  get category() {
    return this.carForm.get('category');
  }
  get seat() {
    return this.carForm.get('seat');
  }
  get gear() {
    return this.carForm.get('gear');
  }
  get color() {
    return this.carForm.get('color');
  }
  get position() {
    return this.carForm.get('position');
  }
  get year() {
    return this.carForm.get('year');
  }
  get price() {
    return this.carForm.get('price');
  }
  get lessorKey() {
    return this.carForm.get('lessorKey');
  }

  // Reset student form's values
  ResetForm() {
    this.carForm.reset();
  }

  submitCarData() {
    this.carApi.AddCar(this.carForm.value);
    this.ResetForm();
  }

}
