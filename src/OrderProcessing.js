const meals = require("./Meals");

//  The user input is processed by the orderProcessing function
//  to find  the type of meal and item ID's
const orderProcessing = (inputOrder) => {
  const order = inputOrder.split(",");
  const orderType = order[0].toLowerCase().trim();
  const orderItems = order.slice(1);
  if (
    !(
      orderType === "breakfast" ||
      orderType == "lunch" ||
      orderType === "dinner"
    )
  ) {
    return " Your order type must be Breakfast or Lunch or Dinner and Item ID's seperated by commas";
  }

  //  If no item ID's are specified
  if (orderItems.length === 0)
    return "Unable to process: Main is missing, side is missing";

  // If breakfast is specified
  if (orderType === "breakfast") {
    // The meal items count are initialized to 0
    meals.Breakfast.init();
    // Main, Side and Drinks are counted separately by verifyOrder method
    const mealCount = meals.Breakfast.verifyOrder(orderItems);
    //  Returns the output to main function
    return meals.Breakfast.breakfastPrep(mealCount);
  }

  // If lunch is specified
  if (orderType === "lunch") {
    // The meal items count are initialized to 0
    meals.Lunch.init();
    // Main, Side and Drinks are counted separately by verifyOrder method
    const mealCount = meals.Lunch.verifyOrder(orderItems);
    //  Returns the output to main function
    return meals.Lunch.lunchPrep(mealCount);
  }

  // If lunch is specified
  if (orderType === "dinner") {
    // The meal items count are initialized to 0
    meals.Dinner.init();
    // Main, Side and Drinks are counted separately by verifyOrder method
    const mealCount = meals.Dinner.verifyOrder(orderItems);
    //  Returns the output to main function

    return meals.Dinner.dinnerPrep(mealCount);
  }
};

exports.orderProcessing = orderProcessing;
