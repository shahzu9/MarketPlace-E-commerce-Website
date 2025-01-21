"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineShoppingCart } from "react-icons/ai";

// Define an interface for the product
interface Product {
  id: number;
  name: string;
  price: number;
  color: string;
  description: string;
  image: string;
}

const FeaturedProduct = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const router = useRouter();

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://678fdca949875e5a1a93a516.mockapi.io/Product"); // Replace with your actual API URL
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data: Product[] = await response.json();
        setFeaturedProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Handle product click to navigate
  const handleProductClick = (product: Product) => {
    router.push(
      `/product-detail/${product.id}?name=${encodeURIComponent(
        product.name
      )}&price=${product.price}&color=${encodeURIComponent(
        product.color
      )}&description=${encodeURIComponent(
        product.description
      )}&image=${encodeURIComponent(product.image)}`
    );
  };

  return (
    <div className="bg-white min-h-screen px-4 py-8">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">
        All Products
      </h1>

      {/* Grid Container for Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto max-w-5xl">
        {featuredProducts.map((product, index) => (
          <div
            key={product.id}
            className="relative w-full max-w-xs mx-auto transition-all duration-300 overflow-hidden"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => handleProductClick(product)} // Navigate on click
          >
            {/* Product Image */}
            <div className="h-64 w-full">
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
                width={400}
                height={400}
              />
            </div>

            {/* Product Details */}
            <div className="p-4 flex flex-col gap-2">
              {/* Name and Cart Icon */}
              <div className="flex items-center justify-between">
                <h2
                  className={`text-sm font-semibold transition-colors duration-300 ${
                    hovered === index ? "text-blue-500" : "text-black"
                  }`}
                >
                  {product.name}
                </h2>
                <AiOutlineShoppingCart
                  size={20}
                  className={`cursor-pointer transition-colors duration-300 ${
                    hovered === index ? "text-blue-500" : "text-black"
                  }`}
                />
              </div>

              {/* Prices */}
              <div className="flex items-center gap-2 text-gray-700">
                <p className="text-sm">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;

