import React, { useState, useEffect } from "react";
import { Button } from "@heroui/react";

export default function OrdersPage() {
  const initialOrders = [
    {
      id: 1,
      customer: "boody",
      medicine: "Paracetamol",
      quantity: 2,
      price: 5, // in USD
      status: "pending",
      date: "2025-12-10",
      contact: "boody@example.com",
    },
    {
      id: 2,
      customer: "fatma",
      medicine: "Amoxicillin",
      quantity: 1,
      price: 12,
      status: "pending",
      date: "2025-12-09",
      contact: "fatma@example.com",
    },
    {
      id: 3,
      customer: "ghouna",
      medicine: "Vitamin C",
      quantity: 5,
      price: 8,
      status: "pending",
      date: "2025-12-08",
      contact: "ghouna@example.com",
    },
    {
      id: 4,
      customer: "abdelkhaleq",
      medicine: "Vitamin A",
      quantity: 2,
      price: 10,
      status: "pending",
      date: "2025-12-08",
      contact: "abdelkhaleq@example.com",
    },
  ];

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(initialOrders);
  }, []);

  const handleAccept = (id) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status: "accepted" } : order
      )
    );
  };

  const handleReject = (id) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status: "rejected" } : order
      )
    );
  };

  return (
    <div className="p-6  min-h-screen">
      <h2 className="text-3xl font-medium mb-6">Pharmacy Orders</h2>

      <div className="flex flex-col gap-5">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-xl shadow-md p-5 flex flex-col sm:flex-row sm:justify-between sm:items-center border-l-4 border-blue-500 hover:shadow-lg transition-shadow"
          >
            <div className="mb-3 sm:mb-0">
              <p>
                <span className="font-semibold">Order ID:</span> {order.id}
              </p>
              <p>
                <span className="font-semibold">Customer:</span> {order.customer}
              </p>
              <p>
                <span className="font-semibold">Medicine:</span> {order.medicine}
              </p>
              <p>
                <span className="font-semibold">Quantity:</span> {order.quantity}
              </p>
              <p>
                <span className="font-semibold">Price:</span> ${order.price}
              </p>
              <p>
                <span className="font-semibold">Date:</span> {order.date}
              </p>
              <p>
                <span className="font-semibold">Status:</span>{" "}
                <span
                  className={
                    order.status === "pending"
                      ? "text-yellow-600 font-bold"
                      : order.status === "accepted"
                      ? "text-green-600 font-bold"
                      : "text-red-600 font-bold"
                  }
                >
                  {order.status}
                </span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              {order.status === "pending" && (
                <>
                  <Button color="success" className="text-green-800 dark:text-green-600 font-medium text-medium"  variant="" onClick={() => handleAccept(order.id)}>
                    Accept
                  </Button>
                  <Button color="danger" className="text-red-700 dark:text-red-600 font-medium text-medium"   variant=""  onClick={() => handleReject(order.id)}>
                    Reject
                  </Button>
                </>
              )}
              <Button
                color="primary"
                variant="ghost"
                onClick={() => window.open(`mailto:${order.contact}`, "_blank")}
              >
                Contact Customer
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
