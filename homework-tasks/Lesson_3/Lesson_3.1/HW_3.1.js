"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function foobar(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
}
foobar('https://jsonplaceholder.typicode.com/users/2')
    .then(user => {
    console.log(user);
})
    .catch(error => {
    console.error('Error fetching user:', error);
});
//# sourceMappingURL=HW_3.1.js.map