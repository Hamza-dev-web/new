"use client"
import { api } from "@/convex/_generated/api"
import { useMutation } from "convex/react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import React from "react";
import {
    PaymentElement,
    useStripe,
    useElements,
    Elements
  } from "@stripe/react-stripe-js";
  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  
  import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./payement"
export interface prop {
    productId?:string
    title :string ,
    price :number
    category : string
    image :string
    countity?:string,
    description : string
}

export const CardData =({itm  ,user , isHome }:{itm :prop , user:any, isHome :boolean }) =>{
const router = useRouter()
const stripe = loadStripe(process.env.EXPO_PUBLIC_STRIPE_PUBLISHABLE! || "pk_test_51OhcxIA4M2e8uGKek9Z4GnTcfV9Cd7dJwd3co417g2gpnm5GyPWXOj3ZnhsUvaq5woJsBnND6zlj26GbLA7t0d7d00HC6EXgEM");
const [clientSecret, setClientSecret] = React.useState("");
  const [dpmCheckerLink, setDpmCheckerLink] = React.useState("");
const [modal , setModal] = useState(false)
const handleStartPayement =async (price :number)=>{
console.log(price)
  await fetch("/api/stripe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount: price}),
  })
    .then(async(res) => res.json())
    .then((data) => {
console.log(data.clientSecret)
    if( data.clientSecret){
      setClientSecret(data.clientSecret)
      setDpmCheckerLink(data.dpmCheckerLink);
      setModal(false)
    }
    });
}
console.log(clientSecret)
    return(
<div className=" bg-white w-[300px] h-auto flex flex-col justify-center items-center     p-3 rounded-lg  gap-4">
{/*isHome === true ?( 
<div className="w-[200px] h-[100px]   justify-center items-center flex  rounded-md  ">
<div className=" flex  gap-2 w- bg-white rounded-lg">
    <img
    src={user && user.image}
   width={40}
   height={40}    
   className=" rounded-full"
    />
     <Badge className=" cursor-pointer " >{user && user?.name}</Badge>
    
</div>
</div>
):(
    <div className="w-[200px] h-[100px]   justify-center items-center flex  rounded-md ml-28 ">
<div className=" flex  gap-2 w- bg-white rounded-lg">
    <img
    src={user && user[0].avatarUrl}
   width={40}
   height={40}    
   className=" rounded-full"
    />
     <Badge className=" cursor-pointer " >{user && user[0]?.name}</Badge>
    
</div>
</div>
)
*/}
<h1 className=" text-black text-[20px]">{itm.title}</h1>
<Image 
src={itm.image}
width={200}
height={200}
alt=""
className=" rounded-lg"
/>
<h2 className=" text-black">{itm.category}</h2>
<p className=" text-black">{itm.description}</p>
{
    isHome === true ?(
  <>
  <Dialog>

  {modal == false ? (
          <DialogTrigger  onClick={async()=> { 
            await handleStartPayement( itm.price)
            setModal(true)
            }}className=" flex justify-between items-center   gap-4 mt-3">

          <Badge className=" bg-gray-200 hover:bg-green-400  p-3 m-2  cursor-pointer "  >Buy</Badge>
          <p className=" font-extrabold text-black">{itm.price} $</p>
          
          </DialogTrigger>
  ) :(
    <DialogContent>
    {clientSecret != "" && (
        <Elements  options={{clientSecret :clientSecret}} stripe={stripe}  >
      <DialogTitle hidden={true}>d</DialogTitle>
       <CheckoutForm dpmCheckerLink={dpmCheckerLink} />
              </Elements>
      )
      }
  
      </DialogContent>
  
    

  )}
  </Dialog>

  
  </>
    ):(
        <div className=" flex justify-between items-center   gap-4 mt-3" onClick={()=> router.push(`/${itm.productId}/update`)} >

        <Badge className="  p-3 m-2  cursor-pointer " >Edit</Badge>
        <p className=" font-extrabold">{itm.price} $</p>
        
        </div>
    )
}
</div>
    )
}