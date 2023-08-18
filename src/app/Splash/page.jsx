import React from "react";
import Link from "next/link";

export const SplashPage = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col gap-8 items-center justify-center backdrop-blur-sm h-screen">
        <h1 className="text-4xl text-white bg-black/80 p-4 rounded-xl font-bold tracking-widest mt-18">
          WELCOME TO CarHub
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-10 p-8 bg-slate-200/80 rounded-md">
          <p className="italic">You must login or register to continue...</p>
          <Link href="/Login">
            <button
              type="button"
              className="px-2 py-1 w-20 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
            >
              Login
            </button>
          </Link>
          <Link href="/Register">
            <button
              type="button"
              className="px-2 py-1 w-20 bg-teal-500 text-white hover:bg-teal-600 hover:text-white rounded-md"
            >
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SplashPage;
