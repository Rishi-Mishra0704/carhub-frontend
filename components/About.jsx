import React from 'react';
import { FaShieldAlt, FaMoneyBillWave, FaClock } from 'react-icons/fa';

const About = () => {
  return (
    <div className="w-full h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-4">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 h-12">About Our Car App</h2>
        <p className="text-lg text-gray-600 mb-8">
          Welcome to our car rental app, your one-stop solution for convenient and affordable car rentals across India.
          With a presence in 100 cities, we are committed to making your travel experience smooth and hassle-free.
        </p>
        <p className="text-lg text-gray-600 mb-8">
          Our mission is to provide you with a wide range of cars to choose from, whether you're planning a business trip,
          a family vacation, or simply need a reliable ride for your daily commute.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-300 hover:border-blue-500 hover:shadow-xl transition-all">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-semibold mr-4">
                <FaShieldAlt />
              </span>
              <h3 className="text-2xl font-semibold">Safe</h3>
            </div>
            <p className="text-gray-600">
              Your safety is our priority. All our cars undergo regular maintenance and thorough safety checks to ensure
              a worry-free journey for you and your loved ones.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-300 hover:border-blue-500 hover:shadow-xl transition-all">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-semibold mr-4">
                <FaMoneyBillWave />
              </span>
              <h3 className="text-2xl font-semibold">Cost Effective</h3>
            </div>
            <p className="text-gray-600">
              We offer competitive pricing without compromising on quality. Enjoy cost-effective travel options that fit
              your budget and save you money.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-300 hover:border-blue-500 hover:shadow-xl transition-all">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-semibold mr-4">
                <FaClock />
              </span>
              <h3 className="text-2xl font-semibold">On Time</h3>
            </div>
            <p className="text-gray-600">
              We value your time. Our commitment to punctuality ensures that you can rely on us for timely pick-ups and
              drop-offs, helping you stick to your schedule.
            </p>
          </div>
        </div>
        <p className="text-lg text-gray-600 mt-8">
          Our dedicated team is committed to ensuring that you have a safe and comfortable journey, and our wide network
          of pick-up and drop-off locations makes it convenient for you to access our services no matter where you are.
        </p>
        <p className="text-lg text-gray-600">
          Thank you for choosing us as your trusted car rental partner. We look forward to serving you on your next adventure!
        </p>
      </div>
    </div>
  );
};

export default About;
