//Creating and Object from built in http module of Nodejs
const http =  require('http');

//Defining the URL for Server
const PORT =3000;
const localhost='localhost';

//Creating request listener
function requestListener(req,res){
    res.writeHead(200,"I am listening");
    res.end("textServer"); //returning text data as a textServer to the client as response
}

//Creating the server
const textServer = http.createServer(requestListener);

//Binding server to the particular URL
textServer.listen(PORT,localhost,(error)=>{
    if(!error){
        console.log(`Hurray! Your Server is up and running on http://${localhost}:${PORT}`);
    }else{
        console.log(`Opps! failed to start the server :-( on http://${localhost}:${PORT} `);
    }
})
