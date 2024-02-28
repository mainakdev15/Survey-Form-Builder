import mongoose from "mongoose";

const MONGODB_URI=process.env.MONGODB_URI

//initialising a cached variable which is intended to hold a cached connection to the database
let cached = (global as any).mongoose || {conn: null, promise: null};


export const connectToDatabase = async () => {

    //Connection runs for the first time
    if( cached.conn ) {
        return cached.conn;
    }

    if (!MONGODB_URI) throw new Error('MONGODB_URI is not defined')

    cached.promise =cached.promise || mongoose.connect(MONGODB_URI, {
        dbName:'SurveyDB',
        bufferCommands: false
    })

    cached.conn = await cached.promise;

    return cached.conn;
}
// mongoose.connect(MONGODB_URI);
// mongoose.Promise = global.Promise;
