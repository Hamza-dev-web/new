import { CardData } from "./components/homecard"
import Image from "next/image"
import { getUser } from "./api/auth/[...nextauth]/route"
import { ListData } from "@/lib/utils"
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { useTheme } from "next-themes";

export default  async function Home() {
const data = await ListData()
const user = await getUser()
    return(
<div className="flex flex-col gap-4 card">
{
    data.length > 0 ? (
<div  className="  justify-center  mt-4 flex flex-row gap-8 flex-wrap items-center text-center">
{
    data.map((itm :any) =>(
        <div key={itm.id}>
<CardData itm={itm} user={user} isHome={true}/>
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
