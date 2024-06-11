// const express = require('express');
// import express from 'express'; for using this include "type": "module", in package.json file

const app = express();
const PORT = 3000;


app.listen(PORT,()=>{
console.log(`App is listening on port no:${PORT}`);
});

