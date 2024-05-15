import userModel from "../models/userModel.js";


// add items to user cart
const addToCart = async(req,res)=>{
    try{
        const userId= req.body.userId;
        //Find the user by ID
        // const userData = await userModel.findOne({_id:userId}); //work as same as underlined
        const userData = await userModel.findById(userId);
        //console.log(userData)

        if (!userData) {
            return res.json({success: false, message: 'User Not Found'});
        }

        let cartData = await userData.cartData;

        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1;
        }else{
            cartData[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(userId,{cartData});
        res.json({success:true,message:'Item Added To Cart'});
    }catch(err){
        console.log(err);
        res.json({success:false,message:'Server Error'});
    }
};

//remove items from user cart
const removeFromCart = async(req,res)=>{
    try {
        const userId= req.body.userId;
        const cartId= req.body.itemId;
        //Find the user by ID
        const userData = await userModel.findById(userId);
        const cartData = await userData.cartData;
        if(cartData[cartId]>0){
            cartData[cartId] -= 1;
        }
        await userModel.findByIdAndUpdate(userId,{cartData});
        res.json({success:true,message:'Item Removed From Cart'});

    }catch(err){
        console.log(err);
        res.json({success:false,message:'Server Error'});
    }
};

//reset items from user cart
const resetFromCart = async(req,res)=>{
    try {
        const userId= req.body.userId;
        const cartId= req.body.itemId;
        //Find the user by ID
        const userData = await userModel.findById(userId);
        const cartData = await userData.cartData;
        if(cartData[cartId]>0){
            cartData[cartId] = 0;
        }
        await userModel.findByIdAndUpdate(userId,{cartData});
        res.json({success:true,message:'Item Reset From Cart'});

    }catch(err){
        console.log(err);
        res.json({success:false,message:'Server Error'});
    }
};

//fetch user cart data
const getCart = async (req,res) => {
    try{
        let userId= req.body.userId;
        //Find the user by ID
        let userData = await userModel.findById(userId);
        let cartData = await userData.cartData;
        //console.log({cartData})
        res.json({success:true,cartData});

    }catch(err){
        console.log(err);
        res.json({success:false,message:'Server Error'});
    }

};

export { addToCart, removeFromCart, getCart, resetFromCart };