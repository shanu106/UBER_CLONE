
// require Packages start here 

const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./database/connectDB');



// require Packages end here 
// app.use start here 

app.use(cors());
connectDB();
// app.use end here 

// routers of index 

app.get('/', (req, res)=>{
    res.send("hello uber");
})


module.exports = app;