var storageKey = "priceHistory";
var priceHistory = JSON.parse(localStorage.getItem(storageKey) || "[]");
var priceBox = document.getElementById('priceBox');
var price = priceHistory.length > 0
    ? priceHistory[priceHistory.length - 1].price
    : parseInt(priceBox.innerText);
var lastUpdate = priceHistory.length > 0
    ? priceHistory[priceHistory.length - 1].lastUpdate
    : 0;
var now = Date.now();
var diffSeconds = (now - lastUpdate) / 1000;
if (diffSeconds >= 10) {
    price += 10;
    var lasUpdateToStr = new Date(now).toLocaleString();
    priceHistory.push({ price: price, lastUpdate: now, lasUpdateToStr: lasUpdateToStr });
    localStorage.setItem(storageKey, JSON.stringify(priceHistory));
}
priceBox.innerText = price + " грн";
