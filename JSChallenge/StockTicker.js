// StockTicker.js
import { fetchStockData } from "./fakeStockApi.js";

let lastPrice = null;

setInterval(getStockPrice, 1000);

function getStockPrice() {
  const priceHtml = document.getElementById("price");
  const changeHtml = document.getElementById("change");
  const timeHtml = document.getElementById("time");
  const nameHtml = document.getElementById("name");

  const { name, price, time } = fetchStockData(); // price is number

  const change = lastPrice === null ? 0 : price - lastPrice;
  lastPrice = price;

  priceHtml.innerText = `Price : $${price.toFixed(2)}`;
  changeHtml.innerText =
    "Change : " + (change > 0 ? "+" : "") + change.toFixed(2);
  timeHtml.innerText = "Time : " + time;
  nameHtml.innerText = "Name : " + name;

  // Optional: color change text
  if (change > 0) {
    changeHtml.style.color = "#0f0";
  } else if (change < 0) {
    changeHtml.style.color = "#f00";
  } else {
    changeHtml.style.color = "#fff";
  }
}


function getLabelsHtml(text, sender, ...StafObjects) { returnStafObjects.map((staf) => `
  <div class="label-card">
    <div class="label-text">${text}</div>
    <div class="label-sender">From: ${sender}</div>
    <div class="label-staf">To: ${staf.name} (${staf.role})</div>
  </div>
`).join('');
}
const text = "Project Update";
const sender = "Alice";
const stafList = [
  { name: "Bob", role: "Developer" },
  { name: "Charlie", role: "Designer" },
  { name: "Diana", role: "Manager" },
];
const labelsHtml = getLabelsHtml(text, sender, ...stafList);
document.getElementById("labels-container").innerHTML = labelsHtml;