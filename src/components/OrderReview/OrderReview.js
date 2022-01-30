import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCard'
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import { useNavigate } from "react-router-dom";
const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [cart,setCart] = useCart(products);
    const navigate = useNavigate()
    const handleRemove = key=>{
    const newCart = cart.filter(product=>product.key !==key);
    setCart(newCart);
    removeFromDb(key);
    }
    const handleProceedToShipping =()=>{
  
//   setCart([]);
//   clearTheCart();
  navigate('/shipping');
    }
    return (
        <div className="shop-contianer">
            <div className="product-container">
            {
                cart.map(product=><ReviewItem 
                    key = {product.key}
                    product ={product}
                    handleRemove = {handleRemove}
                    >
                    </ReviewItem>)
            }

            </div>
            <div className="cart-container">
            <h1>{products.length}</h1>
            <h3>{cart.length}</h3>
            <h2>This is order review</h2>
            <Cart cart ={cart}>
                <button onClick={handleProceedToShipping} className='btn-regular'>
                    Proceed to Shipping
                </button> 
            </Cart>
            </div>
            
        </div>
    );
};

export default OrderReview;