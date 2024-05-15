import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

//login user
const loginUser = async(req,res)=>{
    const {email,password} = req.body;
    try{
        const user = await userModel.findOne({email});
        if(!user){
            return res.json({success:false,message:'User Not Found'});
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.json({success:false,message:'Invalid Password'});
        }
        const token = await createToken(user._id);
        //console.log(token);
        res.json({success:true,token:token});
    }catch(err){
        console.log(err);
        res.json({success:false,message:'Server Error'});
    }
};
const createToken = async(id)=>{
    try {
        return jwt.sign({id}, process.env.JWT_SECRET);
    } catch (error) {
        throw new Error('Error creating token');
    }
}

//register
const registerUser = async(req,res)=>{
    const {name,password,email} = req.body;
    try{
        // check if user is already exists
        const exists = await userModel.findOne({email});
        if(exists){
            return res.json({success:false,message:'User Already Exists'});
        }

        //validating email format & strong password
        if(!validator.isEmail(email)){
            return res.json({success:false,message:'Invalid Email Format'});
        }
        if(password.length <8){
            return res.json({success:false,message:'Password must be atleast 8 characters'});
        }

        //hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })

        const user = await newUser.save();
        const token = await createToken(user._id);
        res.json({success:true,token});

    }catch(err){
        console.log(err);
        res.json({success:false,message:'Error Registering User'});
    }
};

export { loginUser, registerUser };