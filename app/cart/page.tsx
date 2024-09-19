import { GetDataCard } from "@/lib/action"
import Image from "next/image"
import { Card } from "../components/homecard"
import { CostomBtn } from "../components/customBtn"
export default async function Page(){
    const data :any = await GetDataCard()

    return(
        <div className="flex flex-col gap-4">
        {
            data?.length > 0 ? (
        <div className="   justify-center  mt-4 flex flex-row gap-8 flex-wrap items-center text-center">
        {
            data.map((itm :any) =>(
                < div className=" gap-4 flex flex-col justify-center align-middle items-center " key={itm.id}>
                    <Card itm={itm} isHome={false}/>
            <CostomBtn itm={itm}/>
                </div>

            ))
        }
        </div>
            ) :(
                <div className="  bg-contain  bg-blur  relative  min-h-screen   gap-6  bg-slate-300  rounded-lg flex flex-row items-center  text-center justify-center  flex-wrap o p-8"   >
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