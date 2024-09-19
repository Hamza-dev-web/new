"use client"
import { AddItems } from "@/lib/action"
import { api } from "@/convex/_generated/api"
import { useMutation } from "convex/react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export interface prop {
    _id?:string
    id :string
    title :string ,
    price :number
    category : string
    image :string
    countity?:string,
    description : string
}
export const Card =({itm ,isHome ,user }:{itm :prop , isHome :boolean , user:any }) =>{

    const [isClick , setIsClick] =useState(false)
    const data ={
        idofMovie : String(itm.id),
        Firstname :user.name ,
        title : itm.title,
        price : itm.price,
        description : itm.description ,
        category :itm.category ,
        image : itm.image

      }
//const Mutate = useMutation(api.users.saveAMovie)


  
    useEffect(() =>{
        const HandleAdd =async () =>{
            
//await AddItems(data as any)
setIsClick(false)
        }
        if (isClick === true) {
            HandleAdd()
        }

    },[isClick])
   
    return(
        <div className="flex flex-col gap-5 text-center ml-4 flex-wrap justify-center" key={itm.id}>
           <p className="m o">{itm.title}</p>
         <Image
        src={itm.image}
        alt=""
        width={250}
        height={250}
        className="O"        
        />
        <p className="o" >{itm.category}</p>
        <p className="o">{itm.price} $</p> 
        { isHome && (
        <div onClick={() =>setIsClick(false) } className=" flex flex-row flex-wrap gap-3 items-center justify-center text-center">
<p className=" text-[20px] o">ToCart</p>
<Image 
src="/assets/icons/add.svg"
alt=""
className=" mt-0 rounded-lg"
width={20}
height={30}
/>
</div>
        )
}   
          </div>
    )
}