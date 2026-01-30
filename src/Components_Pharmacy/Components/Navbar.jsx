import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaMoon } from "react-icons/fa6";
import { CiLight } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { ModeContext } from "../Contexts/ThemeContext";
import profileImage from "../../assets/profile.jpg";

export default function Navbar() {
  const { mode, changeMode } = useContext(ModeContext);
  const [open, setOpen] = useState(false);

  const navStyle =
    mode === "light"
      ? "bg-white/80 text-slate-800 border-slate-200"
      : "bg-slate-900/80 text-slate-100 border-slate-700";

  const active =
    "text-[#0084D1] border-b-2 border-[#0084D1] pb-1";
  const normal =
    "hover:text-[#0084D1] transition-all";

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 backdrop-blur-xl border-b ${navStyle}`}
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link to="/pharmacy" className="flex items-center gap-2 font-bold text-lg">
            <span className="w-9 h-9 rounded-lg bg-[#0084D1] text-white flex items-center justify-center">
              +
            </span>
            MedLink
          </Link>

          {/* Desktop Links */}
          <nav className="hidden lg:flex gap-8 text-sm font-medium">
            <NavLink to="/pharmacy" end className={({ isActive }) => isActive ? active : normal}>
              Home
            </NavLink>
            <NavLink to="/pharmacy/inventory-management" className={({ isActive }) => isActive ? active : normal}>
              Inventory
            </NavLink>
            <NavLink to="/pharmacy/orders" className={({ isActive }) => isActive ? active : normal}>
              Orders
            </NavLink>
            <NavLink to="/pharmacy/contact-us" className={({ isActive }) => isActive ? active : normal}>
              Contact
            </NavLink>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-3 sm:gap-4">

            {/* Theme */}
            {mode === "light" ? (
              <FaMoon
                onClick={changeMode}
                className="cursor-pointer text-xl hover:scale-110 transition"
              />
            ) : (
              <CiLight
                onClick={changeMode}
                className="cursor-pointer text-2xl text-yellow-400 hover:rotate-180 transition"
              />
            )}

            {/* Notifications */}
            <IoIosNotificationsOutline className="text-2xl cursor-pointer hover:text-[#0084D1]" />

            {/* Profile */}
            <Link to="/pharmacy/profile">
              <img
                src={profileImage}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-slate-400 hover:ring-2 hover:ring-[#0084D1] transition"
              />
            </Link>

            {/* Mobile Menu Button */}
            <HiOutlineMenuAlt3
              onClick={() => setOpen(!open)}
              className="text-2xl cursor-pointer lg:hidden"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${open ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"}
          ${navStyle}`}
        >
          <nav className="flex flex-col gap-4 px-6 py-4 text-sm font-medium">
            <NavLink to="/pharmacy" end onClick={closeMenu}>Home</NavLink>
            <NavLink to="/pharmacy/inventory-management" onClick={closeMenu}>Inventory</NavLink>
            <NavLink to="/pharmacy/orders" onClick={closeMenu}>Orders</NavLink>
            <NavLink to="/pharmacy/contact-us" onClick={closeMenu}>Contact</NavLink>
          </nav>
        </div>
      </header>

      {/* Spacer to prevent content overlap */}
      <div className="h-16"></div>
    </>
  );
}
