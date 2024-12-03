const userModule = require('../models/users.model');
const userService = require('../services/user.service.js');
const {validationResult} = require('express-validator');


/*module.exports.registerUser = async(req,res,next)=>{
const error = validationResult (req);
if(!error.isEmpty()){
    return res.status(400).json({eror: error.array});
}

console.log(req.body);

const {fullname,email,password} = req.body;

const hashedPassword  = await userModule.hashedPassword(password);

const userService = await userService.createUser({
    firstname:fullname.firstname,
    lastname:fullname.lastname,
    email,
    password: hashedPassword
});
const token = user.generateAuthToken();
res.status(200).json({token,user});
}*/


exports.registerUser = async (req, res) => {
     try {
         const { username, password, fullname } = req.body; 
         const user = await User.create({ username, password, fullname });
          res.status(201).json(user);
         } catch (error) 
         { res.status(500).json({ message: 'Error registering user', error }); }
         };