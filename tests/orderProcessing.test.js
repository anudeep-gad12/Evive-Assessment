const orderProcessing = require("../src/OrderProcessing.js");

//  Test cases
const testCases = new Map([
  ["Breakfast,1,2,3", "Eggs, Toast, Coffee"],
  ["Breakfast,2,3,1", "Eggs, Toast, Coffee"],
  ["Breakfast,1,2,3,3,3", "Eggs, Toast, Coffee(3)"],
  ["Breakfast,1", "Unable to process: Side is missing"],
  ["Breakfast,2", "Unable to process: Main is missing"],
  ["Breakfast,3", "Unable to process: Main is missing, side is missing"],
  ["Breakfast", "Unable to process: Main is missing, side is missing"],
  ["Lunch,1,2,3", "Sandwich, Chips, Soda"],
  ["Lunch,1,2", "Sandwich, Chips, Water"],
  [
    "Lunch,1,1,2,3",
    "Unable to process: Sandwich cannot be ordered more than once",
  ],
  ["Lunch,1,2,2", "Sandwich, Chips(2), Water"],
  ["Lunch", "Unable to process: Main is missing, side is missing"],
  ["Lunch,1", "Unable to process: Side is missing"],
  ["Lunch,2", "Unable to process: Main is missing"],
  ["Lunch,3", "Unable to process: Main is missing, side is missing"],
  ["Dinner,1,2,3,4", "Steak, Potatoes, Wine, Water, Cake"],
  ["Dinner,1,2,3", "Unable to process: Dessert is missing"],
  ["Dinner,1,2", "Unable to process: Dessert is missing"],
  ["Dinner,2,3", "Unable to process: Main is missing"],
  ["Dinner,1,3", "Unable to process: Dessert is missing"],
  ["Dinner,1,3", "Unable to process: Side is missing"],
]);

//  Validating the testcases
let i = 0;
for (const [key, value] of testCases) {
  i++;
  const input = key;
  const expectedResult = value;
  test(` Test ${i} inputMenu: ${input}, Order Value: ${expectedResult}`, () => {
    expect(orderProcessing.orderProcessing(input)).toBe(expectedResult);
  });
}
