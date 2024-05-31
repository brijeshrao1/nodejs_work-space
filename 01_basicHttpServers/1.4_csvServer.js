const http = require('http');

const PORT = 3000;
const localhost = 'localhost';

const csvServer = http.createServer((req,res)=>{
    res.setHeader('content-Type','text/csv');
    res.setHeader("Content-Disposition","attachment;filename=test.csv"); //This header tells the browser how to display the data, particularly in the browser or as a separate file.
    res.writeHead(200,'OK');
    res.end(`id,name,email\n1,Black Hawk,Black@ocean.com`);
})

csvServer.listen(PORT,localhost,(error)=>{
    if(!error){
        console.log(`Hurray! Your Server is up and running on http://${localhost}:${PORT}`);
    }else{
        console.log(`Opps! failed to start the server :-( on http://${localhost}:${PORT} `);
    }
})