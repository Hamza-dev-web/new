import { GetDataCard } from "@/lib/action"
import { Card } from "../components/homecard"
import Image from "next/image"
import { BuyBtn } from "../components/customBtn"
export default  async function Home() {
const data :any = await GetDataCard()
    return(
<div className="  opacity-100  bg-slate-900 bg-contain  bg-blur  relative flex min-h-screen  min-w-screen    justify-center   ">
<div className="    bg-contain   flex  flex-col  h-[600px] w-[600px]  bg-slate-200 rounded-lg mt-10   ">
<div className=" gap-4  flex flex-row flex-wrap mt-3   place-items-start">
    <Image 
    src="/assets/icons/profile.svg"
    width={40}
    height={40}
    alt=""
    />
    <p>{}$</p>
     {data?.length > 0  ? (
        < div className=" justify-start gap-2   mr-10 flex flex-col  text-center ml-4 flex-wrap " >
{data?.map((itm :any) =>(
      <div className="flex   text-center ml-4 flex-wrap place-items-start  justify-between" key={itm.id}>
      <p className=" m o">{itm.title}</p>
      <BuyBtn/>
   </div>
))}

</div>
     ):(
        <></>

     )}
     </div>
     

  </div>
     </div>

        
    )
    
}