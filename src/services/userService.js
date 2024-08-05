const { findUser, createUser } = require("../repository/userRepository");

async function registerUser(userDetails)
    {
        //it will create a brand new user in the db

        //1.we need to check if the user with this email and mobile number already exists ot not
        const user = await findUser({
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
        const newUser= await createUser({
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
module.exports={registerUser}