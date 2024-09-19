"use client"
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

 const Login =()=>{
   const CreateUser = useMutation(api.users.CreateUser)
    return(
      <div className="   flex flex-row  ml-2  mt-28 items-center text-center justify-center gap-6 flex-wrap  ">
   <div className=" flex flex-col gap-9 bg-slate-400  rounded-lg p-10 m-10">
    <p className=" font-mono text-balance font-bold"> SignIn to your account  </p>
   <div className=" hover:bg-slate-50  bg-slate-300 w-[140px] rounded-lg flex flex-row items-center  text-center justify-center  gap-2 flex-wrap"   onClick={async ()=>{
 signIn("google")

   }}>
      <Image 
      className="rounded-lg cursor-pointer mr-8"
      width={40}
      height={40}
      alt=""
      src="/png.png"
      />
      <p className=" cursor-pointer font-extrabold ">Google </p>
      </div>
   </div>
<div className=" flex ml-9  bg-gray-500 rounded-lg ">
<Image 
  src="/assets/icons/stars.svg"
  alt=""
  className=" rounded-lg  "
  width={1000}
  height={1500}
  />
</div>
     </div>
    )
  
  }
  export default Login