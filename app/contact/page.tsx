

const Contact = () => {
  return (
<section className="bg-gray-100 py-16 px-4 sm:px-8">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Left Side: Information */}
    <div className="text-left">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Information About Us</h2>
      <p className="text-gray-600 mb-4">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
      <p className="text-gray-600 mb-4 font-bold">Contact:</p>
      <ul className="text-gray-600 space-y-2">
        <li>Phone: +123 456 789</li>
        <li>Email: contact@example.com</li>
        <li>Address: 123 Main Street, City, Country</li>
      </ul>
    </div>

    {/* Right Side: Contact Form */}
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1 ">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            placeholder="This is an optional"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Enter your message"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</section>
  );
};

export default Contact;