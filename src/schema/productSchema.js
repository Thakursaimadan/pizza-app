const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: [true, "product Name is required"],
        minlength: [5, "product name must be atleast 5 character long"],
        lowercase: true,
        trim: true, // if the user gives extra spaces then it will automatically remove it
    },
    discription:{
        type:String,
        minlength: [5, "product name must be atleast 5 character long"],
        
    },
    ProductImage:{
        type:String
    },
    price: {
        type: Number,
        trim: true,
        required: [true, "Price should be provided"]
    },
    Category: {
        type: String,
        enum:['veg','non-veg','drinks','sides'],
        default:'veg'
    },
    Instock:{
        type:Boolean,
        required:[true,"Instock property is required"],
        default:true
    }
}, {
    timestamps: true
});

const Product=mongoose.model('Product',productSchema)

module.exports=Product