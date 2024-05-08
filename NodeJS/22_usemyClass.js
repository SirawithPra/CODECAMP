const mc = require('./21_myClass');
const mu = require('./19_myUtil');

const customer = new mc.Human('Andy')
const employee = new mc.Human('Bobby',30)
customer.info()
employee.info()