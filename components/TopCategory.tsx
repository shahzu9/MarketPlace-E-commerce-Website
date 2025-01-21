"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Category {
  id: number;
  image: string;
}

const TopCategory = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const router = useRouter();

  // Fetch categories from the API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/data/products.json"); // Replace with your actual API URL
        const data = await response.json();

        // Filter categories with IDs between 5 and 7
        const filteredCategories = data.filter(
          (category: Category) => category.id >= 5 && category.id <= 7
        );
        setCategories(filteredCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // Hardcoded details for hover
  const hardcodedDetails = [
    { name: "Wing Chair", productCount: 1890 },
    { name: "Wooden Chair", productCount: 170 },
    { name: "Desk Chair", productCount: 140 },
  ];

  // Navigate to the product page
  const handleImageClick = (categoryId: number) => {
    router.push(`/products?id=${categoryId}`);
  };

  return (
    <div className="bg-white min-h-screen px-4 py-8">
      {/* Top Category Heading */}
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Top Category
      </h1>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto">
        {categories.map((category, index) => (
          <div
            key={category.id}
            className="relative group w-full h-64 overflow-hidden cursor-pointer"
            onClick={() => handleImageClick(category.id)} // Image click handler
          >
            {/* Category Image */}
            <Image
              src={category.image}
              alt={`Category ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              width={400}
              height={400}
            />

            {/* Hover Details */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-lg font-semibold">
                {hardcodedDetails[index]?.name || "Unknown"}
              </h3>
              <p className="text-sm">
                {hardcodedDetails[index]?.productCount?.toLocaleString() || 0}{" "}
                products
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategory;



