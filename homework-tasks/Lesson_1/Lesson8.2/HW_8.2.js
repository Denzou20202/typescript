"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function cloner(obj) {
    if (obj) {
        const functions = [];
        for (const key in obj) {
            if (typeof obj[key] === 'function') {
                const functionClone = obj[key].bind({});
                functions.push({ functionClone, key });
            }
        }
        const cloneObj = JSON.parse(JSON.stringify(obj));
        for (const func of functions) {
            cloneObj[func.key] = func.functionClone;
        }
        console.log(cloneObj);
        return cloneObj;
    }
    throw new Error('Error in code !!!');
}
const clone = cloner({
    id: 1,
    name: 'Step_1',
    stepUp() {
        console.log('Step Up');
    },
    stepDown() {
        console.log('Step Down');
    }
});
clone.stepUp();
clone.stepDown();
//# sourceMappingURL=HW_8.2.js.map