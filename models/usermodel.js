import mongoose from "mongoose";

const userSchme = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true,
        unique: true
    },
    password : {
        type : String,
        required : true
    },

    varifyOTP : {
        type: String,
        default : ''
    },

    varifyOTPExpireAt : {
        type : Number,
        default : 0
    },

    isVerify: {
        type : Boolean, 
        default : false
    },

    resetOtp : {
        type : String,
        default : ''
    },

    resetOTPexpireAt : {
        type : Number ,
        default : 0
    }
})

const userModel = mongoose.models.user || mongoose.model('user',userSchme)

export default userModel;