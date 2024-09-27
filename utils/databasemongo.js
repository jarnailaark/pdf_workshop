// import mongoose from "mongoose";

// let isConnected = false;

// export const connectToDB = async () => {
//     mongoose.set('strictQuery', true);

//     if(isConnected){
//         console.log("mongodb already connected");
//         return;
//     }

//     try {
//         await mongoose.connect( process.env.MONGO_URL , {
//             dbName: "pdf_work",
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         })

//         isConnected = true;
//         console.log("mongodb connected");

//     } catch (error) {
//         console.log(error);
        
//     }
// }

// lib/dbConnect.js
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGO_URL;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

/**
 * Global is used to maintain a cached connection across hot reloads in development.
 * This prevents connections from growing exponentially during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
        console.log("mongodb connected")
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
