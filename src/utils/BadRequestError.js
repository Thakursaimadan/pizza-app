const AppError=require('./appError');

class BadRequestError extends AppError{
    constructor(invalidparams)
    {
        //properties: []
        let message=""
        invalidparams.forEach(params=>message+= `${params} ,`);

        super(`request has the following invalid parameters`,400)
    }
}
module.exports=BadRequestError