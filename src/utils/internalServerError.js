const AppError=require('./appError');

class InternalServerError extends AppError{
    constructor()
    {
        super(`in server some thing went wrong`,500)
    }
}
module.exports=InternalServerError