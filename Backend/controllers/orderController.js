import Order from "../model/orderModel.js";
import Cart from "../model/cartModel.js";
import httpStatus from "http-status"


// placing order cod
const placeOrder = async (req,res) => {
    let { paymentMode, formData, shipping_fee } = req.body;
    let userId = req.user.id;
    let userCart =await Cart.findOne({ userId }).populate('item.productId');
    console.log("placeOrder1-userCart",userCart);
    console.log("placeOrder2-userCart",userCart.item);
    let orderItems = userCart.item.map((item) =>({
        productId: item.productId._id,
        name: item.productId.name,
        description: item.productId.description,  
        price: item.productId.price,
        image: item.productId.image,
        category: item.productId.category,
        subCategory: item.productId.subCategory,
        size: item.size,
        quantity: item.quantity,
    }));
    
    if(!userCart) {
        return res.status(httpStatus.NOT_FOUND).json({error: "Cart not found!"});
    }   

    if(userCart.item.length === 0){
        return res.status(httpStatus.NOT_FOUND).json({error: "There is no item in cart"})
    }   
     
    if(!paymentMode || !formData || !shipping_fee){
        return res.status(httpStatus.NOT_FOUND).json({error: "Please provide the all dettails"});
    }
    const totalAmount = userCart.item.reduce((acc,curr) => acc + curr.price * curr.quantity ,0) + shipping_fee;
    // console.log(totalAmount); 
 
    let orderDettails =new Order({
        userId,
        items: orderItems,
        address: formData,
        amount: totalAmount, 
        paymentMode: paymentMode,
        payment: false,
        date: Date.now(),
    });
    console.log("placeOrder1-orderDettails1",orderDettails);
    console.log("placeOrder1-orderDettails2",orderDettails.items);
    await orderDettails.save();
    await Cart.findOneAndUpdate({userId},{item:[]});
    res.json({message: "Order Placed Successfully!"});
}

// placing order stripe
const placeOrderStripe = async (req,res) => {

}

// placing order razor pay
const placeOrderRazorPay = (req,res) => {

}

//All order data for admin panel
const allOrders = async (req,res) => {
    let ordersData =await Order.find({});
    console.log(ordersData);
    if(!ordersData) {
        return res.status(httpStatus.NOT_FOUND).json({error: "ordersData not found"});
    }
    res.json(ordersData);
} 
 

//All order data for frontend
const userOrders = async (req,res) => {
    let userId = req.user.id;
    console.log("userId",userId);
    let userOrdersData =await Order.find({ userId });
    if(!userOrdersData || userOrdersData.length === 0) {
        return res.status(httpStatus.NOT_FOUND).json({error: 'You have not ordered yet!'});
    }
    console.log("userOrdersData",userOrdersData);
    console.log("userOrdersData.items",userOrdersData[0].items);
    res.json(userOrdersData);
} 

const updateStatus = async (req,res) => {
    let { orderId, status } = req.body;
    let orderData = await Order.findByIdAndUpdate(orderId,{status});
    res.json(orderData);
}

export { placeOrder, placeOrderStripe, placeOrderRazorPay, allOrders, userOrders, updateStatus }