"use client";
import Image from "next/image"
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type CartItem = {
  id: string;
  name: string;
  color: string;
  size: string;
  price: number;
  quantity: number;
  image: string;
};

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [shippingMethod, setShippingMethod] = useState("self-pickup");
  const shippingRate = 150;
  const router = useRouter();

  // Fetch cart items from local storage
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    setCartItems(savedCartItems);
  }, []);

  const handleQuantityChange = (id: string, value: number) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(value, 0) } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const handleRemoveItem = (id: string) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const handleClearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  const handleShippingMethodChange = (method: string) => {
    setShippingMethod(method);
  };

  const calculateSubtotal = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const calculateTotal = () =>
    shippingMethod === "delivery"
      ? calculateSubtotal() + shippingRate
      : calculateSubtotal();

  return (
    <>

      <div className="min-h-screen bg-white py-10 px-4 sm:px-6 md:px-10 text-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-center">
          <div className="grid grid-cols-1 gap-6 w-full md:w-2/3 lg:grid-cols-3">
            {/* Cart Items */}
            <div className="col-span-2">
              {cartItems.length > 0 ? (
                <>
                  <table className="w-full text-left rounded-lg overflow-hidden">
                    <thead>
                      <tr className="text-gray-600 uppercase text-[clamp(0.75rem,1.5vw,0.875rem)]">
                        <th className="p-4">Product</th>
                        <th className="p-4">Price</th>
                        <th className="p-4">Quantity</th>
                        <th className="p-4">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => (
                        <tr key={item.id} className="border-b">
                          <td className="p-4 flex items-center">
                          <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-gray-300 text-gray-300 rounded-full flex justify-center items-center mr-4 hover:border-gray-600 hover:text-gray-900"
                          aria-label="Remove"
                        >
                          ✖
                          </button>

                            <Image
                              src={item.image}
                              alt={item.name}
                              className="w-12 h-12 sm:w-16 sm:h-16 object-cover mr-4"
                              width={500}
                              height={500}
                            />
                            <div>
                              <h3 className="font-semibold text-[clamp(0.75rem,1.5vw,0.875rem)]">
                                {item.name}
                              </h3>
                              <p className="text-[clamp(0.75rem,1.5vw,0.875rem)] text-gray-500">
                              </p>
                            </div>
                          </td>
                          <td className="p-4 text-[clamp(0.75rem,1.5vw,0.875rem)]">
                            $ {item.price}
                          </td>
                          <td className="p-4">
                            <input
                              type="number"
                              value={item.quantity}
                              min="0"
                              onChange={(e) =>
                                handleQuantityChange(item.id, parseInt(e.target.value))
                              }
                              className="w-12 sm:w-16 border rounded-md p-1 sm:p-2 text-[clamp(0.75rem,1.5vw,0.875rem)]"
                            />
                          </td>
                          <td className="p-4 text-[clamp(0.75rem,1.5vw,0.875rem)]">
                            $ {(item.price * item.quantity)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="flex flex-wrap mt-4 gap-2 sm:gap-4">
                    <button
                      className="bg-blue-500 text-white px-2 sm:px-4 py-1 sm:py-2 text-[clamp(0.75rem,1.5vw,0.875rem)]"
                      onClick={() => router.push("/products")}
                    >
                      Continue Shopping
                    </button>
                    <button
                      className="bg-blue-500 text-white px-2 sm:px-4 py-1 sm:py-2 text-[clamp(0.75rem,1.5vw,0.875rem)]"
                      onClick={handleClearCart}
                    >
                      Clear Cart
                    </button>
                  </div>
                </>
              ) : (
                
                <div className="flex flex-wrap mt-4 gap-2 sm:gap-4">
                  <p className="pt-1 font-semibold">Your cart is empty</p>
                <button
                  className="bg-blue-500 text-white px-2 sm:px-4 py-1 sm:py-2 text-[clamp(0.75rem,1.5vw,0.875rem)]"
                  onClick={() => router.push("/product")}
                >
                  Continue Shopping
                </button>
                
                </div>
              )}
            </div>

            {/* Cart Totals */}
            <div className="bg-white p-4 sm:p-6 ">
              <h2 className="text-[clamp(1rem,2vw,1.25rem)] font-bold mb-2 sm:mb-4">
                Cart Totals
              </h2>
              <div className="mb-2 sm:mb-4 flex justify-between text-[clamp(0.75rem,1.5vw,0.875rem)]">
                <span className="text-gray-600">Subtotal:</span>
                <span>$ {calculateSubtotal().toFixed(2)}</span>
              </div>
              <div className="mb-4">
                <h3 className="font-medium text-[clamp(0.75rem,1.5vw,0.875rem)]">
                  Shipping Method:
                </h3>
                <div className="mt-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="shippingMethod"
                      value="self-pickup"
                      checked={shippingMethod === "self-pickup"}
                      onChange={() => handleShippingMethodChange("self-pickup")}
                    />
                    Self Pickup (Free)
                  </label>
                  <label className="flex items-center gap-2 mt-2">
                    <input
                      type="radio"
                      name="shippingMethod"
                      value="delivery"
                      checked={shippingMethod === "delivery"}
                      onChange={() => handleShippingMethodChange("delivery")}
                    />
                    Delivery ( {shippingRate}$)
                  </label>
                </div>
              </div>
              <div className="mb-2 sm:mb-4 flex justify-between text-[clamp(0.75rem,1.5vw,0.875rem)]">
                <span className="text-gray-600">Total:</span>
                <span>$ {calculateTotal().toFixed(2)}</span>
              </div>
              <button
                onClick={() => router.push("/shipment-detail")}
                className="bg-green-600 text-white px-2 sm:px-4 py-1 sm:py-2 w-full text-[clamp(0.75rem,1.5vw,0.875rem)]"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;





