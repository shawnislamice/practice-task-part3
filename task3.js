function picnicBudget(perticipents) {
  let first100Cost = 0;
  let secondCost = 0;
  let thirdCost = 0;
  let totalCost = 0;
  if (typeof perticipents !== "number" || perticipents < 0) {
    return "Please provide correct numbers of items";
  } else {
    if (perticipents <= 100) {
      first100Cost = perticipents * 5000;
      return first100Cost;
    } else if (perticipents > 100 && perticipents <= 200) {
      first100Cost = 5000 * 100;
      secondCost = (perticipents - 100) * 4000;
      totalCost = first100Cost + secondCost;
      return totalCost;
    }else{
        first100Cost=5000*100
        secondCost=(perticipents-100)*4000
        thirdCost=(perticipents-200)*3000
        totalCost=first100Cost+secondCost+thirdCost
        return totalCost
    }
  }
}
const result=picnicBudget(102)
console.log(result)
