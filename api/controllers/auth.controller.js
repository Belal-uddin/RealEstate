import bcrypt from "bcryptjs"
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

// Registration

export const register = async (req,res)=>{
    
    const {username,email,password} = req.body;
    
    try{
        const hashedPassword = await bcrypt.hash(password,10);

        // Create a new user and save in database
    
        const nuewUser = await prisma.user.create({
            data:{
                username,
                email,
                password:hashedPassword,
            },
        });

        res.status(201).json({message: "User created successfully"});
    }catch(err){
        console.log(err);
        res.status(500).json(({message: "Failed to create user"}));
    }
   

    
}


// LOGIN
export const login = async (req,res)=>{
    const {username, password} = req.body;
    
    
    try{
    // CHECK IF THE USER EXIST
    const user = await prisma.user.findUnique({
        where: {username}
    });

    if(!user) return res.status(401).json({message: "Invalid Credentials!"});

    // CHECK IF THE PASSWORD IS CORRECT
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid) return res.status(401).json({message: "Invalid Credentials!"});


    // GENERATE COOKIE TOKEN AND SEND TO THE USER
    const age = 1000*60*60*24*7;

    const token = jwt.sign({
        id:user.id
    },process.env.JWT_SECRET_KEY,
    {expiresIn:age})

    const {password:userPassword,...userInfo} = user;

    res.cookie("token", token,{
        httpOnly:true,
        // secure:true
        maxAge:age,
    })
    .status(200)
    .json(userInfo);
   }catch(err){
        console.log(err);
        res.status(500).json({message: "Failed to login"})
    }
}



// LOGOUT
export const logout = (req,res)=>{
    res.clearCookie("token").status(200).json({message:"Logout Successful"});
}