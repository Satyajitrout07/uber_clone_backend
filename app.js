const dotenv = require ('dotenv');
dotenv.config();
const express = require ('express');
const cors = require('cors');
const app = express();
const config =require('./config/db-config.js')
const userRoutes =require('./routes/user.routes.js')
app.use(cors());
app.use(express.json());




app.get('/',(req,res)=>{
    res.send('hello world');
});



app.use('/users',userRoutes);




module.exports = app;