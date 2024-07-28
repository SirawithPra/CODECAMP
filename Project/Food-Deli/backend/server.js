import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import 'dotenv/config.js'
import cartRouter from './routes/cartRoute.js';
import orderRounter from './routes/orderRoute.js';


// app config
const app = express();
const port = process.env.PORT||4000

// middlewares
app.use(express.json());
app.use(cors());

// db connections
connectDB();

//api endpoints
app.use('/api/food',foodRouter);
app.use('/images',express.static('uploads'));  //access picture in folder
app.use('/api/user',userRouter);
app.use('/api/cart',cartRouter);
app.use('/api/order',orderRounter)

app.get('/', (req,res)=>{
    res.send('API working')
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})

//mongodb+srv://sirawith:Aai08m121518AA@cluster0.dfmwyb2.mongodb.net/?
//retryWrites=true&w=majority&appName=Cluster0