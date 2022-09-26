
import ConnectDb from "../../../moongoose/connection";
import User from "../../../moongoose/models/user";
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

export default async  function Signup(req, res){
    // Connect with dataBase
    const connection = await ConnectDb();
    if(!connection) return res.status(503).json({ success: false,message: "There is some problem please try again later" });
    // save data in DataBase
    try {
        let {email,password} = req.body;
        let response = await User.findOne({email});
        if(!response) return res.status(400).json({ success: false,message: "User Does not Exist"});
        bcrypt.compare(password,response.password, function(err, result) {
            if(err) {return res.status(503).json({ success: false,message: "There is some problem please try again later" }) }
            if(result){ 
                jwt.sign({ id: response.id }, 'secret', { expiresIn: '1h' },(err,token)=>{
                    if(token){
                        User.findByIdAndUpdate(response.id, { token },(err, updatedData)=>{
                            if(err) return res.status(503).json({ success: false,message: "There is some problem please try again later"});
                            return res.status(200).json({ success: true,message: "Success Log In",token : updatedData.token});
                        }) 
                    }else{
                        return res.status(503).json({ success: false,message: "There is some problem please try again later"});
                    }
                });
            }else{
                return res.status(503).json({ success: false,message: "Please Check Your login details" });
            }
        }); 
    } catch (error) {
        console.log(error);
        return res.status(503).json({ success: false,message: "There is some problem please try again later" });
    }
}