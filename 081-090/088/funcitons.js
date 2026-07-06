export function sum(data) {
  let total = 0;
  for (let i in data) {
    total += data[i];
  }
  return total;
}

export function amountItems(data) {
  let total = 0;
  for (let i in data) {
    total++;
  }
  return total;
}
