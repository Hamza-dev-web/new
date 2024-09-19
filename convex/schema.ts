import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email : v.string(),
    avatarUrl : v.string(),
products :  v.array(v.object({
  productId : v.id("product"),
  title: v.string(),
  description : v.string(),
  price :v.number(),
  category : v.string(),
  image :v.string(), 
  countity:v.number(),
}))
}),
product: defineTable({
  author : v.id("users") ,
  title: v.string(),
  description : v.string(),
  price :v.number(),
  category : v.string(),
  image :v.string(), 
  countity:v.number(),

})
})