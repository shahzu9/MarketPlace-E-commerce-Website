import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-4 gap-8 ">
        {/* Footer Column 1 */}
        <div className="space-y-4">
          {/* Logo and Comforty text in a single line */}
          <div className="flex items-center space-x-2">
            <Image
              src="/navbar/Logo icon.png" // Replace with your logo image path
              alt="Logo"
              className="h-8"
              width={35}
              height={35}
            />
            <div className="text-xl font-bold">
              <Link href="/">Comforty</Link>
            </div>
          </div>

          {/* Paragraph */}
          <div>
            <p>
              Vivamus tristique odio sit amet velit semper, eu posuere turpis
              interdum. Cras egestas purus
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-start space-x-4">
            {[
              { src: "/footer/linkdin.jpeg", alt: "Linkdin" },
              { src: "/footer/twitter.png", alt: "Twitter" },
              { src: "/footer/instagrame.png", alt: "Instagram" },
              { src: "/footer/printrest.png", alt: "LinkedIn" },
              { src: "/footer/youtube.png", alt: "YouTube" },
            ].map((icon, index) => (
              <div
                key={index}
                className="w-6 h-6 flex items-center justify-center rounded-full hover:ring-2 hover:ring-blue-400 transition-all duration-300 hover:blue-400"
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  className="w-4 h-4 hover:scale-110 transition-transform duration-300"
                  width={100}
                  height={100}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Footer Column 2 */}
        <div>
          <h4 className="text-lg  mb-4 ">Categories</h4>
          <ul className="space-y-2 text-gray-400 ">
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Sofa
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Arm Chair
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Wing Chair
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Desk Chair
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Wooden Chair
              </a>
            </li>
          </ul>
        </div>

        {/* Footer Column 3 */}
        <div>
          <h4 className="text-lg  mb-4 ">Customer Care</h4>
          <ul className="  text-gray-400 ">
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Help & Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Terms & Condition
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Help
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div >
          <h4>NEWSLETTER</h4>
          <form className="flex ">
            <input
              type="email"
              placeholder="Email"
              className="w-40 px-2 py-0.5 text-sm border border-gray-300 outline-none hover:to-blue-400 "
            />
            <div className="flex justify-center  md:justify-start">
              <Link href="/signup">
                <button className="bg-blue-400 text-white py-2 px-2  hover:bg-blue-400">
                  SignUp
                </button>
              </Link>
            </div>
          </form>

          <p className="mt-4 text-sm ">
            Contact Info: 17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-200 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-sm text-gray-400 pl-10 md:pl-32 sm:pl-10 lg:pl-32">
           @2025 - ©Webecy Designed & Developed by Shahzaib
          </p>
        </div>
      </div>
    </footer>
  );
}
