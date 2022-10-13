let http = require("http");
const port = process.env.PORT || 5500;
const server = http.createServer((req, response) => {
    response.statusCode = 200;
    response.setHeader('Content', 'text/html');
    // response.end("Hi");

    if( req.url == "/" ){
        response.end("This is Home Page");
    }
    else if( req.url == "/about" ){
        response.end("This is an about page");
    }
    else{
        response.statusCode = 404;
        response.end(response.statusCode);
    }
})


server.listen(port, () =>{
    console.log(`Server is listening on port ${port}`);
})