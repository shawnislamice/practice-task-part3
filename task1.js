function AnaToVori(Ana) {
  if (typeof Ana !== "number" || Ana < 0) {
    return "Please provide a positive number";
  } else {
    console.log("Ana: " + Ana);
    return Ana * 0.0625;
  }
}
const result = AnaToVori(5);
console.log(`Vori: ${result}`);
