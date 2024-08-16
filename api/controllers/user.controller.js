import prisma from "../lib/prisma.js";
import  bcrypt  from 'bcryptjs';
// import { savePost } from './user.controller.js';


// To get all users
export const getUsers = async (req,res)=>{
    try{
        console.log("All users are: \n");
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Failed to get users!"});
    }
}


// To get a single user
export const getUser = async (req,res)=>{
    const id = req.params.id;

    try{
        console.log("get user works")
        const user = await prisma.user.findUnique({
            where:{id}
        });
        res.status(200).json(user);
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Failed to get user!"});
    }
}


// To update a single user
export const updateUser = async (req,res)=>{
    const id = req.params.id;
    const tokenUserId = req.userId;
    const {password,avatar,...inputs} = req.body;

    if(id !== tokenUserId){
        res.status(403).json({message:"Not authorized."});
    }
    
    let updatedPassword = null;
    try{

        if(password){
            updatedPassword = await bcrypt.hash(password,10);
        }
        const updatedUser = await prisma.user.update({
            where:{id},
            data:{
                ...inputs,
                ...(updatedPassword && {password:updatedPassword}),
                ...(avatar && {avatar}),
            }
        })
        const {password:userPassword,...rest} = updateUser;
        res.status(200).json(rest);
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Failed to update user!"});
    }
}


// To delete a single user
export const deleteUser = async (req,res)=>{

    const id = req.params.id;
    const tokenUserId = req.userId;

    if(id !== tokenUserId){
        res.status(403).json({message:"Not authorized."});
    }

    try{

        await prisma.user.delete({
            where:{id},
        })
        res.status(200).json({message:"user deleted"});

    }catch(err){
        console.log(err);
        res.status(500).json({message:"Failed to delete user!"});
    }
}


// To save a post
export const savedPost = async (req,res)=>{

    const postId = req.body.postId;
    const tokenUserId = req.userId;

    try{

        const savedPost = await prisma.savedPost.findUnique({
            where:{
                userId_postId:{
                    userId: tokenUserId,
                    postId,
                },
            }
        });

        if(savedPost){
            await prisma.savedPost.delete({
                where: {
                    id: savedPost.id,
                },
            })
            res.status(200).json({message: "Post removed from saved list"});
        }
        else{
            await prisma.savedPost.create({
                data: {
                    userId: tokenUserId,
                    postId,
                }
            });
            res.status(200).json({message: "Post saved"});

        }

    }catch(err){
        console.log(err);
        res.status(500).json({message:"Failed to save post!"});
    }
}



export const profilePosts = async (req,res)=>{
    // const id = req.params.id;
    const tokenUserId = req.params.userId;

    try{
        const userPosts = await prisma.post.findMany({
            where:{userId:tokenUserId}
        });

        const saved = await prisma.savedPost.findMany({
            where:{userId:tokenUserId},
            include: {
                post:true,
            },
        });
        const savedPosts = saved.map((item)=> item.post);

        res.status(200).json({userPosts,savedPosts});
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Failed to get profile posts!"});
    }
}