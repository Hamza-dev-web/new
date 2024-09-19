"use client"
import { signIn } from "next-auth/react";
import Image from "next/image";

 const Login =()=>{
    return(
      <div className="   flex flex-row  ml-2  mt-10 items-center text-center justify-center gap-6 flex-wrap">
   <div className=" flex flex-col gap-9 bg-slate-400  rounded-lg p-10 m-10">
    <p className="f"> signIn to your account  </p>
   <div className="  bg-slate-300  rounded-lg flex flex-row items-center  text-center justify-center  gap-2 flex-wrap"   onClick={() => signIn("google")}>
      <Image 
      className="rounded-lg cursor-pointer mr-8"
      width={40}
      height={40}
      alt=""
      src="/png.png"
      />
      <p className=" cursor-pointer ">Sign with Google </p>
      </div>
   </div>
<div className=" flex ml-9  ">
<Image 
  src="/assets/icons/stars.svg"
  alt=""
  className=" rounded-lg  "
  width={700}
  height={1000}
  />
</div>
     </div>
    )
  
  }
  export default Login