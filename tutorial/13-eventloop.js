//For more info check Mirning Keynote - Everything you need to know about Node.js and What the heck are event loop?

//JS is synchronous and single threaded:
// - JS reads line by line and it waits for all the tasks to be completed before going to the next line. 
//If you setTiemout() it goes to the next line and then it comes back to the time out function.

//Event loop basically offloads the requests and does the call back only when the data is there.

const { readFile } = require('fs')

console.log('started a first task')
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err){
        console.log(err)
        return
    }
    console.log(result)
    console.log('completed first task')
})

console.log('This is a new task')

//This console logs: started a first task.
            // This is a new task
            //Completed task.


console.log('first')
setTimeout(()=>{
    console.log('second')
}, 0)
console.log('third')

//This console logs: first, third, second.  Even if the timer is 0 it offloads it. 

setInterval(()=>{
    console.log("hello")
}, 2000)
console.log("I will run first")
//This console logs: I will run first and then the intervals.
//This stays alive forever till error or till you kill it. 
//server.listen also stays alive. It keeps listening to incoming events. 