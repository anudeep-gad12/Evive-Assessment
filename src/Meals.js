const data = require("./Data");
class MealPrep {
  constructor(main = 0, side = 0, drink = 0) {
    this.mainCount = main;
    this.sideCount = side;
    this.drinkCount = drink;
  }
  //  Initializing the count of Main, Side and Drink
  init() {
    this.mainCount = 0;
    this.sideCount = 0;
    this.drinkCount = 0;
  }
  // Main, Side and Drinks are counted separately by verifyOrder method
  verifyOrder(orderItems) {
    for (let i = 0; i < orderItems.length; i++) {
      if (orderItems[i] === "1") this.mainCount++;
      if (orderItems[i] === "2") this.sideCount++;
      if (orderItems[i] === "3") this.drinkCount++;
    }
    //  Return the count of Main, Side and Drinks to the order orderProcessing function
    return {
      mainCount: this.mainCount,
      sideCount: this.sideCount,
      drinkCount: this.drinkCount,
    };
  }
}

class Breakfast extends MealPrep {
  constructor(main = 0, side = 0, drink = 0) {
    super(main, side, drink);
  }
  breakfastPrep(mealTypes) {
    if (mealTypes.mainCount === 0 && mealTypes.sideCount === 0)
      return "Unable to process: Main is missing, side is missing";
    if (mealTypes.mainCount === 0) return "Unable to process: Main is missing";
    if (mealTypes.sideCount === 0) return "Unable to process: Side is missing";
    if (mealTypes.mainCount > 1)
      return `Unable to process: ${data.menu.breakfast[0]} cannot be ordered more than once`;
    if (mealTypes.sideCount > 1)
      return `Unable to process: ${data.menu.breakfast[1]} cannot be ordered more than once`;

    data.yourOrder = `${data.menu.breakfast[0]}, ${data.menu.breakfast[1]}, ${
      mealTypes.drinkCount === 0 ? "Water" : data.menu.breakfast[2]
    }${mealTypes.drinkCount <= 1 ? "" : `(${mealTypes.drinkCount})`}`;

    return data.yourOrder;
  }
}

class Lunch extends MealPrep {
  constructor(main = 0, side = 0, drink = 0) {
    super(main, side, drink);
  }
  lunchPrep(mealTypes) {
    if (mealTypes.mainCount === 0 && mealTypes.sideCount === 0)
      return "Unable to process: Main is missing, side is missing";
    if (mealTypes.mainCount === 0) return "Unable to process: Main is missing";
    if (mealTypes.sideCount === 0) return "Unable to process: Side is missing";
    if (mealTypes.mainCount > 1)
      return `Unable to process: ${data.menu.lunch[0]} cannot be ordered more than once`;
    if (mealTypes.drinkCount > 1)
      return `Unable to process: ${data.menu.lunch[2]} cannot be ordered more than once`;

    data.yourOrder = `${data.menu.lunch[0]}, ${data.menu.lunch[1]}${
      mealTypes.sideCount <= 1 ? "" : `(${mealTypes.sideCount})`
    }, ${mealTypes.drinkCount === 1 ? data.menu.lunch[2] : "Water"}`;

    return data.yourOrder;
  }
}

class Dinner extends MealPrep {
  constructor(main = 0, side = 0, drink = 0, dessert = 0) {
    super(main, side, drink);
    this.dessertCount = dessert;
  }

  init() {
    this.mainCount = 0;
    this.sideCount = 0;
    this.drinkCount = 0;
    this.dessertCount = 0;
  }
  //  As an extra item is added to Dinner, the verifyOrder is overridden for this class
  verifyOrder(orderItems) {
    for (let i = 0; i < orderItems.length; i++) {
      if (orderItems[i] === "1") this.mainCount++;
      if (orderItems[i] === "2") this.sideCount++;
      if (orderItems[i] === "3") this.drinkCount++;
      if (orderItems[i] === "4") this.dessertCount++;
    }

    return {
      mainCount: this.mainCount,
      sideCount: this.sideCount,
      drinkCount: this.drinkCount,
      dessertCount: this.dessertCount,
    };
  }

  dinnerPrep(mealTypes) {
    if (mealTypes.mainCount === 0 && mealTypes.sideCount === 0)
      return "Unable to process: Main is missing, side is missing";
    if (mealTypes.mainCount === 0) return "Unable to process: Main is missing";
    if (mealTypes.sideCount === 0) return "Unable to process: Side is missing";
    if (mealTypes.dessertCount === 0)
      return "Unable to process: Dessert is missing";
    if (mealTypes.mainCount > 1)
      return `${data.menu.dinner[0]} cannot be ordered more than once`;
    if (mealTypes.sideCount > 1)
      return `${data.menu.dinner[1]} cannot be ordered more than once`;
    if (mealTypes.drinkCount > 1)
      return `${data.menu.dinner[2]} cannot be ordered more than once`;
    if (mealTypes.dessertCount > 1)
      return `${data.menu.dinner[3]} cannot be ordered more than once`;

    data.yourOrder = `${data.menu.dinner[0]}, ${data.menu.dinner[1]}, ${
      mealTypes.drinkCount === 0 ? "" : data.menu.dinner[2]
    }, Water, ${data.menu.dinner[3]}`;
    return data.yourOrder;
  }
}

exports.Breakfast = new Breakfast();
exports.Lunch = new Lunch();
exports.Dinner = new Dinner();
