const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db-config.js');    
const bcrypt= require('bcrypt');
const jwt = require ('jsonwebtoken');


//const user = sequelize.define('user',{
   /* fullname:{
        firstname:{
            type:string,
            required:true,
            minlength:[3,'first name must be at least 3 character long']
        },
        lastname:{
            type:string,
        
            minlength: [3,'last name must be at lest 3 character long']
        },
        mail:{
            type:string,
            requried:true,
            unique:true,
            minlength:[5,'mail must be at least 5 character long']
        },
        password:{
            type: string,
            require:true,
            select:false
        },
        soketid:{
            type:string,

        }
    }
},{
    tablename:'users'
});


const generateToken = (user) => { 
    return jwt.sign({ userId: user.id, username: user.username },
         SECRET_KEY, {
             expiresIn: '1h' }); 
             return TokenExpiredError;
            };
        

 
            
const comparePasswords = async (plainPassword, hashedPassword) =>
     { return await bcrypt.compare(plainPassword, hashedPassword);
        
      };

      const hashPassword = async (password) => { return await bcrypt.hash(password, 10); };*/

      //module.exports = userModule;


      const user = sequelize.define('user',{
        username: { 
            type: DataTypes.STRING,
             allowNull: false,
              unique: true, 
            },
            password: { 
                type: DataTypes.STRING, 
                allowNull: false, 
            },
            fullname:{
                type:DataTypes.STRING,
                allowNull:false
            }

      });