"use client"

import { api } from "@/convex/_generated/api"

import { useQuery } from "convex/react"
import { CardData } from "../../components/homecard"
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Badge } from "@/components/ui/badge";

export default function Page({params } :{params :{id:string}}) {
  const product = useQuery(api.product.GetProducts ,{id :params.id})
 console.log(product)
  const user = useQuery(api.users.GetUserbyId ,{id : params.id})
        return(
            <div className="flex flex-col gap-4 card mt-2">



            {
                product && product.length > 0 ? (
            <div  className="  justify-center  mt-4 flex flex-row gap-8 flex-wrap items-center text-center">
 
            {
                product.map((itm :any) =>(
                    <div key={itm.id}>
            <CardData itm={itm} user={user} isHome={false}/>
                </div>
                ))
            }
            </div>
                ) :(
                    <div className="flex w-screen h-screen bg-white-2 flex-col gap-3 items-center justify-start ">
                    <div className=" flex  gap-20  ml-5  h-[700px]">
        
                    <Stack spacing={2}>

                        
                          {/* For variant="text", adjust the height via font-size */}
                          <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    
                          {/* For other variants, adjust the size with `width` and `height` */}
                          <Skeleton variant="circular" width={100} height={100} />
                          <Skeleton variant="rectangular" width={500} height={200} />
                          <Skeleton variant="rounded" width={500} height={200} />
                        </Stack>
                        <Stack spacing={1}>
                          {/* For variant="text", adjust the height via font-size */}
                          <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    
                          {/* For other variants, adjust the size with `width` and `height` */}
                          <Skeleton variant="circular" width={100} height={100} />
                          <Skeleton variant="rectangular" width={500} height={200} />
                          <Skeleton variant="rounded" width={500} height={200} />
                        </Stack>
                        <Stack spacing={1}>
                          {/* For variant="text", adjust the height via font-size */}
                          <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    
                          {/* For other variants, adjust the size with `width` and `height` */}
                          <Skeleton variant="circular" width={100} height={100} />
                          <Skeleton variant="rectangular" width={500} height={200} />
                          <Skeleton variant="rounded" width={500} height={200} />
                        </Stack>
                    </div>
                    <div className=" flex  gap-20  ml-5  h-[700px]">
                    <Stack spacing={2}>
                          {/* For variant="text", adjust the height via font-size */}
                          <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    
                          {/* For other variants, adjust the size with `width` and `height` */}
                          <Skeleton variant="circular" width={100} height={100} />
                          <Skeleton variant="rectangular" width={500} height={200} />
                          <Skeleton variant="rounded" width={500} height={200} />
                        </Stack>
                        <Stack spacing={1}>
                          {/* For variant="text", adjust the height via font-size */}
                          <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    
                          {/* For other variants, adjust the size with `width` and `height` */}
                          <Skeleton variant="circular" width={100} height={100} />
                          <Skeleton variant="rectangular" width={500} height={200} />
                          <Skeleton variant="rounded" width={500} height={200} />
                        </Stack>
                        <Stack spacing={1}>
                          {/* For variant="text", adjust the height via font-size */}
                          <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    
                          {/* For other variants, adjust the size with `width` and `height` */}
                          <Skeleton variant="circular" width={100} height={100} />
                          <Skeleton variant="rectangular" width={500} height={200} />
                          <Skeleton variant="rounded" width={500} height={200} />
                        </Stack>
                    </div>
                    </div>
                ) 
            }
            </div>
    
        )
        }
    