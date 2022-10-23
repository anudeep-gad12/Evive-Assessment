# Menu Ordering System

1. Clone the repository

## Installation and execution

1. Install node modules with npm

```bash
  npm install

```

2. To run the program

```bash
  npm start

```

3. All the test cases already written in the orderProcessing.test.js, To test the program, navigate to tests folder from your terminal and execute the below command

```bash
  npm test

```

## Program Flow

1. The Data.js has the menu
2. Main.js has the main function which is the starting point of the program
3. The main function takes in the userinput and then passes it to the OrderProcessing function( in OrderProcessing.js) which identifies the type of meal and foodItem ID's
4. After the orderProcessing function identifies the type of meal it sends the order to either Breakfast or Lunch or Dinner methods depending on the type of order
5. The Meals.js has all the classes and methods required to produce output of the order.
6. Either of those methods return the output to the main function.
