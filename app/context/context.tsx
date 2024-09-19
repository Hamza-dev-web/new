"use client"

import { createContext, useContext, useState } from "react"

export const Context = createContext(null)
export const ContextProvider= ({children}:{children : React.ReactNode}) =>{
const [Data , setData] = useState<string[] | number[] | any>(Dume)
const AddData = (data : string[] |number[] | any) =>{
setData([...Data , data])
}
const filterData = (id :number) =>{
const data = Data.filter((itm : any) => itm.id !== id)
setData(data)
}
const RemoveallData =() =>{
setData([])
}
console.log(Data)

    return (
    <Context.Provider value={{Data , AddData, filterData , RemoveallData } as any }>
{children}
    </Context.Provider>
)


}

export const Dume =[
    {
        id :1 ,
        name : "sdssds"
    },
    {
        id :2,
        name : "sdssds"
    },
    {
        id :3 ,
        name : "sdssds"
    },
    ,
    {
        id :4 ,
        name : "sdssds"
    }
    ,
    {
        id :5 ,
        name : "sdssds"
    }
    
]