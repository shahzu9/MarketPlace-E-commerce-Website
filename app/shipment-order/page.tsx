"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

// Define types for the order and its properties
type CartItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

type BillingDetails = {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  phone: string;
  email: string;
};

type Order = {
  cartItems: CartItem[];
  subtotal: number;
  total: number;
  shippingMethod: "delivery" | "selfPickup";
  paymentMethod: "bankTransfer" | "cashOnDelivery";
  billingDetails: BillingDetails;
};

function ShipmentOrderPage() {
  const [order, setOrder] = useState<Order | null>(null);
  const [orderNumber, setOrderNumber] = useState<string | null>(null);
  const [orderDate, setOrderDate] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const savedOrder = JSON.parse(localStorage.getItem("orderData") || "{}");

    // Generate a unique order number on every page render
    const newOrderNumber = uuidv4(); // Using uuid to generate a unique order number
    setOrderNumber(newOrderNumber);

    // Get today's date on every page render
    const currentDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setOrderDate(currentDate);

    if (Object.keys(savedOrder).length > 0) {
      setOrder(savedOrder as Order);
    }
  }, []);

  if (!order) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <p className="text-lg font-semibold text-gray-700">
          No order found. Please place an order first.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white font-sans min-h-screen pb-32">
        <div className="max-w-6xl mx-auto p-6">
          <h1 className="text-2xl font-bold text-blue-950 mb-2">Shipment</h1>
          <p className="text-blue-950 mb-7">Cart/Information/payment/Shipping</p>

          {/* Main Layout */}
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Section */}
            <div className="w-full lg:w-2/3 bg-white shadow-md rounded-lg p-8">
              <h2 className="text-xl font-bold text-blue-950 mb-4">Order Details</h2>
              <div className="overflow-auto border border-gray-200 rounded-md mb-6 text-blue-950">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-3 px-4 text-sm font-semibold text-gray-600">Product</th>
                      <th className="py-3 px-4 text-sm font-semibold text-gray-600 text-right">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.cartItems.map((item) => (
                      <tr key={item.id} className="border-b">
                        <td className="py-3 px-4 flex items-center">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={50}
                            height={50}
                            className="rounded-md object-cover mr-4"
                          />
                          <span>
                            {item.name} <span className="text-gray-500">x {item.quantity}</span>
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          ${(item.price * item.quantity).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td className="py-3 px-4 font-semibold">Subtotal</td>
                      <td className="py-3 px-4 text-right font-semibold">
                        ${order.subtotal.toLocaleString()}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Shipping Method</td>
                      <td className="py-3 px-4 text-right">
                        {order.shippingMethod === "delivery" ? "Delivery" : "Self Pickup"}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Payment Method</td>
                      <td className="py-3 px-4 text-right">
                        {order.paymentMethod === "bankTransfer"
                          ? "Direct Bank Transfer"
                          : "Cash on Delivery"}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-blue-950">Total</td>
                      <td className="py-3 px-4 text-right font-bold text-blue-950">
                        ${order.total.toLocaleString()}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h2 className="text-xl font-bold text-blue-950 mb-4">Billing Address</h2>
              <p className="text-gray-700">
                <strong>Name:</strong> {order.billingDetails.firstName}{" "}
                {order.billingDetails.lastName}
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> {order.billingDetails.address},{" "}
                {order.billingDetails.city}
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> {order.billingDetails.phone}
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> {order.billingDetails.email}
              </p>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-1/3 bg-gray-50 p-6 rounded-md border border-gray-200 h-auto">
              <p className="text-blue-600 font-semibold mb-4">
                Thank you. Your order has been received.
              </p>
              <ul className="list-none text-gray-700 space-y-2">
                <li>
                  <strong>Order Number:</strong> {orderNumber}
                </li>
                <li>
                  <strong>Date:</strong> {orderDate}
                </li>
                <li>
                  <strong>Total:</strong> ${order.total.toLocaleString()}
                </li>
                <li>
                  <strong>Shipping Method:</strong>{" "}
                  {order.shippingMethod === "delivery" ? "Delivery" : "Self Pickup"}
                </li>
                <li>
                  <strong>Payment Method:</strong>{" "}
                  {order.paymentMethod === "bankTransfer"
                    ? "Direct Bank Transfer"
                    : "Cash on Delivery"}
                </li>
              </ul>
              <div className="mt-6 text-center">
                <button
                  onClick={() => router.push("/order-completed")}
                  className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
                >
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShipmentOrderPage;

