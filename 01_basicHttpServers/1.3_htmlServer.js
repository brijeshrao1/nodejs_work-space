//Creating and Object from built in http module of Nodejs
const http = require('http');

//Defining the URL for Server
const PORT = 3000;
const localhost = 'localhost';

//Short hand for creating server and passing  request listener to it
const htmlServer = http.createServer((req,res)=>{
    res.setHeader('content-Type','text/html');
    res.writeHead(200,'ok');
    res.end(`<html><body><h1>This is HTML Response</h1></body></html>`);/*Serving html as response*/
});

//Binding server to the particular URL
htmlServer.listen(PORT,localhost,(error)=>{
    if(!error){
        console.log(`Hurray! Your Server is up and running on http://${localhost}:${PORT}`);
    }else{
        console.log(`Opps! failed to start the server :-( on http://${localhost}:${PORT} `);
    }
});