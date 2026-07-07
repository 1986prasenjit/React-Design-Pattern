import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo Section */}
          <div className="shrink-0 flex items-center">
            <NavLink
              to="/"
              className="text-2xl font-bold tracking-tight text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              Brand<span className="text-slate-800">Name</span>
            </NavLink>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `uppercase font-bold transition-colors duration-200 text-sm tracking-wide ${
                  isActive
                    ? "text-red-700 underline underline-offset-4"
                    : "text-slate-600 hover:text-indigo-600"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `uppercase font-bold transition-colors duration-200 text-sm tracking-wide ${
                  isActive
                    ? "text-red-700 underline underline-offset-4"
                    : "text-slate-600 hover:text-indigo-600"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `uppercase font-bold transition-colors duration-200 text-sm tracking-wide ${
                  isActive
                    ? "text-red-700 underline underline-offset-4"
                    : "text-slate-600 hover:text-indigo-600"
                }`
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/service"
              className={({ isActive }) =>
                `uppercase font-bold transition-colors duration-200 text-sm tracking-wide ${
                  isActive
                    ? "text-red-700 underline underline-offset-4"
                    : "text-slate-600 hover:text-indigo-600"
                }`
              }
            >
              Service
            </NavLink>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors">
              Log in
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0">
              Get Started
            </button>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-indigo-600 hover:bg-slate-100 focus:outline-none transition-colors"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden border-t border-slate-100 bg-white shadow-inner transition-all duration-200`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50"
          >
            Home
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50"
          >
            Features
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50"
          >
            Pricing
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50"
          >
            About
          </a>
        </div>
        <div className="pt-4 pb-4 border-t border-slate-100 px-4 flex flex-col space-y-2">
          <button className="w-full text-center px-4 py-2 text-base font-medium text-slate-700 hover:text-indigo-600 transition-colors">
            Log in
          </button>
          <button className="w-full text-center px-4 py-2 text-base font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 shadow-sm transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
