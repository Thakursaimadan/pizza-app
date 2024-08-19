const express=require('express');
const bodyParser=require('body-parser')
const ServerConfig=require('./config/serverconfig');
const connectDB = require('./config/dbconfig');
const { userRouter } = require('./routes/userRoute');
const { cartRouter } = require('./routes/cartRouter');
const { authRouter } = require('./routes/authroute');
const cookieParser =require('cookie-parser')
const cloudinary=require("./config/cloudinaryconfig");
const fs=require('fs/promises');
const { isLoggedIn } = require('./validation/authValidator');
const { productRouter } = require('./routes/productRoute');
const { orderRouter } = require('./routes/orderRoute');
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(cookieParser())

//if your req route starts with /users then handle it using useRouter
app.use('/users',userRouter); //connects the router to the server
app.use('/carts',cartRouter);
app.use('/auth',authRouter);
app.use('/products',productRouter);
app.use('/orders',orderRouter);

app.listen(ServerConfig.PORT,async ()=>{
    
    await connectDB();
    console.log("server starded at ",ServerConfig.PORT);

})   