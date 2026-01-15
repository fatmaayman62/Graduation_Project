import React, { useState } from "react";
import img from '../../assets/cat.jpg'  
import med1 from '../../assets/1.jfif'  
import med2 from '../../assets/2.jfif'  
import med3 from '../../assets/3.jfif'  
import med4 from '../../assets/4.jfif'  
import med5 from '../../assets/5.jfif'  
import med6 from '../../assets/6.jfif'  
import med7 from '../../assets/7.jfif'  
import med8 from '../../assets/8.jfif'  
import med9 from '../../assets/9.jfif'  
 import { FaArrowRight } from "react-icons/fa6"; 
import PharmacyComponent from "../Component/PharmacyComponent"; 
import { IoSearchOutline } from "react-icons/io5";
function Medicines() {
  const [arrMedicines,setArrMedicines] = useState([
  {
    id: 1,
    name: "Al-Shifa Pharmacy",
    image: med1,
    rating: 4.5,
    reviews: 120,
    medicine: "Paracetamol 500mg",
    price: 248,
    stock: 15,
    distance: "1.2 km away",
  },
  {
    id: 2,
    name: "Al-Noor Pharmacy",
    image: med2,
    rating: 4.2,
    reviews: 98,
    medicine: "Ibuprofen 400mg",
    price: 190,
    stock: 20,
    distance: "0.8 km away",
  },
  {
    id: 3,
    name: "El-Hayat Pharmacy",
    image: med3,
    rating: 4.7,
    reviews: 210,
    medicine: "Vitamin C 1000mg",
    price: 135,
    stock: 30,
    distance: "2.1 km away",
  },
  {
    id: 4,
    name: "Al-Amal Pharmacy",
    image: med4,
    rating: 4.0,
    reviews: 76,
    medicine: "Aspirin 81mg",
    price: 110,
    stock: 10,
    distance: "1.5 km away",
  },
  {
    id: 5,
    name: "Green Care Pharmacy",
    image: med5,
    rating: 4.6,
    reviews: 154,
    medicine: "Omega 3 Capsules",
    price: 320,
    stock: 18,
    distance: "3.0 km away",
  },
  {
    id: 6,
    name: "City Pharmacy",
    image: med6,
    rating: 3.9,
    reviews: 65,
    medicine: "Cough Syrup",
    price: 95,
    stock: 25,
    distance: "0.5 km away",
  },
  {
    id: 7,
    name: "Life Line Pharmacy",
    image: med7,
    rating: 4.8,
    reviews: 340,
    medicine: "Antibiotic 500mg",
    price: 410,
    stock: 8,
    distance: "4.2 km away",
  },
  {
    id: 8,
    name: "Al-Rahma Pharmacy",
    image: med8,
    rating: 4.3,
    reviews: 112,
    medicine: "Insulin Pen",
    price: 550,
    stock: 12,
    distance: "2.7 km away",
  },
  {
    id: 9,
    name: "Future Care Pharmacy",
    image: med9,
    rating: 4.1,
    reviews: 89,
    medicine: "Blood Pressure Monitor",
    price: 780,
    stock: 5,
    distance: "5.0 km away",
  },
]);

  return (
    <>
    {/* ************************************************* */}
    <div className="container pt-12 mx-auto mt-8">

            {/* Search Form - FIXED: Removed margin auto and adjusted sizing */}
            <form className="my-4 flex items-center sm:flex-row flex-col sm:gap-0 gap-2 mx-auto w-full md:w-[450px] lg:w-[600px] space-x-2">
              <label htmlFor="voice-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <IoSearchOutline />
                </div>
                <input
                  type="text"
                  id="voice-search"
                  className="block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium dark:border-gray-400 outline-0 focus:border-blue-600 rounded-xl text-heading text-sm focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
                  placeholder="Search for medicine..."
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center text-white bg-blue-500 rounded-2xl bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none whitespace-nowrap"
              >
                <svg
                  className="w-4 h-4 me-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                  />
                </svg>
                Search
              </button>
            </form>
    {/* start section display medicine depended on search with name or voice */}
      <div className="medicineSearch bg-white dark:bg-[#1D293D] rounded-xl  p-5 flex gap-4 sm:flex-row flex-col">
        <figure>
            <img className="sm:w-35 sm:h-25 w-full h-[120px] rounded-xl" src={img} alt="img" />
        </figure>
        <div className="wrapper-text ">
            <h3 className="sm:text-[16px] text-[14px]">Paracetamol 500mg</h3>
            <p className="my-2 text-[#717182] sm:text-[16px] text-[14px]"><span>Generic name: </span> Acetaminophen</p>
            <p className="my-2 sm:text-[14px] text-[12px]">Paracetamol is a common pain reliever and fever reducer. It's used to treat mild to moderate pain and to reduce fever. Safe for most people when used as directed</p>
            <button className="flex items-center gap-2 text-[#004AAD] sm:text-[14px] text-[12px]">View Alternatives <span><FaArrowRight /></span></button>
        </div>
      </div>
    {/* end section display medicine depended on search with name or voice */}


    </div>
    {/* ************************************************* */}



   {/* ************************************************* */}
   {/* start section filter and search on pharmacy */}
      {/* <div className="container mx-auto mt-8 shadow-sm dark:bg-[#03173b] bg-[#FFFFFF] rounded-2xl py-5 px-3">
        <div className="flex">
          <div className="box w-1/4">
            <label htmlFor="SortedBy" className="block mb-2.5 text-[14px] font-medium text-heading">Sorted By</label>
            <select name="sortedBy" id="SortedBy" className="w-3/4 text-[13px] dark:bg-[#03173b] dark:text-white">
              <option value="Distance">Distance</option>
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Price: High to Low">Price: High to Low</option>
              <option value="Highest Rated">Highest Rated</option>
            </select>
          </div>
          <div className="box w-1/4">
            <label htmlFor="distance" className="block mb-2.5 text-[14px] font-medium text-heading">Distance (km)</label>
            <select name="distance" id="distance" className="w-3/4 text-[13px] dark:bg-[#03173b] dark:text-white">
              <option value="Within 1km">Within 1km</option>
              <option value="Within 3km">Within 3km</option>
              <option value="Within 5km">Within 5km</option>
              <option value="Within 10km">Within 10km</option>
              <option value="All distances">All distances</option>
            </select>
          </div>
          <div className="box w-1/4">
            <label
              htmlFor="steps-range"
              className="block mb-2.5 text-[14px] font-medium text-heading"
            >
              Price Range (0 - 500) 
            </label>

            <input
              id="steps-range"
              type="range"
              min="0"
              max="500"
              step="0.5" 
              onChange={(e) => setPrice(e.target.value)}
              className="h-2 w-3/4 bg-gray-200 rounded-full cursor-pointer accent-[#667EEA]"
            />

          </div>
          <div className="box w-1/4">
            <label
              htmlFor="steps-range"
              className="block mb-2.5 text-[14px] font-medium text-heading"
            >
              Availability
            </label>

            <div className="toggleSearchType w-3/4 flex justify-between px-3 rounded-2xl dark:text-[#03173b] bg-[#ECECF0] py-2">
                <p className="text-[14px] font-medium">All</p>
                <p className="text-[14px] font-medium">In Sock</p>
                <p className="text-[14px] font-medium">Limited</p>
            </div>

          </div>
        </div>
        
        </div> */}
        {/* start section filter and search on pharmacy */}
   {/* ************************************************* */}



   {/* ************************************************* */}
      <section className="content container mx-auto">
      {/* start display nearest pharmacy */}

      <h2 className="my-4 text-[#717182] sm:text-[16px] text-[14px]">Showing 9 pharmacies near you</h2>
        <div className="flex flex-wrap ">
          {
            arrMedicines?.length !==0 && arrMedicines.map(item=><PharmacyComponent key={item.id} data={item} />)
          } 
         
        </div>

      {/* end display nearest pharmacy */}
      </section>
    {/* ************************************************* */}

    
    </>
  );
}

export default Medicines;
