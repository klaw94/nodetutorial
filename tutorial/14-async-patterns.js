const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end("Home Page")
    }
    if(req.url == '/about'){
        //Blocking code . This blocks the whole page untill the loop is done 
        //Thats why you should always set your code aync
        // for (let i = 0; i < 1000; i++){
        //     for (let x = 0; x < 1000; x++){
        //         console.log(i + " " + x)
        //     }
            res.end("About page")
        }
    
    res.end("nothing")
})

server.listen(5000, ()=>{
    console.log('Server Listening on port 5000...')
})