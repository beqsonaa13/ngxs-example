export class AddCar {
  static readonly type = '[Cars] Add Car';
  constructor(public payload: {name: string, year: string | number, engine: string}) {
  }
}


export class RemoveCar {
  static readonly type = '[Cars] Remove Car';
  constructor(public payload: {name: string}) {
  }
}
