function myValidation(myInfo) {
  if (typeof myInfo !== "object" || !myInfo.name || !myInfo.age) {
    return "Please provide values correctly";
  } else if (
    typeof myInfo.name !== "string" ||
    typeof myInfo.age !== "number"
  ) {
    return "Provide values with its correct datatype";
  } else if (myInfo.age < 0) {
    return "Age cannot be negative";
  }
  return `My name is : ${myInfo.name} and my age is: ${myInfo.age}`;
}
const mydetails = {
  name: "Shawon ISlam",
  age: 25,
};
const result = myValidation(mydetails);
console.log(result);

