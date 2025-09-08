function addToLocalStorage(arrayName, objToAdd) {
    var listItem = localStorage.getItem(arrayName);
    if (!listItem) {
        throw new Error("It's' not Array !");
    }
    var array = JSON.parse(listItem);
    if (typeof objToAdd === 'object') {
        array.push(objToAdd);
    }
    localStorage.setItem(arrayName, JSON.stringify(array));
}
addToLocalStorage('sessionsList', {});
