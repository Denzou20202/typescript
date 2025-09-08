"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let killogram = document.getElementById('convert');
const resultDiv = document.getElementById('result');
killogram.addEventListener('input', function () {
    resultDiv.innerText = String(Number(this.value) * 2.2);
});
//# sourceMappingURL=HW_10.6.js.map