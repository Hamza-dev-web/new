"use client"

import { HandleContityM, HandleContityP, SignOutCostem } from "@/lib/action"
import { signOut } from "next-auth/react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"


export const Nav =()=>{
    const router = useRouter()
    const signout = () =>{
        SignOutCostem()
        signOut()
        router.push("/")
    }
    return(
        <nav className="  bg-slate-500 rounded-lg mt-3 flex flex-row  justify-between gap-3 flex-wrap">
<div className="mt-3 flex flex-row   items-center text-center gap-3 flex-wrap">
<p className=" text-[35px]">The Dream</p>
<Image 
src="/assets/images/logo-icon.svg"
alt=""
className=" mt-0 rounded-lg"
width={150}
height={200}
/>

</div>
<div className="  mt-3 flex flex-row  justify-between gap-3 flex-wrap">
<Link href="/">
<Image 
src="/assets/icons/home.svg"
alt=""
width={50}
height={40}
/>
</Link>
<Link href="/cart">
<Image 
src="/assets/icons/add.svg"
alt=""
width={50}
height={40}
/>
</Link>
<Link href="/confurm">
<Image 
src="/assets/icons/coins.svg"
alt=""
width={50}
height={40}
/>
</Link>

<button onClick={() => signout()} className=" text-[20px]">
    Out
<Image 
src="/assets/icons/caret-down.svg"
alt=""
width={50}
height={40}
/>
</button>
</div>
</nav>
    )
}

