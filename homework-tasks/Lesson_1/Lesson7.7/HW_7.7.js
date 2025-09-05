"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    model;
    producer;
    year;
    maxSpeed;
    engineVolume;
    driver;
    constructor(model, producer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }
    drive() {
        console.log(`Едим со скоростью ${this.maxSpeed} в час`);
    }
    info() {
        for (const key in this) {
            console.log(key, this[key]);
        }
    }
    increaseMaxSpeed(newSpeed) {
        if (newSpeed > 0)
            this.maxSpeed = this.maxSpeed + newSpeed;
    }
    ;
    changeYear(year) {
        if (year > 1815)
            this.year = year;
    }
    ;
    addDriver(driver) {
        this.driver = driver;
    }
    ;
}
const car = new Car('A4', 'Audi', 1998, 220, 2);
console.log(car);
car.info();
car.drive();
car.increaseMaxSpeed(50);
car.changeYear(2002);
car.addDriver({ name: 'Denis', age: 40, stageYears: 15 });
console.log(car);
//# sourceMappingURL=HW_7.7.js.map