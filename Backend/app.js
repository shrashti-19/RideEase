const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express');
const app = express();
const connectToDb = require('./db/db');
connectToDb();
const userRoutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captains.route");
const cookieParser = require('cookie-parser');
app.use(cors());
app.use(express.json());                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
app.use(express.urlencoded({extended:true}))
app.use(cookieParser()); //this was the error finally

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.use('/users',userRoutes);
app.use('/captain',captainRoutes);

module.exports = app;