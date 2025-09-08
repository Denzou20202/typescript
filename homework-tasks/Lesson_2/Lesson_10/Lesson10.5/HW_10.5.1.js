"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let sessionsList = JSON.parse(localStorage.getItem('sessionsList') || '[]');
sessionsList.push(new Date().toString());
localStorage.setItem('sessionsList', JSON.stringify(sessionsList));
//# sourceMappingURL=HW_10.5.1.js.map