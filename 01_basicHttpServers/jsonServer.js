//Creating and Object from built in http module of Nodejs
const http = require('http');

//Defining the URL for Server
const localhost = 'localhost';
const PORT = 3000;

//Creating request listener
function requestListener(req,res){
    res.setHeader('content-Type','application/json');
    res.writeHead(200,'I am listening');

    //Defining JSON response object
    const jsonResponse = {
        message:"BlackHawk",
        timestamp: new Date().toISOString()
    };

    // Send the JSON response
    res.end(JSON.stringify(jsonResponse));
   
   //    res.end(`{ message:"BlackHawk",timestamp: new Date().toISOString() }`);
}

//Creating the http server
const jsonServer = http.createServer(requestListener);

//Binding server to the particular URL
jsonServer.listen(PORT,localhost,(error)=>{
    if(!error){
        console.log(`Hurray! Your Server is up and running on http://${localhost}:${PORT}`);
    }else{
        console.log(`Opps! failed to start the server :-( on http://${localhost}:${PORT} `);
    }
})
