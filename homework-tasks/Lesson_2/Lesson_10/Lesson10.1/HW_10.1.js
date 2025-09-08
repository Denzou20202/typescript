"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buttons = document.getElementsByClassName('btn');
const button = buttons[0];
button.addEventListener('click', () => {
    const text = document.getElementById('text');
    if (text) {
        text.style.display = 'none';
    }
});
//# sourceMappingURL=HW_10.1.js.map