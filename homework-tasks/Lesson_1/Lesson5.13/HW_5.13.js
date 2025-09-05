"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    const currencyItem = currencyValues.find(item => item.currency === exchangeCurrency);
    if (currencyItem) {
        return sumUAH / currencyItem.value;
    }
};
console.log(exchange(15000, [
    { currency: 'USD', value: 42 },
    { currency: 'EUR', value: 45 }
], 'USD'));
//# sourceMappingURL=HW_5.13.js.map