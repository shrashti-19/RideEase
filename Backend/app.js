const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express');
const app = express();
const connectToDb = require('./db/db');
connectToDb();
const userRoutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captains.route");
const mapsRoutes = require('./routes/maps.routes')

const cookieParser = require('cookie-parser');
app.use(cors({
    origin: 'http://localhost:5173', // Allow only your frontend to make requests
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow only specific methods
    credentials: true, // If you're sending cookies or credentials
  }));
app.use(express.json());                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
app.use(express.urlencoded({extended:true}))
app.use(cookieParser()); //this was the error finally

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.use('/users',userRoutes);
app.use('/captain',captainRoutes);
app.use('/maps',mapsRoutes)
module.exports = app;