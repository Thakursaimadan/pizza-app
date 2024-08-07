const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, cloud_name, cloud_key, cloud_secret, cloud_api } = require('./serverconfig');

const cloudinary = require('cloudinary').v2;

// configuring cloudinary
cloudinary.config({
    cloud_name:cloud_name,//CLOUDINARY_CLOUD_NAME,
    api_key:cloud_api ,//CLOUDINARY_API_KEY,
    api_secret:cloud_secret //CLOUDINARY_API_SECRET
});

module.exports = cloudinary;