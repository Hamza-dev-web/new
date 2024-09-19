import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    Firstname: v.string(),
    Lastname: v.string(),
    email : v.string(),
    storedFilm : v.array(v.object({
      idofMovie : v.string(),
      title : v.string(),
      price : v.number(),
      description :v.optional(v.string()),
      image :v.string(),
      category : v.optional(v.string())

    }))
})
  

})