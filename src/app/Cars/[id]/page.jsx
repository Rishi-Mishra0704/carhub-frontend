import React from "react";
import Link from "next/link";

const CarsDetailsPage = () => {
  // Sample car data (replace with actual data fetched from API or database)
  const carData = {
    id: 1,
    name: "Sample Car",
    year: "2023",
    color: "Red",
    plate_no: "ABC123",
    price: "20000",
  };

  return (
    <div className="bg-gray-100 my-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md">
          <h2 className="text-[28px] font-bold text-gray-900 mb-6">
            {carData.name}
          </h2>
          <div className="border-t border-gray-300 pt-4">
            <p className="text-gray-700 font-semibold mb-2">
              Year: {carData.year}
            </p>
            <p className="text-gray-700 font-semibold mb-2">
              Color: {carData.color}
            </p>
            <p className="text-gray-700 font-semibold mb-2">
              Plate Number: {carData.plate_no}
            </p>
            <p className="text-gray-700 font-semibold mb-4">
              Price: ${carData.price}
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="/RentCar"
              className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Rent This Car
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarsDetailsPage;
