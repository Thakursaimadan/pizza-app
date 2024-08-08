// app.post('/photo',uploader.single('incomingFile'),async (req,res)=>{
//     console.log(req.file);
//     const result=await cloudinary.uploader.upload(req.file.path)
//     console.log("result from cloudinary",result);
//     await fs.unlink(req.file.path);
//     return res.json({"message" : "ok"})
// })

const { registerProduct, getProductbyId, deleteProductbyId } = require("../services/productService");
const AppError = require("../utils/appError");

async function CreateProduct (req,res){
    try{

        const product=await registerProduct({
            productName:req.body.productName,
            description:req.body.description,
            imagePath: req.file?.path,
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
        if(err instanceof AppError)
        {
            return res.status(err.statusCode).json({
                sucess:false,
                message:err.message,
                data:{},
                error:err
            })

        }
        console.log(err);
        return res.status(500).json({
            sucess:false,
            message:"something went wrong",
            data:{},
            error:err
        })
    }
}
async function getProduct(req,res)
{
    try{
        let pId=req.params.id

        const product=await getProductbyId(pId);

        return res.status(201).json({
            sucess:true,
            message:"succesfully got product",
            data:product,
            error:{}
        })

    }
    catch(err)
    {
        if(err instanceof AppError)
            {
                return res.status(err.statusCode).json({
                    sucess:false,
                    message:err.message,
                    data:{},
                    error:err
                })
    
            }
            console.log(err);
            return res.status(500).json({
                sucess:false,
                message:"something went wrong",
                data:{},
                error:err
            })
    }
}

async function deleteProduct(req,res)
{
    try{
        let pId=req.params.id
        console.log("product id in delete",pId)

        const product=await deleteProductbyId(pId);

        return res.status(201).json({
            sucess:true,
            message:"succesfully deleted product",
            data:product,
            error:{}
        })

    }
    catch(err)
    {
        if(err instanceof AppError)
            {
                return res.status(err.statusCode).json({
                    sucess:false,
                    message:err.message,
                    data:{},
                    error:err
                })
    
            }
            console.log(err);
            return res.status(500).json({
                sucess:false,
                message:"something went wrong",
                data:{},
                error:err
            })  
    }
}
module.exports={CreateProduct,getProduct,deleteProduct}