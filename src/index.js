const express=require('express');

const ServerConfig=require('./config/serverconfig');
const connectDB = require('./config/dbconfig');

const app=express();

app.listen(ServerConfig.PORT,async ()=>{
    
    await connectDB();
    console.log("server starded at ",ServerConfig.PORT);
    
}) 