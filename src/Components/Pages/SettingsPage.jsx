import React, { useContext, useEffect, useState } from "react";
import { CounterShoppingList } from "../Context/CounterShoppingListProvider";

export default function SettingsPage() {
  let {mode, setMode,changeMode}=useContext(CounterShoppingList);
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

 

  return (
    <div className="max-w-2xl mx-auto p-6 pt-24 text-gray-800 dark:text-white">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      {/* Appearance */}
      <div className="bg-white dark:bg-[#1D293D] shadow rounded-xl p-5 mb-6">
        <h2 className="sm:text-lg text-[16px] font-semibold mb-4">
          Appearance
        </h2>

        <div className="flex items-center justify-between">
          <span className="sm:text-[16px] text-[14px] text-gray-700 dark:text-gray-300">
            Dark Mode
          </span>

          <label className="cursor-pointer">
            <input
              type="checkbox"
              className="hidden"
              
            onChange={() => {changeMode(mode=='light'?'dark':'light');setDarkMode(!darkMode)}}
            />
            <div
              className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors
              ${darkMode ? "bg-blue-500" : "bg-gray-300"}`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform
                ${darkMode ? "translate-x-6" : ""}`}
              />
            </div>
          </label>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white dark:bg-[#1D293D] shadow rounded-xl p-5 mb-6">
        <h2 className="sm:text-lg text-[16px] font-semibold mb-4">
          Notifications
        </h2>

        <div className="flex items-center justify-between">
          <span className="sm:text-[16px] text-[14px] text-gray-700 dark:text-gray-300">
            Enable Notifications
          </span>
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
            className="w-5 h-5 accent-blue-500"
          />
        </div>
      </div>

      {/* Account */}
      <div className="bg-white dark:bg-[#1D293D] shadow rounded-xl p-5">
        <h2 className="sm:text-lg text-[16px] font-semibold mb-4">
          Account
        </h2>

        <button className="sm:text-[16px] text-[14px] bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
          Delete Account
        </button>
      </div>
    </div>
  );
}
