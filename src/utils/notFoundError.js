const AppError=require('./appError');

class NotFoundError extends AppError{
    constructor(resource)
    {
        //properties: []
        super(`not able to find properties:${resource}`,404)
    }
}
module.exports=NotFoundError