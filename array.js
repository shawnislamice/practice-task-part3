function findLargest(values) {
  if (!Array.isArray(values)) {
    return "Please provide an array";
  } else {
    let max = values[0];
    for (let i = 0; i < values.length; i++) {
      if (typeof values[i] !== "number") {
        return "Please provide only numbers";
      } else {
        if (values[i] > max) {
          max = values[i];
        }
      }
    }
    return max;
  }
}
const numbers = [1, 2, 3, 4, 5];
const result = findLargest(numbers);
console.log(result);
