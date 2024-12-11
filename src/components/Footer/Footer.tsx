import React from "react";
import Logo from "../../assets/Images/Logo-Transparent.png";
import { Link } from "react-router-dom";
import rdb from "../../assets/Images/rdb.jpeg";
import rtta2 from "../../assets/Images/rtta2.png";
import rwandair from "../../assets/Images/rwandair.jpeg";
import undp from "../../assets/Images/undp.svg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3e2a1e] text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img src={Logo} alt="logo" className="w-[150px]" />
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-orange-400">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-orange-400">
              <i className="fab fa-xing"></i>
            </a>
            <a href="#" className="hover:text-orange-400">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="hover:text-orange-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-orange-400">
              <i className="fab fa-tripadvisor"></i>
            </a>
          </div>
        </div>

        <div className="flex justify-between">
          <div>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-orange-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-orange-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-orange-400">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-orange-400">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/travelInsight" className="hover:text-orange-400">
                  Travel Insight
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-orange-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-orange-400">
                  Rwanda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Kenya
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Tanzania
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="mb-4">
            <h4 className="font-bold">Drop a Line</h4>
            <p className="text-orange-400">(+250)786 384 595</p>
          </div>
          <div className="mb-4">
            <h4 className="font-bold">Email Address</h4>
            <p className="text-orange-400"> africawizzysafaris@gmaail.com</p>
          </div>
          <div>
            <h4 className="font-bold">Visit Office</h4>
            <p className="text-orange-400">Kigali - Rwanda</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8">
        <h4 className="text-center font-bold mb-4">Partners</h4>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <img src={rdb} alt="RDB" className="h-12 object-contain" />
          <img src={rtta2} alt="RTTA" className="h-12 object-contain" />
          <img src={rwandair} alt="RwandAir" className="h-12 object-contain" />
          <img src={undp} alt="UNDP" className="h-12 object-contain" />
        </div>
      </div>

      <div className="text-center mt-8 text-sm">
        &copy; 2024 africa-wizzy-safaris
      </div>
    </footer>
  );
};

export default Footer;
