import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://sirawith:Aai08m121518AA@cluster0.dfmwyb2.mongodb.net/food-deli', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('DB connected');
    } catch (error) {
        console.error('DB connection failed:', error.message);
        process.exit(1); // ปิดการทำงานของแอปพลิเคชันหากการเชื่อมต่อล้มเหลว
    }
};

