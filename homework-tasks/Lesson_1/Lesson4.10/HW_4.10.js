"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function minNums(array) {
    let minNum = array[0];
    for (let i = 1; i < array.length; i++) {
        let number = array[i];
        if (number < minNum) {
            minNum = number;
        }
    }
    return minNum;
}
console.log(minNums([12, 25, 89, 5, -123]));
//# sourceMappingURL=HW_4.10.js.map