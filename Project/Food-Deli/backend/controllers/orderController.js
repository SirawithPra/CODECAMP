import e from "express";
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

//placing user order for frontend
const placeOrder = async(req,res)=>{

    const frontend_url = "http://localhost:5173";
    // const frontend_url = 'https://sirawith-food-deli-c1ce755e07f4.herokuapp.com';
    try{
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address,
        })
        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId, {cartData:{}})

        const line_items =req.body.items.map((item)=>({
            price_data:{
                currency:"thb",
                product_data:{
                    name:item.name
                },
                unit_amount:item.price*36.5*100
            },
            quantity:item.quantity
        }))

        line_items.push({
            price_data:{
                currency:"thb",
                product_data:{
                    name:"Delivery Charges"
                },
                unit_amount:2*36.5*100
            },
            quantity:1
        })
        const session = await stripe.checkout.sessions.create({
            line_items: line_items,
            mode:'payment',
            success_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url:`${frontend_url}/verify?success=false&orderId=${newOrder._id}`
        })
        res.json({success:true,session_url:session.url})
    }catch(err){
        console.log(err)
        res.json({success:false,message:'Server Payment Error'})
    }
};

const verifyOrder = async (req,res)=>{
    const {orderId,success}= req.body;
    try{
        if (success == "true"){
            await orderModel.findByIdAndUpdate(orderId, {payment:true});
            res.json({success:true,message:'Paid transaction'})
        }else{
            await orderModel.findByIdAndDelete(orderId);
            res.json({success:false,message:'Unpaid transaction'})
        }
    }catch(err){
        console.log(err)
        res.json({success:false,message:'Server Payment Error'})
    }
};

//user orders for frontend 
const userOrders = async (req,res)=>{
    try {
        const orders = await orderModel.find({userId:req.body.userId})
        res.json({success:true,data:orders})
    }catch(err){
        console.log(err);
        res.json({success:false,message:'Server Error'})
    }
} ;

//admin orders for backend; listening orders for admin panel
const listOrders = async (req,res)=>{
    try{
        const orders = await orderModel.find({});
        res.json({success:true,data:orders})
    }catch(err){
        console.log(err);
        res.json({success:false,message:'Server Error'})
    }
}

//api for updating order status
const updateStatus = async (req,res)=>{
    try{
        await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status})
        res.json({success:true,message:'Status updated'})
    }catch(err){
        console.log(err);
        res.json({success:false,message:'Server Error'})

    }
}


export {placeOrder, verifyOrder, userOrders, listOrders, updateStatus}