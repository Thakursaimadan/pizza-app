const express=require('express');

const ServerConfig=require('./config/serverconfig');

const app=express();

app.listen(ServerConfig.PORT,()=>{
    console.log("server starded at",ServerConfig.PORT);
}) 