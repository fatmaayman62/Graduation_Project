import React, { useContext } from "react";
import { Link } from "react-router-dom"; 
import { UserContextMain } from "../ChooseUserPage/UserContext";

export default function NotFound() { 
     let {mode}=useContext(UserContextMain);
  

  return (
    <main className={mode}>
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-950 px-4 sm:px-6 lg:px-8 transition-colors duration-500">
      
      {/* 404 Number */}
      <h1 className="text-[6rem] sm:text-[8rem] md:text-[10rem] font-extrabold text-gray-900 dark:text-white mb-4 text-center">
        404
      </h1>
      
      {/* Message */}
      <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 text-center max-w-md">
        Oops! The page you're looking for doesn't exist.
      </p>
      
      {/* Go Home Button */}
      <Link
        to="/"
        className="px-6 py-3 sm:px-8 sm:py-4 bg-blue-600 dark:bg-blue-500 text-white rounded-xl text-sm sm:text-base md:text-lg hover:bg-blue-500 dark:hover:bg-blue-600 transition shadow-lg shadow-blue-600/40 dark:shadow-blue-500/40"
      >
        Go to Home
      </Link>
      
    </div>
    </main>
  );
}