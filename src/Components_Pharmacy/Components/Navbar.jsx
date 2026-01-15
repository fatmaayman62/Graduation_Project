import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered, FaMoon } from "react-icons/fa6";
import { CiLight } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { ModeContext } from "../Contexts/ThemeContext";
import profileImage from "../../assets/profile.jpg";

export default function Navbar() {
  const { mode, changeMode } = useContext(ModeContext);
  const [toggleBars, setToggleBars] = useState(false);

  const navBg =
    mode === "light"
      ? "bg-white text-slate-900"
      : "bg-slate-800 text-slate-100";

  const activeLink = "text-[#0084D1] font-semibold";
  const normalLink =
    "hover:text-[#0084D1] transition-colors duration-300";

  return (
    <nav className={`shadow-lg py-3 ${navBg} fixed inset-x-0 top-0`}>
      <div className="container mx-auto px-4">

        {/* ===== Top Navbar ===== */}
        <div className="flex justify-between items-center">

          {/* Logo */}
          <div className="flex items-center space-x-2 text-[#004AAD] dark:text-white">
            <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 20">
              <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm3 8h-2v2h-2v-2H9V8h2V6h2v2h2v2z" />
            </svg>
            <Link to="/pharmacy" className="text-xl font-bold">
              MedLink
            </Link>
          </div>

          {/* Desktop Links */}
          <ul className="hidden lg:flex space-x-8 text-lg">
            <li>
              <NavLink
                to="/pharmacy"
                end
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/pharmacy/inventory management"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Inventory Management
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/pharmacy/orders"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Orders
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/pharmacy/contact-us"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>

          {/* Right Icons */}
          <div className="flex items-center space-x-3">
            {mode === "light" ? (
              <FaMoon
                onClick={changeMode}
                className="text-2xl cursor-pointer hover:scale-110 transition"
              />
            ) : (
              <CiLight
                onClick={changeMode}
                className="text-3xl text-yellow-400 cursor-pointer hover:rotate-180 transition"
              />
            )}

            <IoIosNotifications className="text-3xl cursor-pointer" />

            <Link to="/pharmacy/profile">
              <img
                src={profileImage}
                className="w-9 h-9 rounded-full border-2 border-blue-500 hover:scale-110 transition"
              />
            </Link>

            {/* Mobile Menu Button */}
            <FaBarsStaggered
              className="text-2xl cursor-pointer lg:hidden"
              onClick={() => setToggleBars(!toggleBars)}
            />
          </div>
        </div>

        {/* ===== Mobile Dropdown ===== */}
        <div
          className={`lg:hidden mt-3 rounded-xl overflow-hidden transition-all duration-300 
          ${toggleBars ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          ${navBg}`}
        >
          <ul className="flex flex-col space-y-3 p-4 text-lg">
            <NavLink
              to="/pharmacy"
              end
              onClick={() => setToggleBars(false)}
              className={({ isActive }) =>
                isActive ? activeLink : normalLink
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/pharmacy/inventory-management"
              onClick={() => setToggleBars(false)}
              className={({ isActive }) =>
                isActive ? activeLink : normalLink
              }
            >
              Inventory Management
            </NavLink>

            <NavLink
              to="/pharmacy/orders"
              onClick={() => setToggleBars(false)}
              className={({ isActive }) =>
                isActive ? activeLink : normalLink
              }
            >
              Orders
            </NavLink>

            <NavLink
              to="/pharmacy/contact-us"
              onClick={() => setToggleBars(false)}
              className={({ isActive }) =>
                isActive ? activeLink : normalLink
              }
            >
              Contact Us
            </NavLink>
          </ul>
        </div>

      </div>
    </nav>
  );
}
