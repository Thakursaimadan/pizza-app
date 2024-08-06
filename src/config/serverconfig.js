const dotenv=require('dotenv')
dotenv.config();

//here we are exproting all the env which are needed
module.exports={
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL,
    JWT_SECRET:process.env.JWT_SECRET_KEY,
    JWT_EXPIRY:process.env.JWT_EXPIRY,
    CLOUDINARY_CLOUD_NAME:process.env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY:process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET:process.env.CLOUDINARY_API_SECRET
}