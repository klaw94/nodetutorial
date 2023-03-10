//npm --version

//local dependency - use it only in this particular project 
//npm i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>
//sudo npm install -g <packageName> (mac)

//package.json - manifest file (metadata file. Stores important info abour project package)
//manual approach (create package.json in the root, create properties, etc)
//npm init (step by step, press enter to skip, to create package.json)
//npm init -y (everything default)

//If you install a packet it comes to package.json as a dependency.
//When you install a dependency, npm creates a node_modules folder with all the dependencies. 
//All the dependencies and the dependencies of the dependencies are added to the node_modules. 

//The external packages you have to install them first.
//You have to include the node_module in git ignore, so you don't push them
const _ = require('lodash');

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)

//to uninstall: `npm uninstall bootstrap`
//Another way is deleteing package-log.json and node_modules and delete de dependency in package.json
//run then `npm install` and it wont install bootstrap.
//Useful for Gatsby

//The version of the dependencies has 3 numbers: 4.17.20;
// - The first are major changes/
// - The second are minor changes.
// - The 3rd is patches for bugs. 

//For more info check https://nodesource.com/blog/the-basics-of-package-json-in-node-js-and-npm