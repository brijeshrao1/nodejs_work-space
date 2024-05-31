const http = require('http');
const fs = require('fs').promises;

const PORT = 3000;
const localhost ='localhost';
let indexFile;

function reaquestListener(req,res){
    res.setHeader('content-Type','text/html');
    res.writeHeader(200,'OK');
    res.end(indexFile);
}

const htmlServer = http.createServer(reaquestListener);

fs.readFile(__dirname+'/index.html')
.then(content=>{
    indexFile = content;
    htmlServer.listen(PORT,localhost,()=>{
            console.log(`Great Server Up and can be accessed by Url //https:${localhost}:${PORT}`);
    })
})
.catch(err=>{
        console.log(`Opps! failed to start the server :-( on http://${localhost}:${PORT} `);
        process.exit(1);
})