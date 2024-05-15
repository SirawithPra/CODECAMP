import express from 'express';
import authMiddleware from '../middleware/auth.js';
import { listOrders, placeOrder, updateStatus, userOrders, verifyOrder } from '../controllers/orderController.js';

const orderRounter = express.Router();

orderRounter.post('/place',authMiddleware,placeOrder);
orderRounter.post('/verify',verifyOrder);
orderRounter.post('/userorders',authMiddleware,userOrders);
orderRounter.get('/list',listOrders);
orderRounter.post('/status',updateStatus);


export default orderRounter;