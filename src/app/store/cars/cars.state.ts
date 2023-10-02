import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { append, patch, removeItem } from "@ngxs/store/operators";
import { AddCar, RemoveCar } from "./cars.actions";

export interface Car {
  name: string,
  engine: string,
  year: string | number
}


export interface CarStateModel {
  cars: Car[]
}

@State<CarStateModel>({
  name: 'cars',
  defaults: {
    cars: [
      {
        name: 'Mercedes',
        engine: 'v8',
        year: 2022
      },
      {
        name: 'Porsche',
        engine: 'v8',
        year: 2023
      },
      {
        name: 'Lamborghini',
        engine: 'v12',
        year: 2025
      }
    ]
  }
})
@Injectable()
export class CarsState {

  @Action(AddCar)
  addCar(ctx: StateContext<any>, action: {payload: Car}) {
    ctx.setState(
      patch<{cars: Car[]}>({
        cars: append<Car>([action.payload])
      })
    );
  }

  @Action(RemoveCar)
  removeCar(ctx: StateContext<any>, action: {payload: { name: string }}) {
    ctx.setState(
      patch<{cars: Car[]}>({
        cars: removeItem<Car>(car => car.name === action.payload.name)
      })
    );
  }
}
