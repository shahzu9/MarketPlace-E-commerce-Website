
"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface BillingDetails {
  firstName: string;
  lastName: string;
  address: string;
  apartment: string;
  city: string;
  postalCode: string;
  phone: string;
  email: string;
}

const citiesInPakistan = [
  "Karachi",
  "Lahore",
  "Islamabad",
  "Rawalpindi",
  "Faisalabad",
  "Multan",
  "Quetta",
  "Peshawar",
  "Sialkot",
  "Hyderabad",
];

function HectoDemo() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [subtotal, setSubtotal] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [shippingMethod, setShippingMethod] = useState<string>("selfPickup");
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [billingDetails, setBillingDetails] = useState<BillingDetails>({
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    postalCode: "",
    phone: "",
    email: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const shippingRate = 150;
  const router = useRouter();

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems") || "[]") as CartItem[];
    setCartItems(savedCartItems);
    
    const calculateTotals = (items: CartItem[]) => {
      const subtotal = items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      setSubtotal(subtotal);
      const total =
        shippingMethod === "delivery" ? subtotal + shippingRate : subtotal;
      setTotal(total);
    };

    calculateTotals(savedCartItems);
  }, [shippingMethod]);

  useEffect(() => {
    const isValid =
      billingDetails.firstName.trim() &&
      billingDetails.address.trim() &&
      billingDetails.city.trim() &&
      billingDetails.postalCode.trim() &&
      billingDetails.phone.trim() &&
      billingDetails.email.trim() &&
      paymentMethod;
    setIsFormValid(!!isValid);
  }, [billingDetails, paymentMethod]);

  const handleShippingMethodChange = (method: string) => {
    setShippingMethod(method);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setBillingDetails((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBillingDetails((prev) => ({ ...prev, city: e.target.value }));
  };

  const handlePaymentMethodChange = (method: string) => {
    setPaymentMethod(method);
  };

  const saveOrderToBackend = async () => {
    const orderId = uuidv4();

    const orderData = {
      orderId,
      billingDetails,
      paymentMethod,
      shippingMethod,
      cartItems,
      subtotal,
      total,
    };

    localStorage.setItem("orderData", JSON.stringify(orderData));
    return orderId;
  };

  const handlePlaceOrder = async () => {
    const orderId = await saveOrderToBackend();
    localStorage.setItem("billingDetails", JSON.stringify(billingDetails));
    localStorage.setItem(
      "orderSummary",
      JSON.stringify({
        subtotal,
        total,
        shippingMethod,
        paymentMethod,
        billingDetails,
      })
    );
    localStorage.setItem("orderId", orderId);

    if (paymentMethod === "bankTransfer") {
      router.push(`/payment?orderId=${orderId}`);
    } else if (paymentMethod === "cashOnDelivery") {
      router.push(`/shipment-order?orderId=${orderId}`);
    }
  };
  return (
    <>
      <div className="bg-white font-sans min-h-screen pb-32">
        <div className="max-w-6xl mx-auto p-6">
          <h1 className="text-2xl font-bold text-blue-950 mb-2">Billing Information</h1>
          <p className="text-blue-950 mb-7">
            Cart/Information
          </p>
          <div className="flex justify-between">
            <div className="w-2/3 mr-10 pt-7">
              <div className="bg-gray-100 p-6 rounded text-blue-950">
                <h2 className="text-lg font-bold mb-4 text-blue-950">
                  Billing Details
                </h2>
                <div className="grid grid-cols-2 gap-6 ">
                  <div className="mb-6">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium"
                    >
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={billingDetails.firstName}
                      onChange={handleInputChange}
                      className="w-full border rounded p-2"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={billingDetails.lastName}
                      onChange={handleInputChange}
                      className="w-full border rounded p-2"
                    />
                  </div>
                </div>

                <h3 className="text-sm font-semibold mb-2">Country/Region</h3>
                <p className="mb-6">Pakistan</p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="mb-6">
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium"
                    >
                      Street Address*
                    </label>
                    <input
                      type="text"
                      id="address"
                      value={billingDetails.address}
                      onChange={handleInputChange}
                      placeholder="House number and street name"
                      className="w-full border rounded p-2"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="apartment"
                      className="block text-sm font-medium"
                    >
                      Apartment
                    </label>
                    <input
                      type="text"
                      id="apartment"
                      value={billingDetails.apartment}
                      onChange={handleInputChange}
                      placeholder="Apartment,suit,unit,etc.(optional)"
                      className="w-full border rounded p-2"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="city" className="block text-sm font-medium">
                    Town/City*
                  </label>
                  <select
                    id="city"
                    value={billingDetails.city}
                    onChange={handleSelectChange}
                    className="w-full border rounded p-2"
                  >
                    <option value="">Select a city</option>
                    {citiesInPakistan.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="postalCode"
                    className="block text-sm font-medium"
                  >
                    Postcode / ZIP*
                  </label>
                  <input
                    type="text"
                    id="postalCode"
                    value={billingDetails.postalCode}
                    onChange={handleInputChange}
                    className="w-full border rounded p-2"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-medium">
                    Phone*
                  </label>
                  <input
                    type="text"
                    id="phone"
                    value={billingDetails.phone}
                    onChange={handleInputChange}
                    className="w-full border rounded p-2"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={billingDetails.email}
                    onChange={handleInputChange}
                    className="w-full border rounded p-2"
                  />
                </div>

                {/* Payment Details */}
                <div className="bg-gray-100 rounded mt-6 pb-10">
                  <h2 className="text-lg font-bold mb-4 text-blue-950">
                    Payment Methods
                  </h2>
                  <div className="mb-4">
                    <label className="block">
                      <input
                        type="radio"
                        name="payment"
                        value="bankTransfer"
                        checked={paymentMethod === "bankTransfer"}
                        onChange={() =>
                          handlePaymentMethodChange("bankTransfer")
                        }
                      />
                      Direct Bank Transfer
                    </label>
                    {paymentMethod === "bankTransfer" && (
                      <p className="mt-2 text-sm text-gray-400">
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference. Your order
                        will not be shipped until the funds have cleared in our
                        account.
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block">
                      <input
                        type="radio"
                        name="payment"
                        value="cashOnDelivery"
                        checked={paymentMethod === "cashOnDelivery"}
                        onChange={() =>
                          handlePaymentMethodChange("cashOnDelivery")
                        }
                      />
                      Cash on Delivery
                    </label>
                    {paymentMethod === "cashOnDelivery" && (
                      <p className="mt-2 text-sm text-gray-400">
                        Cash payment will be collected upon delivery of your
                        order.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-1/3">
              <div className="bg-white p-6 rounded">
                {cartItems.length > 0 ? (
                  <>
                    <div className="flex justify-between font-bold text-lg mb-4 text-blue-950">
                      <p>Product</p>
                      <p>Subtotal</p>
                    </div>
                    {cartItems.map((item, index) => (
                      <div key={item.id} className="mb-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-4">
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={64}
                              height={64}
                              className="object-cover rounded"
                            />
                            <p className="text-sm text-black">
                              {item.name}{" "}
                              <span className="text-gray-500">
                                x {item.quantity}
                              </span>
                            </p>
                          </div>
                          <p className="text-sm font-semibold text-black">
                            {parseFloat(
                              (item.price * item.quantity).toFixed(2)
                            ).toLocaleString("en-US", {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </p>
                        </div>
                        {index < cartItems.length - 1 && (
                          <div className="border-t border-gray-300 my-4"></div>
                        )}
                      </div>
                    ))}
                  </>
                ) : (
                  <p className="text-sm text-gray-500">Your cart is empty</p>
                )}
              </div>

              <div className="bg-gray-100 p-6 rounded text-blue-950 mt-4">
                <p className="text-sm mb-4 text-red-500">
                  {!isFormValid &&
                    "Complete billing details and select a payment method to place the order."}
                </p>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-semibold">Subtotal:</p>
                  <p className="text-sm font-semibold">
                    ${subtotal.toFixed(2)}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4 text-blue-950">
                    Shipping Method
                  </h3>
                  <label>
                    <input
                      type="radio"
                      checked={shippingMethod === "selfPickup"}
                      onChange={() => handleShippingMethodChange("selfPickup")}
                    />
                    Self Pickup (Free)
                  </label>
                  <div className="mt-2">
                    <label>
                      <input
                        type="radio"
                        checked={shippingMethod === "delivery"}
                        onChange={() => handleShippingMethodChange("delivery")}
                      />
                      Delivery (${shippingRate})
                    </label>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-sm font-bold">Total:</p>
                  <p className="text-lg font-bold">${total.toFixed(2)}</p>
                </div>
                <button
                  disabled={!isFormValid}
                  onClick={handlePlaceOrder}
                  className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-6 w-full ${
                    isFormValid ? "" : "opacity-50 cursor-not-allowed"
                  }`}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HectoDemo;
