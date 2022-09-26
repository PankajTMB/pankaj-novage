
import ConnectDb from "../../../moongoose/connection";
import User from "../../../moongoose/models/user";

export default async  function Signup(req, res){
    // Connect with dataBase
    const connection = await ConnectDb();
    if(!connection) return res.status(503).json({ success: false,message: "There is some problem please try again later" });
    // Check password

    let {password,confirmPassword} = req.body;
    if (password !== confirmPassword) {return res.status(200).json({ success: false,message: "Please Check your Password" })}
    let newUser =  new User(req.body);

    // save data in DataBase
    try {
        let response = await newUser.save();
        console.log("DB response",response);
        return res.status(201).json({ success: true,message: "Success form Submit" });
    } catch (error) {
        console.log(error);
        return res.status(503).json({ success: false,message: "There is some problem please try again later" });
    }
}