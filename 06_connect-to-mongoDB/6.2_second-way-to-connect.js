const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;
const localhost = 'localhost';

//#2 Way to connect
mongoose.connect('mongodb://0.0.0.0:27017/');

const db = mongoose.connection;

db.on('error',(err)=>console.log(`Failed to connect the mongo db`))

db.once('open',()=>console.log('Connected to Monogo DB Successfully'))

app.listen(PORT,localhost,(err)=>{
    if(err){
        console.log(`Failed to start the server`);
    }
    else{
        console.log(`Cool Server is ruunning`);
    }
})
