let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const sumSalaries = obj => 
    Object.keys(obj).length === 0
    ? 0
    : Object.values(obj).reduce((acc, val) => acc + val, 0);

console.log(sumSalaries(salaries));