"use client";
import { useQuery , useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useState } from "react";

export default function  Create(){
    const [Firstname , setFirstName] = useState("")
    const [Lastname , setlastName] = useState("")
    const [email , setemail] = useState("")
    const CreateUsers = useMutation(api.users.CreateUsers);
    const users = useQuery(api.users.GetUsers)
    console.log(users)
    const handleSubmit =async(e:React.FormEvent<HTMLFormElement>) =>{
e.preventDefault()
const data ={
    Firstname,
    Lastname,
    email
}
try {
    await CreateUsers(data)
    return console.log("success")

}catch(err :any) {
    console.log(err)
}
    }
 
    return (
  <form className=" flex flex-col gap-3 mt-8 bg-slate-100" onSubmit={handleSubmit}>
<label> FirstName</label>
<input placeholder="firstName" value={Firstname} onChange={(e)=> setFirstName(e.target.value)}/>
<label> LastName</label>
<input placeholder="Lastname" value={Lastname} onChange={(e)=> setlastName(e.target.value)}/>
<label> FirstName</label>
<input placeholder="email" value={email} onChange={(e)=> setemail(e.target.value)}/>
<button type="submit">Submit</button>

  </form>
    )
} 