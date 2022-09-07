// memoization
// Finding factorial

function findFactorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * findFactorial(n - 1);
  }
}

function memoization(callback) {
  let cache = {};

  return (n) => {
    if (n in cache) {
      console.log("is Value");

      return cache[n];
    } else {
      console.log("calculating value");
      const result = callback(n);
      cache[n] = result;
      return result;
    }
  };
}

const memoiZedValue = memoization(findFactorial);

// console.time();
// console.log(memoiZedValue(10));
// console.timeEnd();


// console.time();
// console.log(memoiZedValue(10));
// console.timeEnd();


// Convert to 24 Hour time

let date = new Date()

