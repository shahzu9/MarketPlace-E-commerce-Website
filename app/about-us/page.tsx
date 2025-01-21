import Image from "next/image";
import { FaShippingFast, FaHandHoldingHeart, FaTag, FaRecycle } from "react-icons/fa";

export default function AboutUsPage() {
  return (
    <div className=" bg-white flex flex-col space-y-16">
      {/* About Us Section */}
      <section className="bg-white py-16 px-4 sm:px-8 md:flex md:items-center md:space-x-8">
        {/* <div className="md:w-1/2 space-y-4 bg-blue-500">
          <h2 className="text-3xl font-bold text-teal-800">About Us - Comforty</h2>
          <p className="text-gray-600">
            At Comforty, we believe that the right chair can transform your space and elevate your comfort. Crafted with ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality.
          </p>
          <button className="bg-teal-800 text-white px-6 py-2 rounded hover:bg-teal-700">
            View Collection
          </button>
        </div> */}
        <div className="md:w-auto mt-8 md:mt-0">
          <Image
            src="/about-us/Text Block.png" // Replace with your image path
            alt="Chair"
            width={1000}
            height={1000}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="md:w-auto mt-8 md:mt-0">
          <Image
            src="/about-us/Image Block.png" // Replace with your image path
            alt="Chair"
            width={1000}
            height={1000}
            className="w-full h-full object-contain"
          />
        </div>
      </section>

{/* What Makes Our Brand Different Section */}
<section className="bg-white  px-4 sm:px-8">
        <div className="container mx-auto">
          <h2 className="text-2xl text-center mb-8 text-black">
            What Makes Our Brand Different
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-blue-500">
            <div className="bg-gray-100 p-4 rounded shadow-md text-center">
              <FaShippingFast className="text-blue-500 text-3xl mx-auto mb-4" />
              <h3 className="font-bold mb-2">Next day as standard</h3>
              <p className="text-sm ">
                Order before 3pm to receive your order next day as standard.
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow-md text-center">
              <FaHandHoldingHeart className="text-blue-500 text-3xl mx-auto mb-4" />
              <h3 className="font-bold mb-2">Made by true artisans</h3>
              <p className="text-sm ">
                Handmade crafted chairs with rich passion and craftsmanship.
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow-md text-center">
              <FaTag className="text-blue-500 text-3xl mx-auto mb-4" />
              <h3 className="font-bold mb-2">Unbeatable prices</h3>
              <p className="text-sm ">
                Pay for materials and quality, never find better prices anywhere.
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow-md text-center">
              <FaRecycle className="text-blue-500 text-3xl mx-auto mb-4" />
              <h3 className="font-bold mb-2">Recycled packaging</h3>
              <p className="text-sm ">
                We use 100% recycled materials for more sustainable packaging.
              </p>
            </div>
          </div>
        </div>
      </section>

{/* Our Popular Products Section */}
<section className="bg-white py-16 px-4 sm:px-8">
  <h2 className="text-black text-2xl text-center mb-8">Our Popular Products</h2>
  <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
    {/* First Large Image */}
    <div className="col-span-1">
      <div className="w-full h-[300px]">
        <Image
          src="/about-us/Large sofa.png" // Replace with your image path
          alt="Sofa"
          width={500}
          height={300}
          className="w-full h-full object-cover rounded"
        />
      </div>
      <h3 className="text-black text-lg mt-4">The Popular Suede Sofa</h3>
      <p className="text-black">$99.00</p>
    </div>

    {/* Second Image */}
    <div className="col-span-1">
      <div className="w-full h-[300px]">
        <Image
          src="/about-us/soft black.png" // Replace with your image path
          alt="Chair"
          width={200}
          height={300}
          className="w-full h-full object-cover rounded"
        />
      </div>
      <h3 className="text-black text-lg mt-4">The Dandy Chair</h3>
      <p className="text-black">$89.00</p>
    </div>

    {/* Third Image */}
    <div className="col-span-1">
      <div className="w-full h-[300px]">
        <Image
          src="/about-us/black chair.png" // Replace with your image path
          alt="Chair"
          width={200}
          height={300}
          className="w-full h-full object-cover rounded"
        />
      </div>
      <h3 className="text-black text-lg mt-4">The Stylish Chair</h3>
      <p className="text-black">$89.00</p>
    </div>
  </div>
</section>


    </div>
  );
}