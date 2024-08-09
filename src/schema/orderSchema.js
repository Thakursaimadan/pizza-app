const mongoose=require('mongoose')
const OrderSchema=new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required:true
    },
    items:[{
        product:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product',
            required: true
        },
        quantity:{
            type:Number,
            required:true,
            default:1
        }
       
    }],
    totalPrice:{
        type:Number,
        required: true
    },
    status:{
        type:String,
        enum:['ORDERED','CANCELLED','DELIVERED','PROCESSING','OUT_FOR_DELIVERY'],
        default:'ORDERED'
    },
    address: {
        type: String,
        minLength:[10,'address should be atleast 10 characters']
    },
    PaymentMethod:{
        type:String,
        enum:["ONLINE",'CASH'],
        default:'CASH'
    }
},{timestamps:true})

const Order=mongoose.model('Order',OrderSchema);

module.exports=Order;