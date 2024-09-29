import { Outlet, Link } from "react-router-dom";
import Logo from "../assets/Images/Logo-Transparent.png";
import { useState } from "react";
import ServiceGrid from "../components/Services/ServiceGrid";

function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center py-4 px-6 bg-[#21140b] text-white">
        <div className="text-yellow-300 font-bold">
          <img src={Logo} alt="logo" className="w-[50px]" />
        </div>
        <div className="md:hidden relative">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
          {isOpen && (
            <ul className="absolute -ml-28 w-auto bg-[rgba(89,47,6,0.8)] text-white mt-2 flex-col space-y-6 p-2 z-10">
              <li className="hover:text-yellow-500">
                <Link to="/" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
              </li>
              <li className="hover:text-yellow-500">
                <Link to="/about" onClick={() => setIsOpen(false)}>
                  About Us
                </Link>
              </li>
              <li className="hover:text-yellow-500 relative group">
                <Link to="/services" onClick={() => setIsOpen(false)}>
                  Services
                </Link>
              </li>
              <li className="hover:text-yellow-500">
                <Link to="/travelInsight" onClick={() => setIsOpen(false)}>
                  Travel Insights
                </Link>
              </li>
              <li className="hover:text-yellow-500">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Contact Us
                </Link>
              </li>
              <li className="hover:text-[#21140b]">
            <button className="bg-orange-700 rounded p-2 transition-transform duration-200 hover:scale-105 animate-bounce">
            <Link to="/bookings">Book now</Link></button>
          </li>
            </ul>
          )}
        </div>
        <ul className="items-center hidden md:flex md:flex-row md:space-x-6 z-10">
          <li className="hover:text-yellow-500">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-yellow-500">
            <Link to="/about">About Us</Link>
          </li>
          <li className="hover:text-yellow-500 relative group cursor-pointer">
            Services
            <ul className="fixed left-0 w-full mt-0 hidden group-hover:block">
              <Link to="/services">
                <ServiceGrid />
              </Link>
            </ul>
          </li>
          <li className="hover:text-yellow-500">
            <Link to="/travelInsight">Travel Insights</Link>
          </li>
          <li className="hover:text-yellow-500">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="hover:text-[#21140b]">
            <button className="bg-orange-700 rounded p-2 transition-transform duration-200 hover:scale-105 animate-bounce">
            <Link to="/bookings">Book now</Link></button>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
