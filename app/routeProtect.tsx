"use client"

import { useMutation, useQuery } from "convex/react"
import Login from "./components/login"
import {  Navbar } from "./components/nav"
import { api } from "@/convex/_generated/api"


export default function ProtectRoute ({children , user } :{children :React.ReactNode , user :any | undefined}){

let userdb= null
const CreateUser = useMutation(api.users.CreateUser)
if(user != undefined  ){
userdb = useQuery(api.users.GetUser,{email :user.email})
if(userdb == null && user != undefined) {
    CreateUser({
        name :user.name ,
        email :user.email,
        avatarUrl :user.image,

      })
}
}
const userPass ={
    _id :userdb&&  userdb[0]._id,

}


    return (
        <> 
        {user == undefined  ?  (
          <Login /> 
           ) :
         (
            <>
            <Navbar user={userPass}/>
            {children}
            </>
        )}

    </>

)
}