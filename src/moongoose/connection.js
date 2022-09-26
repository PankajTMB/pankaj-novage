const mongoose = require('mongoose');
export default async function ConnectDb(){
    try {
        await mongoose.connect(process.env.DB_HOST);
        console.log("Connected with DB");
        return true;
    } catch (error) {
        console.log("Error to connected with DB");
        return false;        
    }
}