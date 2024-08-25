function createFruitBasket() {
  const basket = {};

  while (true) {
    let fruit = prompt(
      "Enter the name of the fruit (or type 'stop' to finish):"
    );
    if (fruit.toLowerCase() === "stop") {
      break;
    }
    let quantity = parseInt(
      prompt("Enter the quantity of the fruit '" + fruit + "':"),
      10
    );

    if (isNaN(quantity)) {
      alert("Please enter a valid number for the quantity.");
      continue;
    }
    if (quantity > 1) {
      fruit += "s";
    }
    basket[fruit] = quantity;
  }
  return basket;
}
console.log(createFruitBasket());
