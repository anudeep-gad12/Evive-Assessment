const prompt = require("prompt-sync")({ sigint: true });
const orderProcess = require("./OrderProcessing");

//  Main function this is the starting point of the program
function main() {
  let exit = true;
  while (exit) {
    //  Showing menu on screen for the user to input
    console.table({
      Breakfast: { 1: "Eggs", 2: "Toast", 3: "Coffee" },
      Lunch: { 1: "Sandwich", 2: "Chips", 3: "Soda" },
      Dinner: { 1: "Steak", 2: "Potatoes", 3: "Wine", 4: "Cake" },
    });
    //  Input from user
    const inputOrder = prompt(
      "Enter your order here {EXAMPLE: breakfast,1,2,3 OR lunch,1,2,2,3 OR Dinner,1,2,3,4} or PRESS 0 TO EXIT:"
    );
    if (inputOrder === "0") break;

    //  Output order value
    console.log("\n");

    console.log(orderProcess.orderProcessing(inputOrder));
  }
  console.log("Exited successfully");
}

main();
