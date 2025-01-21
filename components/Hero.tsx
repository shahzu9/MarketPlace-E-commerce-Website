import Image from "next/image";
import Link from "next/link"



const HeroSection = () => {
  return (
    <section className="relative bg-gray-200 py-16 px-6 sm:px-8 md:px-16 lg:px-24">
      {/* Content */}
      <div className="flex flex-col md:flex-row justify-center items-center md:gap-10 lg:gap-16">
        {/* Text Content */}
        <div className="md:ml-28 lg:ml-40 space-y-6 md:w-1/2">
          <h4 className="text-sm text-blue-500 font-medium text-center md:text-left">
            WELCOME TO CHAIRY
          </h4>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 font-sans text-center md:text-left">
            Best Furniture Collection <br /> For Your Interior.
          </h1>
          <div className="flex justify-center md:justify-start">
            <Link href="/product">
            <button className="bg-blue-500 text-white py-2 px-6 hover:bg-blue-600">
              Order Now
            </button>
            </Link>
          </div>
        </div>

        {/* Chair and Circles */}
        <div className="relative md:w-1/2 mt-10 md:mt-0 flex justify-center">

          {/* Chair Image */}
          <Image
            src="/Hero/sofa.png" // Replace with your chair image path
            alt="Chair"
            width={300}
            height={300}
            className="w-60 sm:w-80 md:w-96 lg:w-[400px] relative"
          />

          {/* Badge */}
          <div className="absolute top-6 sm:top-10 right-6 sm:right-10 bg-blue-500 text-white text-sm font-bold py-1 px-3 rounded-full">
            50% off
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;