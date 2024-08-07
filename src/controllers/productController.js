// app.post('/photo',uploader.single('incomingFile'),async (req,res)=>{
//     console.log(req.file);
//     const result=await cloudinary.uploader.upload(req.file.path)
//     console.log("result from cloudinary",result);
//     await fs.unlink(req.file.path);
//     return res.json({"message" : "ok"})
// })

const { registerProduct } = require("../services/productService");

async function CreateProduct (req,res){
    try{

        const product=await registerProduct({
            productName:req.body.productName,
            description:req.body.description,
            imagePath: req.file.path,
            price:req.body.price,
            category:req.body.category,
            instock:req.body.instock
    
        })

        return res.status(201).json({
            sucess:true,
            message:"succesfully created product",
            data:product,
            error:{}
        })

    }
    catch(err)
    {
        console.log(err);
        return res.status(err.statusCode).json({
            sucess:false,
            message:err.reason,
            data:{},
            error:err
        })
    }
    
    
}
module.exports=CreateProduct