// fakeStockApi.js
export function fetchStockData() {
  const price = Number((Math.random() * 3 + 100).toFixed(2)); // 100–103 range
  return {
    name: "FAKE",
    price,
    time: new Date().toLocaleTimeString(),
  };
}
