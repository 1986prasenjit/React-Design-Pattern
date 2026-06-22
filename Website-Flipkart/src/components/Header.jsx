import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full h-20 bg-white shadow-md px-10 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-pink-500 cursor-pointer">
          Myntra
        </h1>
      </div>
      <nav>
        <ul className="flex items-center gap-8 text-lg font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-pink-500 border-b-2 border-pink-500 pb-1"
                  : "text-gray-700 hover:text-pink-500 transition duration-300"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-pink-500 border-b-2 border-pink-500 pb-1"
                  : "text-gray-700 hover:text-pink-500 transition duration-300"
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-pink-500 border-b-2 border-pink-500 pb-1"
                  : "text-gray-700 hover:text-pink-500 transition duration-300"
              }
            >
              Contact
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/product"
              className={({ isActive }) =>
                isActive
                  ? "text-pink-500 border-b-2 border-pink-500 pb-1"
                  : "text-gray-700 hover:text-pink-500 transition duration-300"
              }
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        <button className="px-5 py-2 border-2 border-pink-500 text-pink-500 rounded-md hover:bg-pink-500 hover:text-white transition duration-300">
          Login
        </button>

        <button className="px-5 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition duration-300">
          Signup
        </button>
      </div>
    </header>
  );
};

export default Header;
