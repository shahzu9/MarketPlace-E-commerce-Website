"use client";
import { useRouter } from "next/navigation";

export default function OrderCompleted() {
  const router = useRouter();

  const handleContinueShopping = () => {
    // Clear the cart from localStorage
    localStorage.removeItem("cartItems");

    // Redirect to the product page
    router.push("/products");
  };

  return (
    <>
        {/* Main Content Section */}
        <div className="flex flex-col items-center justify-center bg-white px-4 relative py-20">
          {/* Container */}
          <div className="max-w-3xl w-full rounded-lg p-8 text-center">
            {/* Checkmark Icon */}
            <div className="flex justify-center mb-6">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-200 text-blue-600 border-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
            </div>

            {/* Header */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-900 mb-4">
              Your Order Is Completed!
            </h2>
            <p className="text-gray-600 mb-6">
              Thank you for your order! Your order is being processed and will be
              completed within <span className="font-semibold">3-6 hours</span>. You
              will receive an email confirmation when your order is completed.
            </p>

            {/* Button */}
            <div className="relative inline-block">
              <button
                onClick={handleContinueShopping}
                className="inline-block bg-blue-500 text-white px-6 py-3 rounded-sm hover:bg-blue-600 transition duration-300"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
    </>
  );
}
