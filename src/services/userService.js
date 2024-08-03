class userService{

    constructor(UserRepository)
    {
        //in the argument we will expect a userREpo object

        this.UserRepository=UserRepository;
    }


async registerUSer(userDetails)
    {
        //it will create a brand new user in the db

        //1.we need to check if the user with this email and mobile number already exists ot not
        const user = await this.UserRepository.findUser({
                email:userDetails.email,
                mobileNumber:userDetails.mobileNumber
            }
        )
        if(user)
        {
            //we found user
            throw {reson:"user with given email and mobile already exist",statusCode:400}
        }
        //2.if we not then create user in the database 
        const newUser= await this.UserRepository.createUser({
            email:userDetails.email,
            password:userDetails.password,
            mobileNumber:userDetails.mobileNumber,
            lastName:userDetails.lastName,
            firstName:userDetails.firstName
        })
        if(!newUser)
        {
            throw {reason:"something went wrong cannot create User",statusCode:500}
        }
        //3.return the details of created user
        return newUser;
    
    }
}
module.exports={userService}