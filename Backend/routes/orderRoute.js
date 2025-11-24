import { placeOrder, placeOrderStripe, placeOrderRazorPay, allOrders, userOrders, updateStatus } from "../controllers/orderController.js"
import { Router } from "express"
import { verifyTokken } from "../middlewares/auth.js"
import adminAuth from "../middlewares/adminAuth.js"

const orderRouter = Router();
// For Admin
orderRouter.post('/list', adminAuth, allOrders);
orderRouter.put('/status', adminAuth,updateStatus); 

// For users
orderRouter.post('/place',verifyTokken,placeOrder);
orderRouter.post('/stripe',verifyTokken,placeOrderStripe);
orderRouter.post('/razor',verifyTokken,placeOrderRazorPay);
orderRouter.get('/user/list',verifyTokken,userOrders);

export default orderRouter;   

 