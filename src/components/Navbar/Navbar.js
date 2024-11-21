import { useState } from "react";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import { useUser } from "../../context/UserContext";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isLoggedIn } = useUser();
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <>
      <nav className="bg-white shadow fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="#" className="flex items-center">
                <img className="h-8 w-auto" src="logo.png" alt="Joypal" />
                <span className="ml-2 text-xl font-bold">Store</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-gray-900 transition duration-300 shadow-md p-2 rounded"
              >
                Home
              </Link>
              <Link
                to="/products"
                className="text-gray-700 hover:text-gray-900 transition duration-300 shadow-md p-2 rounded"
              >
                Products
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-gray-900 transition duration-300 shadow-md p-2 rounded"
              >
                Contact
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-gray-900 transition duration-300 shadow-md p-2 rounded"
              >
                About
              </Link>
              <Link
                to="/cart"
                className="text-gray-700 hover:text-gray-900 transition duration-300 shadow-md p-2 rounded"
              >
                Cart
              </Link>
              <Link
                to="/faq"
                className="text-gray-700 hover:text-gray-900 transition duration-300 shadow-md p-2 rounded"
              >
                FAQs
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              {isLoggedIn ? (
                <Link to="/myaccount" className="flex items-center">
                  <img
                    src="profile.jpg"
                    alt="Profile"
                    className="w-8 h-8 rounded-full border-2 border-gray-300"
                  />
                  <span className="ml-2 text-gray-700 hover:text-gray-900">
                    My Account
                  </span>
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 shadow-md py-2 px-4 rounded"
                >
                  Login
                </Link>
              )}
            </div>
            <div className="md:hidden">
              <button
                className="text-gray-700 focus:outline-none"
                onClick={toggleMobileMenu}
              >
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
              </button>
            </div>
          </div>
          <MobileNav
            mobileMenuOpen={mobileMenuOpen}
            toggleMobileMenu={toggleMobileMenu}
          />
        </div>
      </nav>
      <div className="pt-16"></div> {/* Offset for the fixed nav */}
    </>
  );
};

export default NavBar;
