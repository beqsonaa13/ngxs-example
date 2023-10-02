import { Component } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { Select, Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { AddCar, RemoveCar } from "../store/cars/cars.actions";
import { Car, CarsState, CarStateModel } from "../store/cars/cars.state";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {

  @Select(CarsState) cars$!: Observable<CarStateModel>;

  constructor(private store: Store) { }

  public form: FormGroup = new FormGroup<any>({
    name: new FormControl(''),
    engine: new FormControl(''),
    year: new FormControl('')
  });

  public addCar(): void {
    this.store.dispatch(new AddCar(this.form.getRawValue()));
  }

  public removeCar(car: Car): void {
    this.store.dispatch(new RemoveCar({name: car.name}))
  }
}
