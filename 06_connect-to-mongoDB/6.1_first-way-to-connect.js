const express = require('express');
const mongoose = require('mongoose');

const PORT = 3000;
const localhost = 'localhost';
const app = express();



//#1 Way to connect
mongoose.connect('mongodb://0.0.0.0:27017/')
    .then(()=>{
    console.log(`Connected to MongoDB Sucessfully`);
    })
    .catch(()=>{
    console.log(`Failed to connec the MongoDB`);
    })

app.listen(PORT,localhost,(err)=>{
    if(err){
        console.log(`Failed to start the the server`);
    }else{
        console.log(`Server is spining`);
    }
})




