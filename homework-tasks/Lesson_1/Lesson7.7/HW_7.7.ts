type DriverType = {
  name: string
  age: number
  stageYears: number
}

class Car {
  model:string
  producer:string
  year:number
  maxSpeed:number
  engineVolume:number
  driver?: DriverType

  constructor(model: string, producer: string, year: number, maxSpeed: number, engineVolume: number, ) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
  }


  drive ():void {
    console.log(`Едим со скоростью ${this.maxSpeed} в час`)
  }
  info ():void {
    for (const key in this) {
      console.log(key, this[key])
    }
  }
  increaseMaxSpeed (newSpeed:number):void {
    if (newSpeed > 0) this.maxSpeed = this.maxSpeed + newSpeed
  };
  changeYear (year:number):void {
    if (year > 1815) this.year = year
  };
  addDriver (driver:DriverType):void {
    this.driver = driver
  };
}


const car = new Car ('A4', 'Audi', 1998, 220, 2)
console.log(car)

car.info()
car.drive()
car.increaseMaxSpeed(50);
car.changeYear(2002)
car.addDriver({name: 'Denis', age: 40, stageYears: 15})
console.log(car)



