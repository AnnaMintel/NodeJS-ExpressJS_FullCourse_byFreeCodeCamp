// Using modules

const names = require('./04-names');
const sayHi = require('./05-utils');
const data = require('./06-alternative-variant');
require('./07');

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);  