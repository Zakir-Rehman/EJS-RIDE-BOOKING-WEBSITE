import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    location:{
        city:{
            type:String,
            required:true
        },
        area:{
            type:String,
            required:true
        }
    }
})
const userModel = mongoose.models || mongoose.model("user",userSchema)
export default userModel;