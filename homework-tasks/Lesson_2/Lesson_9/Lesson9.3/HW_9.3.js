"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
for (const coursesElement of coursesAndDurationArray) {
    const div = document.createElement('div');
    div.innerText = `${coursesElement.title} - ${coursesElement.monthDuration}`;
    document.body.appendChild(div);
}
//# sourceMappingURL=HW_9.3.js.map