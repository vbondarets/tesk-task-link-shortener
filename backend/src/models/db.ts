import mongoose from 'mongoose'

export const mongoDB = async () => {
    try {
        if (process.env.MONGO_HOST) {
            const connect: typeof mongoose = await mongoose.connect(process.env.MONGO_HOST);
            console.log(`MongoDB Connected: ${connect.connection.host}`);
        }
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
