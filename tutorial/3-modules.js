//Modules - encapsulated Code (only share minimum)
const names = require('./3-names.js')
const sayHi = require('./3-utils.js')
const data = require('./4-alternative-export')

//when you import a module you also invoke it.
require('./5-mind-granade.js')

console.log(data)
console.log(names)
sayHi(names.john)
sayHi(names.peter)
sayHi(secret)