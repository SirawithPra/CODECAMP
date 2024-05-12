import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://sirawith:Aai08m121518AA@cluster0.dfmwyb2.mongodb.net/food-deli').then(() => console.log('DB connected'));
}