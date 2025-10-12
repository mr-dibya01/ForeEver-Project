import { useContext, useEffect, useState } from "react";
import Title from "./Title.jsx";
import { ShopContext } from "../context/ShopContext.jsx";
import Product from "./Product.jsx";

export default function BestSeller() {
    let [bestSeller, setBestSeller] = useState([])
    let { products } = useContext(ShopContext);
    const newArray  = products.slice(10,20);
    console.log(newArray);
    console.log('BestSeller');
    products.map((item) => {
        if(item.bestseller) {
            console.log(item.name);
        }
    });

    useEffect(() => {
        setBestSeller(products.filter( (item) => 
            item.bestseller ? item : "" 
        ))
    },[]);

  return (
    <div className="my-4">
        <div className="py-10 text-xl sm:text-4xl text-center">
            <Title text1={'BEST'} text2={'SELLER'} />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
            {bestSeller.map((item,idx) => 
                <Product id={item._id} name={item.name} price={item.price} image={item.image} key={idx} />
            )}
        </div>
    </div>
  )
}
