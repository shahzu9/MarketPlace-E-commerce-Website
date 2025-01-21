"use client";

const FAQPage = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header Section */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Questions Looks Here
        </h1>
        <p className="text-gray-600 text-lg mb-12">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the
        </p>

        {/* FAQ Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* FAQ Item */}
          <div className="bg-gray-100 rounded-lg shadow-md p-6 flex content-start text-start">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                What types of chairs do you offer?
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </p>
            </div>
            <div className="text-gray-500 text-3xl">+</div>
          </div>

          {/* FAQ Item */}
          <div className="bg-gray-100 rounded-lg shadow-md p-6 flex content-start text-start">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                How can we get in touch with you?
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </p>
            </div>
            <div className="text-gray-500 text-3xl">+</div>
          </div>

          {/* FAQ Item */}
          <div className="bg-gray-100 rounded-lg shadow-md p-6 flex content-start text-start">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Do your chairs come with a warranty?
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </p>
            </div>
            <div className="text-gray-500 text-3xl">+</div>
          </div>

          {/* FAQ Item */}
          <div className="bg-gray-100 rounded-lg shadow-md p-6 flex content-start text-start">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                What will be delivered? And when?
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </p>
            </div>
            <div className="text-gray-500 text-3xl ">+</div>
          </div>

          {/* FAQ Item */}
          <div className="bg-gray-100 rounded-lg shadow-md p-6 flex content-start text-start">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Can I try a chair before purchasing?
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </p>
            </div>
            <div className="text-gray-500 text-3xl ">+</div>
          </div>

          {/* FAQ Item */}
          <div className="bg-gray-100 rounded-lg shadow-md p-6 flex content-start text-start">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                How do I clean and maintain my Comforty chair?
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </p>
            </div>
            <div className="text-gray-500 text-3xl ">+</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
