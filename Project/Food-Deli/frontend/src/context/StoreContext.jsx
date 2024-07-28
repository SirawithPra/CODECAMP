import axios from "axios";
import { createContext, useEffect, useState } from "react";
//import { food_list } from "../assets/assets"; //local state
export const StoreContext = createContext(null)

const StoreContextProvider = (props)=>{

    const [cartItems,setCartItems]= useState({});
    // const url = 'http://localhost:4000'
    const url = 'https://sirawith-food-deli-c1ce755e07f4.herokuapp.com'
    const [token,setToken] = useState("");
    const [food_list,setFoodList] = useState([]);

    const addToCart = async (itemId) => {
        if (!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
        if(token){
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        }
        console.log('add to cart')
    }

    const removeFromCart = async(itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(token){
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
        }
        console.log('removed from cart')
    }
    const resetFromCart = async(itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:0}))
        if(token){
            await axios.post(url+"/api/cart/reset",{itemId},{headers:{token}})
        }
    }

    // useEffect(() => {console.log(cartItems)},[cartItems])
    const getTotalCartAmount =() => {
        let totalAmount = 0;
        for (const item in cartItems){
            if (cartItems[item]>0){
                let itemInfo = food_list.find((product)=>product._id===item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        } 
        return totalAmount;
    }

    const fetchFoodList = async ()=>{
        const response = await axios.get(`${url}/api/food/list`);
        setFoodList(response.data.data);
    }

    const loadCartData = async (token)=>{
        const response = await axios.post(url+"/api/cart/get",{},{headers:{token}})
        setCartItems(response.data.cartData);
    }

    useEffect(()=>{
        
        async function loadData() {
            await fetchFoodList();
            if (localStorage.getItem('token')){
                setToken(localStorage.getItem('token'));
                await loadCartData(localStorage.getItem('token'));
            }
        }
        loadData();
    },[]) //not logout when reloading

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        resetFromCart,
        url,
        token,
        setToken
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider