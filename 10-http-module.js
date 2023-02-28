const http = require('http')


const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end("Welcome to the home page")
    }
    if(req.url === '/about'){
        res.end("Welcome to the ABOUT page")
    }
    res.end(`
    <h1>Opps!</h1>
    <p>This page doesn't exist</p>
    <a href="/">back home</a>
    `)
    //this is the response you send when someone connect to the url.
    // res.write("Welcome to our homepage")
    //res.end()
})

//Where the server listens.
server.listen(5000)