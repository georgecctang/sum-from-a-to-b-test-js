
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  if (fromN === toN) {
    return fromN;
  }
  return fromN + sum(fromN + 1, toN);
}

console.log(sum(1,3));

module.exports = sum;
