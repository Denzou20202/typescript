"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sum = (array) => {
    let kasa = 0;
    for (let item of array) {
        kasa += item;
    }
    return kasa;
};
console.log(sum([12, 25, 89, 5, -123]));
//# sourceMappingURL=HW_5.11.js.map