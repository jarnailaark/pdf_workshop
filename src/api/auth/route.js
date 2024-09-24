// import NextAuth from 'next-auth'
// import Providers from 'next-auth/providers';
// import { signIn } from 'next-auth/react';
// import {connectToDB} from '@utils/databasemongo';
// import User from '@models/user';
// await connectToDB();
import { NextResponse } from "next/server";

//Handling POST request
export async function POST(req, res) {
    //Get the Form Data
    // return NextResponse.json("name age city" );

    // const Formdata = await req.data();
    const name = 'fullname';
    const age = 'email';
    const city = 'password';
    //Response 
    return NextResponse.json({ name, age, city })
}

// const handler = NextAuth ({
    
//     async session(session) {
//        const sessionUser = await User.findOne({
//         email: session.user.email
//        })
//        session.user.id = sessionUser._id.toString();
//        return session;
//     },

//     async signIn({profile}) {
//         try {
//             await connectToDB();
            
//             const userExists = await User.findOne({
//                 email: profile.email
//             })

//             if (!userExists) {
//                 await User.create({
//                     email: profile.email,
//                     username: profile.name.replace(" ","").toLowerCase(),
//                     image: profile.picture
//                 })
                
//             }
//         } catch (error) {
            
//         }
//     }

// })

// export {handler as GET, handler as POST }