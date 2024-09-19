
"use client"

import { HandleContityM, HandleContityP, SignOutCostem } from "@/lib/action"
import { signOut } from "next-auth/react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState , useEffect } from "react"
import { prop } from "./homecard"
export const CostomBtn =({itm}:{itm :prop})=>{
    const [btn1 , setBtn1 ]=useState(false)
    const [num , setNumber] =useState(0)
    const [btn2 , setBtn2 ]=useState(false)
    useEffect(() =>{
        const HandleAdd =async () =>{
            if(btn1 ===true){
            setNumber(pre=> pre+1)
            await HandleContityP(itm ,num)
        setBtn1(false)    
        }
        }
        const HandleUpdate =async ()=>{
            setNumber(pre=> pre-1)
            await HandleContityM(itm ,num)
        setBtn2(false)    
        }
        if (btn1 === true) {
            HandleAdd()
        }
        else if(btn2 === true){
HandleUpdate()
        }

    },[btn1 , btn2])
    return (
        <div className=" flex flex-row ml-2 gap-4 flex-wrap ">
        <Image 
        src="/assets/icons/add.svg"
        alt=""
        height={70}
        width={40}
       className=" rounded-lg"
       onClick={() => setBtn1(true)}
        />
        <p className=" text-[20px]">{itm?.countity}</p>
         <div className=" flex  bg-slate-500 text-[35px] items-center p-2 m-1 rounded-lg   justify-center" onClick={()=> setBtn2(true)}>-</div>
           </div>
    )
}
export const BuyBtn =() =>{
    return(
        <div className="  bg-contain  bg-blur  relative    gap-1  bg-slate-300  rounded-lg flex flex-row items-center  text-center justify-center  o flex-wrap  p-2"   >
        <Image 
        className="rounded-lg cursor-pointer mr-8"
        width={40}
        height={40}
        alt=""
        src="/assets/icons/credit-coins.svg"
        />
        <p className=" cursor-pointer ">Buy  </p>
        </div>
    )
}