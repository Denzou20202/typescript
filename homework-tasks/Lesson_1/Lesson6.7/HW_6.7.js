"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let nums = [11, 21, 3];
function sortNums(arrayOfNums, direction) {
    if (direction === 'ascending')
        return arrayOfNums.sort((a, b) => a - b);
    if (direction === 'descending')
        return arrayOfNums.sort((a, b) => b - a);
    return arrayOfNums;
}
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));
//# sourceMappingURL=HW_6.7.js.map