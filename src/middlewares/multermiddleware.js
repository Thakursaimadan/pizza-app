const multer = requier('multer');
const path= require('path')

const storageConfiguration=multer.diskStorage({
    destination: (req,file,next)=>{
        next(null,'uploads/')
    },
    filename: (req,file,next)=>{
        next(null,`${Date.now()}${path.extname(file.originalname)}`)
    }
})
const uploader=multer({Storage: storageConfiguration})
moudule.exports=uploader;