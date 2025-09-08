"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sessionsList = JSON.parse(localStorage.getItem('sessionsList') || '[}');
for (const sessionsListElement of sessionsList) {
    const div = document.createElement('div');
    div.innerText = sessionsListElement.toString();
    document.body.appendChild(div);
}
//# sourceMappingURL=HW_10.5.2.js.map