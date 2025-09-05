"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const list = (text, counter) => {
    document.write(`<ul>`);
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
};
list('hello', 10);
//# sourceMappingURL=HW_5.7.js.map