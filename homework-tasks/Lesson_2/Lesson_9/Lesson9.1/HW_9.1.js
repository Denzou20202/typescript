"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const div = document.createElement('div');
div.classList.add('wrap', 'collapse', 'alpha', 'beta');
div.innerText = 'Hello world';
const divClone = div.cloneNode(true);
document.body.append(div, divClone);
//# sourceMappingURL=HW_9.1.js.map