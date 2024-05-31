const http = require('http');
const fs = require('fs').promises;/*Using file System to access the local html file*/

const PORT = 3000;
const localhost ='localhost';

function reaquestListener(req,res){
    fs.readFile(__dirname+"/index.html")
    .then(context=>{
        res.setHeader('content-Type','text/html');
        res.writeHeader(200,'OK');
        res.end(context);
    }).catch(err=>{
        res.writeHead(500);
        res.end(err);
        return;
     })
}

const htmlServer = http.createServer(reaquestListener);

htmlServer.listen(PORT,localhost,(err)=>{
    if (!err){
        console.log(`Great Server Up and can be accessed by Url //https:${localhost}:${PORT}`);
    }else{
        console.log(`Opps! failed to start the server :-( on http://${localhost}:${PORT} `);
    }

})