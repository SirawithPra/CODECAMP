let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
const multiplyNumeric = (obj,num) => {
    for (let key in obj) {
      if (typeof obj[key] === 'number') obj[key] *= num;
    }
}

multiplyNumeric(menu, 3);
console.log(menu);
