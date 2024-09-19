"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { number, z } from "zod"
 
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
import Image from "next/image"
const formSchema = z.object({
  title: z.string().min(2) ,
  description :z.string().min(2),
  price :z.number(),
  category : z.string(),
  image :z.string(), 
  countity:z.number(),
})

export default function ProfileForm({params } :{params :{id:string}}) {
  const product = useQuery(api.product.GetProductsbyId ,{id: params.id }) as any
 
return (
  <>
  {product && product.length > 0 &&  <UpadtedForm product={product}/>}
  </>
)

}

const UpadtedForm =({product } :{product :any[]})=>{
  const [images, setImages] = React.useState<any>([]);
  const maxNumber = 69;
  const onChange = (imageList :any, addUpdateIndex :any) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
const router =useRouter()

const [isSubmitting, setIsSubmitting] = useState(false);
 const UpdateProduct =useMutation(api.product.UpdateProduct)





 const user = useQuery(api.users.GetUserbyId ,{id:product && product[0].author}) as any
 const {toast} = useToast()
 console.log(user)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        title:product &&  product[0].title ,
        description: product && product[0].description || "",
        price :product && Number(product[0].price) || 0,
        category :product && product[0].category ||  "",
        image :product && product[0].image || "",
        countity:product && Number(product[0].countity) ||0,
    },
  })

  async function  onSubmit(values: z.infer<typeof formSchema>) {
    
try{
    await UpdateProduct({
        productId :product && product[0]._id,
        title : values.title ,
        description :values.description,
        price :Number(values.price),
        category :values.category,
        image :images.length  == 0 ?  product && product[0].image  : images[0].data_url,
        countity :Number(values.countity),
        userId : user && user[0]._id

    })

    toast({
        title:"Product  Updated"
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
    <section className="mt-10 flex flex-col">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" mt-12  ml-2 flex w-full flex-col">
        <div className=" flex flex-col gap-[30px] border-b border-black-5  pb-10">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input  placeholder="¨PrdocuctsTitle" {...field} />
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
                <Input placeholder="ProductDescription" {...field} />
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
                <Input placeholder="ProductCategory" {...field} />
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
                <Button type="submit" className="text-16 w-full bg-orange-1 py-4 font-extrabold text-white-1 transition-all duration-500 hover:bg-black-1">
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