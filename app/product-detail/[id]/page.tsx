"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";

interface Product {
  id: string;
  name: string;
  price: string;
  color: string;
  image: string;
  description: string;
}

const ProductDetailPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const id = searchParams.get("id") || `${Date.now()}`;
  const name = searchParams.get("name");
  const price = searchParams.get("price");
  const color = searchParams.get("color");
  const image = searchParams.get("image");
  const description = searchParams.get("description");

  const [quantity, setQuantity] = useState<number>(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  // Fetch related products from the API
  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const response = await fetch("/data/products.json"); // Replace with your actual API URL
        const data = await response.json();

        // Assume related products are determined based on some logic, e.g., category or similar attribute
        const filteredRelatedProducts = data.filter(
          (product: Product) => product.id !== id // Exclude the current product
        );

        setRelatedProducts(filteredRelatedProducts.slice(0, 4)); // Display up to 4 related products
      } catch (error) {
        console.error("Error fetching related products:", error);
      }
    };

    fetchRelatedProducts();
  }, [id]);

  const handleAddToCart = () => {
    const product = {
      id,
      name,
      price,
      color,
      image,
      description,
      quantity,
    };

    const existingCart = JSON.parse(localStorage.getItem("cartItems") || "[]");
    const updatedCart = [...existingCart, product];
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));

    router.push("/cart");
  };

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 px-4 sm:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Product Details Section */}
        <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-md p-6 gap-6">
          {/* Main Image */}
          <div className="flex-1 flex justify-center">
            <Image
              src={image || ""}
              alt={name || ""}
              width={300}
              height={300}
              className="object-cover rounded-lg"
            />
          </div>

          {/* Right Product Details */}
          <div className="flex-1">
            <h1 className="text-xl sm:text-2xl font-bold mb-4 text-blue-950">
              {name || "Product Name"}
            </h1>
            <div className="flex items-center mb-4">
              <AiFillStar className="text-yellow-500" />
              <AiFillStar className="text-yellow-500" />
              <AiFillStar className="text-yellow-500" />
              <AiFillStar className="text-yellow-500" />
              <AiFillStar className="text-yellow-500" />
            </div>
            <div className="flex space-x-2 items-center mb-4">
              <p className="text-lg sm:text-xl font-semibold text-gray-500">
                ${price}
              </p>
            </div>
            <div className="mb-4">
              <p className="text-xs sm:text-sm font-semibold text-gray-500">
                Color: {color}
              </p>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <label className="text-gray-600">Quantity:</label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-16 border rounded p-1 text-center"
              />
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-4">
                {description ||
                  "A modern cantilever chair with a unique floating effect."}
              </p>
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-pink-500 text-white px-4 sm:px-6 py-2 rounded-md shadow-md mb-4 flex items-center space-x-2 hover:bg-pink-600 transition"
            >
              <span>Add to Cart</span>
              <FiHeart className="text-white" />
            </button>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Related Products</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedProducts.map((product) => (
              <div key={product.id} className="w-xl shadow-md p-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={1000}
                  height={1000}
                  className="mb-2"
                />
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm sm:text-md font-semibold">
                    {product.name}
                  </h3>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, starIndex) => (
                      <AiFillStar key={starIndex} />
                    ))}
                  </div>
                </div>
                <p className="text-blue-950 font-bold">${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;


