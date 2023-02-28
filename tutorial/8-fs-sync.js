const {readFileSync, writeFileSync} = require('fs');
//const fs = require('fs')

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log(first, second)

//without flag a it overwrites. With flag a it appends at the end
writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`, {flag : 'a'})