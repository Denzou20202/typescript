"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    _id;
    _name;
    _surname;
    _email;
    _phone;
    constructor(_id, _name, _surname, _email, _phone) {
        this._id = _id;
        this._name = _name;
        this._surname = _surname;
        this._email = _email;
        this._phone = _phone;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get surname() {
        return this._surname;
    }
    get email() {
        return this._email;
    }
    get phone() {
        return this._phone;
    }
}
let users = [
    new User(1, 'Denis', 'Petrov', 'petrov.d@gmail.com', '+380991234589'),
    new User(2, 'Sasha', 'Ivanov', 'ivanov.s@gmail.com', '+380991234590'),
    new User(3, 'Sveta', 'Orlova', 'orlova.s@gmail.com', '+380991234591'),
    new User(4, 'Oleg', 'Petrov', 'petrov.o@gmail.com', '+380991234592'),
    new User(5, 'Dima', 'Urlov', 'urlov.d@gmail.com', '+380991234593'),
    new User(6, 'Masha', 'Dashkevich', 'dashkevich.m@gmail.com', '+380991234594'),
    new User(7, 'Roma', 'Buganov', 'buganov.r@gmail.com', '+380991234595'),
    new User(8, 'Volodya', 'Petrov', 'petrov.v@gmail.com', '+380991234596'),
    new User(9, 'Vova', 'Sokolov', 'sokolov.v@gmail.com', '+380991234597'),
    new User(10, 'Sergei', 'Petrov', 'petrov.s@gmail.com', '+380991234598'),
];
const filterUsers = users.filter((user) => user.id % 2 === 0);
console.log(filterUsers);
//# sourceMappingURL=HW_7.2.js.map