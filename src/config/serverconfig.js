const dotenv = require('dotenv');
dotenv.config();

// Here we are exporting all the env variables that the project uses
module.exports = {
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL,
    JWT_SECRET: process.env.JWT_SECRET_KEY,
    JWT_EXPIRY: process.env.JWT_EXPIRY,
    cloud_name:process.env.cloud_name,
    cloud_api:process.env.cloud_api,
    cloud_secret:process.env.cloud_secret
}