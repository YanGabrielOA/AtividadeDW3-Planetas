import userServices from "../Services/userServices.js";
import { ObjectId } from "mongodb";

const cadUser = async (req,res) =>{
    try{
        const {nome,email,password} = req.body
        await userServices.create(nome,email,password)
        res.sendStatus(200)
    }catch(error){
        console.log(error)
    }
}

const getAllUsers = async (req,res) =>{
    try{
        const users = await userServices.getAll();
        res.Status(200).json({users:users})
    }catch(error){
        console.log(error)
    }
}

const delUser = async (req,res)=>{
    try{
    if(ObjectId.isValid(req.params.id)){
        const id = req.params.id
        await userServices.delete(id)
        res.sendStatus(204)
    }else{
        res.sendStatus(400)
    }
    }catch(error){
    console.log(error)
}

//
}