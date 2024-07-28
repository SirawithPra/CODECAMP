import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://sirawith:Aai08m121518AA@cluster0.dfmwyb2.mongodb.net/food-deli').then(() => console.log('DB connected'));
}
// import mongoose from 'mongoose';

// export const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log('DB connected');
//     } catch (error) {
//         console.error('DB connection error:', error);
//         process.exit(1);
//     }
// };
