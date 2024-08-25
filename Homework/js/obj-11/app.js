function createProduct() {
  const name = prompt("Enter the product name: ");
  const quantity = parseInt(prompt("Enter the quantity: "));
  const unitPrice = parseFloat(prompt("Enter the unit price: "));
  const discountPercent = parseFloat(prompt("Enter the discount percent: "));

  if (isNaN(quantity) || isNaN(unitPrice) || isNaN(discountPercent)) {
    alert("Quantity, unit price, and discount percent must be numbers.");
    return;
  }
  const product = { name, quantity, unitPrice };
  if (discountPercent > 0) {
    product.discountPercent = discountPercent;
  }
  return product;
}

function calActualPrice(product) {
  let { quantity, unitPrice, discountPercent = 0 } = product;
  let discount = (discountPercent / 100) * unitPrice;
  let finalPricePerUnit = unitPrice - discount;
  return finalPricePerUnit;
}

const product = createProduct();
if (product) {
  console.log(product);
  const actualPrice = calActualPrice(product);
  console.log(
    `The actual price of ${product.name}s is $${actualPrice.toFixed(2)}`
  );
}
