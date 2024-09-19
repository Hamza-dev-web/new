"use server"

import { getUser } from "@/app/api/auth/[...nextauth]/route"
import { DataModel, User, connectToDatabase } from "."
import { prop } from "@/app/components/homecard"
import { redirect } from "next/navigation"
export const SignOutCostem =async() =>{
try {
    const user :any =await getUser()
    if(!user) throw new Error("no user")
    await User.findOneAndDelete({name :user.name})
}
catch(err) {
    console.log(err)
}
} 
export const AddItems = async(params :any) =>{
    console.log(params)
try{
    await connectToDatabase()
    const data = await DataModel.find()
    const check = data.find((itm) => itm.title === params.title)
    if(!check){
        const Data = new DataModel(
            params
        )
        await Data.save()
       console.log("succ")  
    }
    else{
console.log("alredy exixted")
    }
}
catch(err :any){
    console.log(err)
}
} 
export const GetDataCard =async ()=>{
    try {
        const data = await DataModel.find({})
        return data

    }
    catch(err :any){
        console.log(err)
    }
}
export const HandleContityP = async (itm :any , counti :number) =>{
    try{
        await connectToDatabase()
            const updateData = {
                    title :itm.title,
                    price:itm.price,
                    image :itm.image,
                    category:itm.category,
                    countity : itm.counti >=1 ? itm.countity + counti : 1

            }
            console.log(updateData)
        await DataModel.findByIdAndUpdate(itm._id ,updateData ,{new :true}  )
console.log("succ")
        }

    catch(err :any){
        console.log(err)
    }
}
export const HandleContityM =async (itm :any , counti :number) =>{
    try{
        await connectToDatabase()
            const updateData = {
                    title :itm.title,
                    price:itm.price,
                    image :itm.image,
                    category:itm.category,
                    countity : itm.counti >=1 ? itm.countity - counti : 1

            }
            console.log(updateData)
        await DataModel.findByIdAndUpdate(itm._id ,updateData ,{new :true}  )
console.log("succ")
        }
    catch(err :any){
        console.log(err)
    }
}