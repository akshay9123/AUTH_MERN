import userModel from "../models/usermodel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import transporter from "../config/nodemailer.js"


// this is the register controller of new user
export const register = async(req,res) =>{

    // extracting the name,email,password that are filled by the user
    const {name,email,password} = req.body;

    // if any value is missing the return the false statement to the user
    if(!name || !email || !password){
        return res.json({
            success:false,
            message:"Please fill all the details"
        })
    }

    try {


        // find the user is new or already registerd 
        const existingUser = await userModel.findOne({email})

        // if already register the return the false message
        if(existingUser){
            return res.json({success:false, message: 'user already registered'})
        }


        // now if user is new 
        // then first hash the password that are entered by the user 
        const hashedPassword = await bcrypt.hash(password,10)


        // now create the model and save the details of user in the database by useing await and save() method
        const user = new userModel({name,email,password:hashedPassword})
        await user.save()


        // now to generate the token for the register of new user
        const token = jwt.sign({id : user._id}, process.env.JWT_SECRET, { expiresIn : '7d'})

        res.cookie('token', token, {
            httpOnly:true,
            secure : process.env.NODE_ENV === 'production',
            sameSite : process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge : 7 * 24 * 60 * 60 * 1000
        })
        

        // WELCOMING NEW USER FROM THAT MAIL WHICH THEY HAVE REGISTER

        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: 'Hello Jee Welcome hai !',
            text: `Chote ${name},\n\Chote aapka account bn chuka hai aur pta hai kis mail id se bna hai ,
            mai btata hu is mail id s :  ${email}. \n\nThank you for joining us!\n\nBest regards,\nTeam`
        };
        


        // sending the final mail to the user 
        await transporter.sendMail(mailOptions)
        


        return res.json({
            success : true,
            message : 'successfully Registered'
        })
    } catch (error) {

        // if any error occur then return the response of success is false
        res.json({
            success:false,
            message : error.message
        })
    }
}



// this is the login controller for the user 
export const login = async(req,res) =>{

    // extracting the email and password from the body of req
    const {email,password} = req.body;


    // if the details like email and password is empty then return the resposnt that success is false
    if(!email || !password){
        return res.json({
            success:false,
            message:"Email and password is required"
        })
    }

    try {
        

        // extract the email details from the database to if user is registered with this email 
        const user = await userModel.findOne({email})


        // if user is not registered with this email id
        if(!user){
            return res.json({
                success : false,
                message : 'user is not existing in the database with this email id'
            })
        }

        
        // compare the password from the database and the user and filled 
        const isMatch = await bcrypt.compare(password, user.password)


        // if it is not matched the return the response that it is false
        if(!isMatch){
            return res.json({
                success : false,
                message : 'invalid password'
            })
        }

        // now to generate the token for the register of new user
        const token = jwt.sign({id : user._id}, process.env.JWT_SECRET, { expiresIn : '7d'})

        res.cookie('token', token, {
             httpOnly:true,
             secure : process.env.NODE_ENV === 'production',
             sameSite : process.env.NODE_ENV === 'production' ? 'none' : 'strict',
             maxAge : 7 * 24 * 60 * 60 * 1000
        })
         

        return res.json({
            success : true,
            message : 'successfully loggid in'
        })


    } catch (error) {
        // if any error occur then return the response of success is false
        res.json({
            success:false,
            message : error.message
        })
    }
}




// this is logout controller
export const logout = async(req,res) =>{

    try {

        res.clearCookie('token' ,{
            httpOnly:true,
            secure : process.env.NODE_ENV === 'production',
            sameSite : process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        })

        return res.json({
            success : true,
            message : 'Logged out successfully'
        })
        
    } catch (error) {
        
        
        // if any error occur then return the response of success is false
        res.json({
            success:false,
            message : error.message
        })
    }
}