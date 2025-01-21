"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  image: string;
}

const BestProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://678fdca949875e5a1a93a516.mockapi.io/Product"); // Replace with your actual API URL
        const data = await response.json();

        // Filter products with IDs between 8 and 12
        const filteredProducts = data.filter(
          (product: Product) => product.id >= 8 && product.id <= 12
        );
        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-white flex justify-center items-center px-4 py-8 mb-10">
      <div className="w-full max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-8">
          Explore Popular Styles
        </h1>

        {/* Container for Left and Right Product Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
          {/* Left Section: Large Product Image */}
          <div className="relative col-span-1 flex flex-col items-start h-full">
            {/* Large Image */}
            {products[0] && (
              <div className="w-full h-[400px] overflow-hidden">
                <Image
                  src={products[0].image}
                  alt="Best Product"
                  className="w-full h-full object-cover"
                  width={400}
                  height={400}
                />
              </div>
            )}
          </div>

          {/* Right Section: 4 Product Images in Grid */}
          <div className="col-span-2 grid grid-cols-2 gap-4 h-full">
            {products.slice(1, 5).map((product) => (
              <div
                key={product.id}
                className="w-64 h-[180px] overflow-hidden relative"
              >
                <Image
                  src={product.image}
                  alt={`Product ${product.id}`}
                  className="w-full h-full "
                  width={200}
                  height={200}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestProducts;

