const express = require('express');
const mongoose = require('mongoose');

const PORT = 3000;
const localhost = 'localhost';
const app = express();

//Connecting to Mongo db
mongoose.connect('mongodb://0.0.0.0:27017/');

const db = mongoose.connection;

db.on('error',()=>console.log(`error occured while connecting to MongoDB`));
db.once('open',()=>console.log(`Successfully connected to the MongoDB`));


//Creating schema in MongoDB
const userSchema = mongoose.Schema({
    id: {
        type: Number,
        requried: true,
    },
    name: {
        type: String,
        requried: true
    },
    phone:{
        type: Number,
        required: true
    }
    ,
    email:{
        type: String,
        requried: true,
        unique: true
    },
    age:{
        type: Number,
        default: 0
    },
    deregistered:{
        type: Date,
        default: Date.now
    }
});

//Creating collection 
const userCollection = mongoose.model('user',userSchema,'TestUSer');

/*FYI*/
// 1st Param is  collection name.
// 2nd Param is an schema name.
// 3rd Param is an explicit collection name.


//creating new document
const newUser = new userCollection({
    id: 1,
    name:'Brijesh',
    phone: 9928989,
    email: 'brijesh@gmail.com',
    age: 27,
});

//Saving document in mongodb
newUser.save()
    .then((user)=>console.log('User Created',user))
    .catch((err)=>console.log('Error occured while creating the user',err));

//Server Listening the 
app.listen(PORT,localhost,(error)=>{
    if(!error){
        console.log(`Sucessfully connected to Server`);
    }else{
        console.log(`Failed to connect with Server`);
    }
})

