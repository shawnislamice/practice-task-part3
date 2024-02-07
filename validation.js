function main(a, b) {
  if (a !== "number" && b !== "number" || a === undefined || b == undefined) {
    console.log("PLease provide a number");
  }
  return a + b;
}

console.log(main( "5"));
