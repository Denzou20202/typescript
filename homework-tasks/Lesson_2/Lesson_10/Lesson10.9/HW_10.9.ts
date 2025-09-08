const storageKey:string = "priceHistory";

interface IHistory {
  price: number
  lastUpdate: number
  lasUpdateToStr: string
}

let priceHistory: IHistory[] = JSON.parse(localStorage.getItem(storageKey) || "[]");

const priceBox = document.getElementById('priceBox') as HTMLElement

let price:number = priceHistory.length > 0
  ? priceHistory[priceHistory.length - 1].price
  : parseInt(priceBox.innerText);

let lastUpdate:number = priceHistory.length > 0
  ? priceHistory[priceHistory.length - 1].lastUpdate
  : 0;

const now:number = Date.now()
const diffSeconds = (now - lastUpdate) / 1000;

if (diffSeconds >= 10) {
  price += 10;
  const lasUpdateToStr:string = new Date(now).toLocaleString()
  priceHistory.push({ price, lastUpdate: now, lasUpdateToStr});

  localStorage.setItem(storageKey, JSON.stringify(priceHistory));
}

priceBox.innerText = price + " грн";
