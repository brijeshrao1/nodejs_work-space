const http = require('http');

const localhost ='localhost';
const PORT = 3000;


//Creating request listener

function requestListner(req,res){
    res.setHeader('content-Type','text/html');
    res.writeHead(200,'OK');
    res.end(`<html><body><h1>This is HTML Response</h1></body></html>`);
}

const server = http.createServer(requestListner)

server.listen(PORT,localhost,(err)=>{
    if(err){
        console.log(`failed to start the server`);
    }else{
        console.log(`Server started sucess fully`);
    }
})