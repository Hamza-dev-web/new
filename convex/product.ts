
import { title } from "process";
import { Id } from "./_generated/dataModel";
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { profile } from "console";
export const CreateProducts = mutation({
    args: { userId :v.id("users") ,title: v.string() , description :v.string(), image:v.string() , price:v.number(), category :v.string() ,countity:v.number() },
    handler: async (ctx, args) => {
   const user = await ctx.db.query("users").filter((e) => e.eq(e.field("_id"),args.userId )).collect()
      const newProduct = await ctx.db.insert("product", { title: args.title ,  description : args.description , image: args.image ,category : args.category , price :args.price , countity:args.countity , author : args.userId  }); 
    console.log(newProduct)
      if(user.length >0){
    await ctx.db.patch(args.userId ,{
        ...user[0],
        products :[
            ...user[0].products,
            {
                productId :newProduct,
                title: args.title ,
                description : args.description ,
                 image: args.image ,
                 category : args.category ,
                  price :args.price ,
                   countity:args.countity , 
            }
          
        ]

    })
}
   
   
      return newProduct;

    },
  })
  export const UpdateProduct = mutation({
    args: { productId :v.id("product"), userId :v.id("users")  ,title: v.string() , description :v.string(), image:v.string() , price:v.number(), category :v.string() ,countity:v.number() },
    handler: async (ctx, args) => {
        const user = await ctx.db.query("users").filter((e) => e.eq(e.field("_id"),args.userId )).collect()
await ctx.db.patch(args.productId ,
    { title: args.title ,  description : args.description , image: args.image ,category : args.category , price :args.price , countity:args.countity , author : args.userId  })
    if(user.length >0){
     const previousProduct = user[0].products.filter((itm) => itm.productId !== args.productId) 
        await ctx.db.patch(args.userId ,{
            ...user[0],
            products :[
               ...previousProduct ,
                {
                    productId:args.productId,
                    title: args.title ,
                    description : args.description ,
                     image: args.image ,
                     category : args.category ,
                      price :args.price ,
                       countity:args.countity , 
                }
              
            ]
    
        })
    }


}
    
  })
  export const DeleteProduct = mutation({
    args: { productId :v.id("product"), userId : v.id("users")},
    handler: async (ctx, args) => {
await ctx.db.delete(args.productId)
const user = await ctx.db.query("users").filter((e) => e.eq(e.field("_id"),args.userId )).collect()
if(user.length >0){
    const product = user[0].products.filter((itm)=> itm.title !== args.productId )
await ctx.db.patch(args.userId ,{
  ...user[0],
  products :product

})
    }
}
  })
  export const GetProducts = query({
    args: {id:v.string()},
    handler: async (ctx , args) => {
      
        const user = await ctx.db.query("users").filter((e) => e.eq(e.field("_id"),args.id )).collect()

      
      return user[0].products
      
    },
  })
  export const GetProductsbyId = query({
    args: {id:v.string()},
    handler: async (ctx , args) => {
      
        const product = await ctx.db.query("product").filter((e) => e.eq(e.field("_id"),args.id )).collect()

      if (product.length >0  ) return product
      
    },
  })