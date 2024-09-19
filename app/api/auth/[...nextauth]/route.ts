import type { NextAuthOptions } from "next-auth"
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth, { getServerSession } from "next-auth"

 export const Options: NextAuthOptions = {

  session :{
    strategy :"jwt"
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID! ,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    
    
  ],

  callbacks:{
    async signIn ({account , profile})  {
      if(!profile?.email) {
        throw new Error("no user")
      }
 

return profile && true     
    },
  
    async session({ session, token }: { session: any; token: any }) {
      if (session.user) {
        session.user.email = token.email;
        session.user.name = token.name;
      }
      return session;
    },
  },
  }

export const getUser = async () =>{
  const auth = await getServerSession()
  return auth?.user
}



const handler = NextAuth(Options)
export {handler as GET ,handler as POST}