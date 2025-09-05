"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let currencyItem;
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            currencyItem = currencyValues[i];
        }
    }
    if (currencyItem) {
        return sumUAH / currencyItem.value;
    }
    return -1;
}
console.log(exchange(15000, [
    { currency: 'USD', value: 42 },
    { currency: 'EUR', value: 45 }
], 'USD'));
//# sourceMappingURL=HW_4.13.js.map