"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function list(array) {
    document.write(`<ul>`);
    for (let item of array) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}
list([123, 'asdasda', true]);
//# sourceMappingURL=HW_4.8.js.map