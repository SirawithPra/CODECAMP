function createObjectFromInput() {
  const obj = {};
  while (true) {
    let key = prompt("Enter a key (or type 'stop' to finish):");
    if (key.toLowerCase() === "stop") {
      break;
    }
    let value = prompt("Enter the value for the key '" + key + "':");
    obj[key] = value;
  }
  return obj;
}

console.log(createObjectFromInput());
