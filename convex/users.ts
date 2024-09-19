
import { Id } from "./_generated/dataModel";
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
export const CreateUser = mutation({
    args: { name: v.string() , email :v.string(),avatarUrl :v.string() },
    handler: async (ctx, args) => {
   const user = await ctx.db.query("users").filter((e) => e.eq(e.field("email"),args.email )).collect()
   if(user.length > 0 && user[0].email  == args.email ) return user[0]
      const newuser = await ctx.db.insert("users", { name: args.name ,  email : args.email , avatarUrl : args.avatarUrl , products :[] });
      return newuser;
    },
  })
  export const GetUser = query({
    args: {email:v.string()},
    handler: async (ctx , args) => {
      
        const user = await ctx.db.query("users").filter((e) => e.eq(e.field("email"),args.email )).collect()
      
      return user;
      
    },
  })
  export const GetUserbyId = query({
    args: {id:v.string()},
    handler: async (ctx , args) => {
      
        const user = await ctx.db.query("users").filter((e) => e.eq(e.field("_id"),args.id )).collect()
      
      return user;
      
    },
  })
  export const DeleteUser = mutation({
    args: {id:v.string()},
    handler: async (ctx , args) => {
     await ctx.db.delete(args.id as Id<"users">)
    
      
    },
  })

  
 