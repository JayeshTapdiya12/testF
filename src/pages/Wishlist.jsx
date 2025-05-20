import React, { useEffect, useState } from 'react'

import { getWishlist } from '../service/WishlistService'
import Header from '../compoments/Header';
import Footer from '../compoments/Footer';
const Wishlist = () => {

    const [listpro, setListpro] = useState([]);
    const ress = async () => {
        const res = await getWishlist();

        console.log(res?.data?.data?.product);

        setListpro(res?.data?.data?.product);
    }

    useEffect(() => {
        ress();
    }, [])
    return (
        <>
            <Header />
            <div className="cart-container p-6 bg-gray-100 min-h-screen">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">🛒 Your wishlist</h1>
                {/* <h3>Cart Totla amount : {cartamo}</h3> */}

                {listpro?.length > 0 ? (
                    listpro.map((ele, index) => (
                        <div key={index} className="cart-item flex flex-col md:flex-row bg-white rounded-xl shadow-md mb-6 p-4 hover:shadow-lg transition-shadow">
                            <img
                                src={ele.image}
                                alt={ele.name}
                                // className="w-full md:w-40 h-40 object-cover rounded-md border mb-4 md:mb-0 md:mr-6"
                                width={"200rem"}
                            />
                            <div className="cart-details flex-1">
                                <h2 className="text-xl font-semibold text-gray-700 mb-1">{ele.name}</h2>
                                <p className="text-gray-500 mb-2">{ele.category || "No description available."}</p>

                                <div className="flex items-center mb-3 space-x-4">
                                    <span className="text-lg font-bold text-green-600">₹{ele.discountPrice ?? ele.price}</span>
                                    {ele.discountPrice && (
                                        <span className="line-through text-gray-400 text-sm">₹{ele.price}</span>
                                    )}
                                </div>



                                <div className="flex justify-between items-center">
                                    <button
                                        onClick={() => handleRemove(ele)}
                                        className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm rounded"
                                    >
                                        🗑 Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))

                ) : (
                    <div className="text-center text-gray-500 mt-20">
                        <h2 className="text-xl">Your wishlist is empty 😢</h2>
                        <p>Add some products to see them here!</p>
                    </div>
                )}
            </div>
            <Footer />
        </>
    )
}

export default Wishlist
