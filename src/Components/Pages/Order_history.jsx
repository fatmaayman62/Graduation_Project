import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import img from "../../assets/cat.jpg";
import { Button } from "@heroui/react";
import med1 from '../../assets/1.jfif'  
import med2 from '../../assets/2.jfif'  
import med3 from '../../assets/3.jfif'  
import med4 from '../../assets/4.jfif'  
import med5 from '../../assets/5.jfif'  
import med6 from '../../assets/6.jfif'  
import med7 from '../../assets/7.jfif'  
import med8 from '../../assets/8.jfif'  
import med9 from '../../assets/9.jfif'

function Order_history() {
    const [ordersData,setOrdersData] = useState([
  {
    id: 1,
    orderNumber: "ORD-12345",
    date: "Jan 20, 2025",
    images: [med1, med2],
    pharmacy: "HealthPlus Pharmacy",
    price: "$89.50",
    status: "Delivered",
    borderColor: "border-green-500",
    badgeStyle: "bg-green-100 text-green-700",
  },
  {
    id: 2,
    orderNumber: "ORD-12344",
    date: "Jan 20, 2025",
    images: [med3, med4],
    pharmacy: "HealthPlus Pharmacy",
    price: "$89.50",
    status: "Pending",
    borderColor: "border-yellow-500",
    badgeStyle: "bg-yellow-100 text-yellow-700",
  },
  {
    id: 3,
    orderNumber: "ORD-12343",
    date: "Jan 20, 2025",
    images: [med5, med6],
    pharmacy: "HealthPlus Pharmacy",
    price: "$89.50",
    status: "Cancelled",
    borderColor: "border-red-500",
    badgeStyle: "bg-red-100 text-red-700",
  },
]);

  return (
    <div className="container mx-auto py-4 pt-22">
      <h2>Order History</h2>

      {/* start order history */}
      <div className="orders">
        {ordersData.map((order) => (
          <div
            key={order.id}
            className={`box border-s-4 ${order.borderColor} bg-white dark:bg-[#1D293D] rounded-xl p-4 my-5 relative`}
          >
            <h3 className="sm:text-[16px] text-[14px]">
              Order #{order.orderNumber}
            </h3>

            <p className="sm:text-[14px] text-[12px] text-[#717182] my-2">
              {order.date}
            </p>

            <figure className="flex gap-2">
              {order.images.map((imgSrc, index) => (
                <img
                  key={index}
                  className="sm:w-12 w-10 aspect-square rounded-xl"
                  src={imgSrc}
                  alt="product"
                />
              ))}
            </figure>

            <div className="flex justify-between my-4">
              <span className="sm:text-[14px] text-[12px] text-[#717182]">
                {order.pharmacy}
              </span>
              <span className="sm:text-[16px] text-[14px]">
                {order.price}
              </span>
            </div>

            <div className="flex justify-between">
              <Button className="sm:w-[88%] w-[85%] sm:text-[16px] text-[14px] py-1 rounded-md text-white bg-blue-500">
                Recorder
              </Button>

              <span className="flex items-center gap-1.5 sm:text-[14px] text-[12px] mx-2 cursor-pointer">
                View Detail <FaArrowRightLong className="text-[10px]" />
              </span>
            </div>

            <span
              className={`px-2 py-1 rounded-xl sm:text-[12px] text-[10px] absolute top-5 right-5 ${order.badgeStyle}`}
            >
              {order.status}
            </span>
          </div>
        ))}
      </div>
      {/* end order history */}
    </div>
  );
}

export default Order_history;
