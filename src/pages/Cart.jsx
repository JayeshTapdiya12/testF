import React, { useEffect, useState } from 'react'
import '../Style/cart.css'

import { getCart } from '../service/CartService';
import { useParams } from 'react-router-dom';
import Header from '../compoments/Header';
import Footer from '../compoments/Footer';





const Cart = () => {

    const [listpro, setListpro] = useState([]);
    const [cartamo, setCartamo] = useState(0);

    const ress = async () => {
        const res = await getCart();
        console.log(res?.data);
        setListpro(res?.data?.data?.product)
        setCartamo(res?.data?.data?.cartTotal);
        console.log(res?.data?.data?.cartTotal);
        console.log(res?.data?.data?.product)
    }
    useEffect(() => {
        ress();
    }, []);


    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const handleQuantityChange = (type) => {
        if (type === 'increment') {
            setQuantity(quantity + 1);
        } else if (type === 'decrement' && quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    const handleRemove = async () => {

        // const res = await removeCart(id);
        // console.log(res)
        alert("BBook remove!");
    };

    const handlePlaceOrder = () => {
        alert("Order placed!");
    };


    return (
        <><Header />
            <div className="cart-container p-6 bg-gray-100 min-h-screen">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">🛒 Your Shopping Cart</h1>
                <h3>Cart Totla amount : {cartamo}</h3>

                {listpro?.length > 0 ? (
                    listpro.map((ele, index) => (
                        <div key={index} className="cart-item flex flex-col md:flex-row bg-white rounded-xl shadow-md mb-6 p-4 hover:shadow-lg transition-shadow">
                            <img
                                src={ele.image}
                                alt={ele.productName}
                                // className="w-full md:w-40 h-40 object-cover rounded-md border mb-4 md:mb-0 md:mr-6"
                                width={"200rem"}
                            />
                            <div className="cart-details flex-1">
                                <h2 className="text-xl font-semibold text-gray-700 mb-1">{ele.productName}</h2>
                                <p className="text-gray-500 mb-2">{ele.description || "No description available."}</p>

                                <div className="flex items-center mb-3 space-x-4">
                                    <span className="text-lg font-bold text-green-600">₹{ele.discountPrice ?? ele.price}</span>
                                    {ele.discountPrice && (
                                        <span className="line-through text-gray-400 text-sm">₹{ele.price}</span>
                                    )}
                                </div>

                                <div className="cart-quantity flex items-center space-x-2 mb-4">
                                    <button
                                        onClick={() => handleQuantityChange('decrement', ele)}
                                        className="px-3 py-1 text-lg bg-gray-300 hover:bg-gray-400 rounded"
                                    >
                                        −
                                    </button>
                                    <input
                                        type="text"
                                        value={ele.quantity}
                                        readOnly
                                        className="w-12 text-center border rounded"
                                    />
                                    <button
                                        onClick={() => handleQuantityChange('increment', ele)}
                                        className="px-3 py-1 text-lg bg-gray-300 hover:bg-gray-400 rounded"
                                    >
                                        +
                                    </button>
                                </div>

                                <div className="flex justify-between items-center">
                                    <button
                                        onClick={() => handleRemove(ele)}
                                        className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm rounded"
                                    >
                                        🗑 Remove
                                    </button>
                                    <span className="text-sm text-gray-500">Subtotal: ₹{(ele.discountPrice ?? ele.price) * ele.quantity}</span>
                                </div>
                            </div>
                        </div>
                    ))

                ) : (
                    <div className="text-center text-gray-500 mt-20">
                        <h2 className="text-xl">Your cart is empty 😢</h2>
                        <p>Add some products to see them here!</p>
                    </div>
                )}
            </div>

            <Footer />
        </>
    )
}

export default Cart
