"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Loader, View } from "lucide-react"
import { Id } from "@/convex/_generated/dataModel"
import { useToast } from "@/components/ui/use-toast"
import { useMutation, useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"
import { useRouter } from "next/navigation"
import { Label } from "@/components/ui/label"
import React from 'react';
import ImageUploading from 'react-images-uploading';
const formSchema = z.object({
  title: z.string().min(2) ,
  description :z.string().min(2),
  price :z.number(),
  category : z.string(),
  countity:z.number(),
})

export default function ProfileForm({params } :{params :{id:string}}) {
const router =useRouter()
const [isSubmitting, setIsSubmitting] = useState(false);
 const CreateProducts =useMutation(api.product.CreateProducts)
 const user = useQuery(api.users.GetUserbyId ,{id : params.id }) as any
const {toast} = useToast()
const [images, setImages] = React.useState<any>([]);
const maxNumber = 69;

const onChange = (imageList :any, addUpdateIndex :any) => {
  // data for submit
  console.log(imageList, addUpdateIndex);
  setImages(imageList);
};

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        title: "",
        description:"",
        price :0,
        category : "",
        countity:0,
    },
  })

  async function  onSubmit(values: z.infer<typeof formSchema>) {
    
try{
   await  CreateProducts({
        title : values.title ,
        description :values.description,
        price :values.price,
        category :values.category,
        image :images[0].data_url,
        countity :values.countity,
        userId : params.id as Id<"users">

    })

    toast({
        title:"Preduct  created"
    })
        
    setIsSubmitting(false)
    router.push("/")
}
 catch(err :any) {
    console.log(err)
    toast({
        title: 'Error',
        variant: 'destructive',
      })
      setIsSubmitting(false);
 }
  }
  return (
    <section className="mt-10 ml flex flex-col bg-slate-50">
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className=" mt-12   ml-8 flex w-full flex-col">
        <div className=" flex flex-col gap-[30px] border-b border-black-5  pb-10">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="¨PrdocuctsTitle" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

       
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>PodcastDescription</FormLabel>
              <FormControl>
                <Input  placeholder="ProductDescription" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
           <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Price" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
                 <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ProductCategory</FormLabel>
              <FormControl>
                <Input   placeholder="ProductCategory" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
                    <FormField
          control={form.control}
          name="countity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <FormControl>
                <Input type="number" placeholder="countity" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <div className=" flex items-center justify-center">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className=" flex gap-4">
            <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
              className="  text-3xl font-extrabold hover:p-3  hover:bg-gray-300 rounded-lg "
            >
              Click or Drop here
            </button>
            <Image 
            src="/assets/icons/image.svg"
            alt=""
            width={100}
            height={100}
            
            />
          </div>
        )}
      </ImageUploading>
    </div>
        <div className="flex flex-col pt-10">

              <div className="mt-10 w-full">
                <Button type="submit" className="text-16 w-full bg-orange-1 py-4 font-extrabold text-white-1 transition-all duration-500 hover:bg-black-1 hover:bg-slate-400">
                  {isSubmitting ? (
                    <>
                      Submitting
                      <Loader size={20} className="animate-spin ml-2" />
                    </>
                  ) : (
                    'Submit & Publish Podcast'
                  )}
                </Button>
              </div>




        </div>
       
      </form>
    </Form>
    </section>
  )
}
