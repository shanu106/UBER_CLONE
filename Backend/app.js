
// require Packages start here 

const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./database/connectDB');
const cookieParser = require('cookie-parser');
const userRoute = require('./routes/user.route');
const captainRoute = require('./routes/captain.route');


// require Packages end here 
// app.use start here 

app.use(cors());
connectDB();
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/user', userRoute);
app.use('/captain', captainRoute);


// app.use end here 

// routers of index 

app.get('/', (req, res)=>{
    res.send("hello uber");
})


module.exports = app;