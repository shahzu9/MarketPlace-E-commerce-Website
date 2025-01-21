"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";

// Define types for the order details
interface BillingDetails {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  email: string;
  phone: string;
}

interface OrderDetails {
  orderId: string;
  billingDetails: BillingDetails;
  total: number;
}

// Account numbers mapped to payment methods (declared outside the component)
const accountNumbers: Record<"easyPaisa" | "jazzCash" | "meezanBank", string> = {
  easyPaisa: "0336 4567890123",
  jazzCash: "0987 6543210987",
  meezanBank: "0212 0105754477",
};

const PaymentPage = () => {
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const [paymentAmount, setPaymentAmount] = useState<number>(0);
  const [paymentMethod, setPaymentMethod] = useState<"easyPaisa" | "jazzCash" | "meezanBank" | "">(""); // Initially empty
  const [accountNumber, setAccountNumber] = useState<string>("");
  const [userAccountNumber, setUserAccountNumber] = useState<string>("");
  const [isPaymentValid, setIsPaymentValid] = useState<boolean>(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const orderId = searchParams?.get("orderId");

  useEffect(() => {
    // Fetch order data from localStorage
    const savedOrder = JSON.parse(localStorage.getItem("orderData") || "{}");

    if (savedOrder && savedOrder.orderId === orderId) {
      setOrderDetails(savedOrder);
    } else {
      alert("Order not found or invalid!");
      router.push("/"); // Redirect to home if no valid order is found
    }
  }, [orderId, router]);

  useEffect(() => {
    // Update account number based on payment method
    if (paymentMethod) {
      setAccountNumber(accountNumbers[paymentMethod]);
    } else {
      setAccountNumber("");
    }
  }, [paymentMethod]);

  useEffect(() => {
    // Check if payment is valid
    setIsPaymentValid(
      paymentAmount === orderDetails?.total && userAccountNumber.trim() !== ""
    );
  }, [paymentAmount, userAccountNumber, orderDetails]);

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setPaymentAmount(value);
  };

  const handlePaymentMethodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPaymentMethod(e.target.value as "easyPaisa" | "jazzCash" | "meezanBank");
  };

  const handleUserAccountNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserAccountNumber(e.target.value);
  };

  const handleConfirmOrder = () => {
    if (isPaymentValid) {
      router.push(`/shipment-order?orderId=${orderId}`);
    } else {
      alert("Please transfer the full amount to confirm your order.");
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>

      <div className="bg-white font-sans min-h-screen pb-32">
        <div className="max-w-6xl mx-auto p-6">
          <h1 className="text-2xl font-bold text-blue-950 mb-2">Payment Gateway</h1>
          <p className="text-blue-950 mb-7">Cart/Information/Payment</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Section: Order Details */}
            <div className="bg-white p-6 rounded shadow-lg text-blue-950">
              <h2 className="text-xl font-bold text-blue-950 mb-4">
                Order Details
              </h2>
              {orderDetails ? (
                <>
                  <p className="mb-2">
                    <strong>Order ID:</strong> {orderDetails.orderId}
                  </p>
                  <p className="mb-2">
                    <strong>Name:</strong>{" "}
                    {`${orderDetails.billingDetails.firstName} ${orderDetails.billingDetails.lastName}`}
                  </p>
                  <p className="mb-2">
                    <strong>Address:</strong>{" "}
                    {orderDetails.billingDetails.address},{" "}
                    {orderDetails.billingDetails.city}
                  </p>
                  <p className="mb-2">
                    <strong>Email:</strong>{" "}
                    {orderDetails.billingDetails.email}
                  </p>
                  <p className="mb-2">
                    <strong>Phone:</strong>{" "}
                    {orderDetails.billingDetails.phone}
                  </p>
                  <p className="mb-4">
                    <strong>Total Amount:</strong> $
                    {orderDetails.total.toFixed(2)}
                  </p>
                </>
              ) : (
                <p>Loading order details...</p>
              )}
            </div>

            {/* Right Section: Payment Fields */}
            <div className="bg-white p-6 rounded shadow-lg text-blue-950">
              <h2 className="text-xl font-bold text-blue-950 mb-4">
                Payment Submission
              </h2>
              <div className="mb-4">
                <label
                  htmlFor="paymentMethod"
                  className="block text-sm font-medium text-blue-950"
                >
                  Select Payment Method:
                </label>
                <select
                  id="paymentMethod"
                  value={paymentMethod}
                  onChange={handlePaymentMethodChange}
                  className="w-full border rounded p-2"
                >
                  <option value="">Choose Payment Method</option>
                  <option value="easyPaisa">EasyPaisa</option>
                  <option value="jazzCash">JazzCash</option>
                  <option value="meezanBank">Meezan Bank</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="accountNumber"
                  className="block text-sm font-medium text-blue-950"
                >
                  Account Number:
                </label>
                <input
                  type="text"
                  id="accountNumber"
                  value={accountNumber}
                  readOnly
                  className="w-full border rounded p-2 bg-gray-100"
                  placeholder={paymentMethod ? "Account Number" : ""}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="userAccountNumber"
                  className="block text-sm font-medium text-blue-950"
                >
                  Enter Your Account Number:
                </label>
                <input
                  type="text"
                  id="userAccountNumber"
                  value={userAccountNumber}
                  onChange={handleUserAccountNumberChange}
                  className="w-full border rounded p-2"
                  placeholder="Enter your account number"
                  disabled={!paymentMethod}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="paymentAmount"
                  className="block text-sm font-medium text-blue-950"
                >
                  Enter Payment Amount:
                </label>
                <input
                  type="number"
                  id="paymentAmount"
                  value={paymentAmount}
                  onChange={handlePaymentChange}
                  className="w-full border rounded p-2"
                  placeholder="Enter payment amount"
                />
                {!isPaymentValid && paymentAmount > 0 && (
                  <p className="text-sm text-red-500 mt-1">
                    Please enter the total amount of your order.
                  </p>
                )}
              </div>

              {!isPaymentValid && (
                <p className="text-sm text-red-500 mb-4">
                  You cannot confirm the order until the full payment is made
                  and account number is entered.
                </p>
              )}

              <button
                disabled={!isPaymentValid}
                onClick={handleConfirmOrder}
                className={`bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded w-full ${
                  isPaymentValid ? "" : "opacity-50 cursor-not-allowed"
                }`}
              >
                Pay Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default dynamic(() => Promise.resolve(PaymentPage), { ssr: false });

