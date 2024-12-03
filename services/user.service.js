const userModule = require('../models/users.model');




module.exports.registerUser = async ({
     firstname, lastname, email,password
    })=>{
        if(!firstname || !lastname || !email || !password){
            throw new Error('All feild are requred')
        }

        const user = userModule.create({
            fullname:{
                firstname,
                lastname
            },
            email,
            password
        })
        return user;
    }