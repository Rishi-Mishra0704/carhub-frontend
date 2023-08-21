import React from "react";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <div id="contact" className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-4">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 h-12">
            Contact Us
          </h2>
          <p className="text-gray-600 mb-8">
            If you have any issues, inquiries, or feedback regarding our car
            rental services, listing your car, or any other matter, please feel
            free to reach out to us using the contact form below. We'd love to
            hear from you!
          </p>
          <form className="bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:border-blue-500"
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
