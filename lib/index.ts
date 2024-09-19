import mongoose , {Mongoose} from "mongoose";
const user = new mongoose.Schema({
    name :{type :String , require :true , unique:true} ,
    email :{type :String , require :true , unique:true} ,
})

export const User = mongoose.models?.Exemple || mongoose.model("Exemple" , user)



const MONGODB_URL= process.env.MONGODB_URL;
interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose

if(!cached) {
  cached = (global as any).mongoose = { 
    conn: null, promise: null 
  }
}

export const connectToDatabase = async () => {


  if(!MONGODB_URL) throw new Error('Missing MONGODB_URL');


return await    mongoose.connect(process.env.MONGODB_URL! || "", { 
       bufferCommands: false 
    })

  
}


const Data = new mongoose.Schema({
  title :{type :String , require :true , unique:true} ,
  category :{type :String , require :true } ,
  price :{type :Number , require :true } ,
  countity:{type :Number , default :1},
  image:{type :String , require :true }

})
export const DataModel = mongoose.models.dataExemple || mongoose.model('dataExemple' , Data)

/*
 export const SaveApost = mutation ({
args :{ idofMovie :v.string(),price : v.number() ,title:v.string() , image : v.string(),user :v.string() , description : v.optional(v.string()) } ,
handler : async (ctx, args)=> {
console.log(args.user)
  const user2 = await ctx.db.query('users' ).filter((q )=> q.eq (q.field("Firstname") ,args.user)).collect()
  console.log(user2)
  

  const data  = {
    idofMovie : args.idofMovie,
    title : args.title,
    user : args.user,
    price : args.price,
    image : args.image,
    description :args.description
  } 
    await ctx.db.patch(user2[0]._id , {...user2[0] ,storedFilm : [...user2[0].storedFilm,data] as any } )


 


        
}
})
*/