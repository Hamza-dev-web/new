"use client"
import { Badge } from "@/components/ui/badge"
import { signOut } from "next-auth/react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useMutation } from "convex/react"
import { Switch } from "@/components/ui/switch"
import ImageUploading from 'react-images-uploading';
import { api } from "@/convex/_generated/api"
import { Id } from "@/convex/_generated/dataModel"
import { useState } from "react"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
export const Navbar =({user} :{user :any})=>{
    const router = useRouter()
    const { setTheme } = useTheme()
    const DeleteUser = useMutation(api.users.DeleteUser )
const [bg , setbg] = useState(false)
console.log(bg)

    return(
        <nav className={`${bg === true ? " bg-black" :"nav" }  rounded-lg mt-3 flex flex-row  justify-between gap-3 flex-wrap`}>
<div className="mt-3 flex flex-row   items-center text-center gap-3 flex-wrap" onClick={()=> router.push("/")}>
<p className=" text-[50px] cursor-pointer font-extrabold text-white"> DreamShop</p>
<Image 
src="/assets/images/logo-icon.svg"
alt=""
className=" mt-0 rounded-lg"
width={150}
height={150}
/> 
</div>
<Switch onClick={()=> { 
   
    setbg(pre => !pre )
    } } className="mt-20 " />

<div className="  mt-3 items-center flex flex-row  justify-between gap-3 flex-wrap">
<Link href={`/${user?._id}/profile`}>
<Image 
src="/assets/icons/profile.svg"
alt=""
width={50}
height={40}
/>
</Link>


<Link href={`/${user?._id}/create-Product`}>
<Image 
src="/assets/icons/add.svg"
alt=""
width={50}
height={40}
/>
</Link>

<div  onClick={() => {
    DeleteUser({id : user._id})
    signOut()
}} className="   items-center  flex  p-3 cursor-pointer ">
<Badge>
SignOut
</Badge>
</div >
</div>
</nav>
    )
}

