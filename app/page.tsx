
import { getSession } from "next-auth/react"
import { Card } from "./components/homecard"
import Image from "next/image"
import { getUser } from "./api/auth/[...nextauth]/route"
export default  async function Home() {
  const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    const user = await getUser()
     
    return(
<div className="flex flex-col gap-4">
{
    data.length > 0 ? (
<div  className="  justify-center  mt-4 flex flex-row gap-8 flex-wrap items-center text-center">
{
    data.map((itm :any) =>(
        <div key={itm.id}>
<Card itm={itm}  isHome={true} user={user}/>
    </div>
    ))
}


</div>
    ) :(
        <div className="  bg-contain  bg-blur  relative    bg-slate-300  rounded-lg flex flex-row items-center  text-center justify-center  gap-2 flex-wrap"   >
        <Image 
        className="rounded-lg cursor-pointer mr-8"
        width={40}
        height={40}
        alt=""
        src="/assets/icons/search.svg"
        />
        <p className=" cursor-pointer ">Laoding ... </p>
        </div>
    )
}




</div>
    )
    
}