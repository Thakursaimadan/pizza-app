const express=require('express');
const bodyParser=require('body-parser')
const ServerConfig=require('./config/serverconfig');
const connectDB = require('./config/dbconfig');
const { userRouter } = require('./routes/userRoute');
const { cartRouter } = require('./routes/cartRouter');

const app=express();
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded());

//if your req route starts with /users then handle it using useRouter
app.use('/users',userRouter) //connects the router to the server
app.use('/carts',cartRouter);

app.listen(ServerConfig.PORT,async ()=>{
    
    await connectDB();
    console.log("server starded at ",ServerConfig.PORT);

})   