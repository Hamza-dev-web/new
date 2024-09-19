import { title } from "process";
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
export const CreateUsers = mutation({
    args: { Firstname: v.string() , Lastname :v.string() , email:v.string()},
    handler: async (ctx, args) => {
      const newTaskId = await ctx.db.insert("users", { Firstname: args.Firstname , Lastname:args.Lastname , email : args.email as string , storedFilm :[]});
      return newTaskId;
    },
  });
  export const saveAMovie = mutation ({
    args: { Firstname: v.string() , idofMovie :v.string() , title:v.string() ,price :v.number() ,description : v.optional(v.string()) , image : v.string() , category :v.optional(v.string()) },
    handler: async (ctx, args) => {
      const user = await ctx.db.query("users").filter((e) => e.eq(e.field('Firstname' ) ,args.Firstname)).collect()
      if(user.length == 0){
        return console.log("err")
      }
      const data ={
        idofMovie : args.idofMovie,
        title : args.title,
        price : args.price,
        description : args.description ,
        category :args.category ,
        image : args.image

      }
      await ctx.db.patch(user[0]._id , {...user[0],storedFilm : [...user[0].storedFilm , data]})

    },


  })
















  export const GetUsers = query({
    args: { },
    handler: async (ctx) => {
        const tasks = await ctx.db
        .query("users").collect();
      
      return tasks;
      
    },
  });// to get all users


  
 