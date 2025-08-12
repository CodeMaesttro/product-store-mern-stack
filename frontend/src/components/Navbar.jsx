import { PlusIcon, SunIcon, ShoppingCart } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";


  return (
    <div className="w-full h-12 flex items-center bg-white dark:bg-gray-950 shadow-sm">
      <div className="flex justify-between items-center w-[90%] mx-auto">
        {/* Logo + Cart Icon */}
        <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
          <h2 className="text-black dark:text-blue-500">Product Store</h2>
          <ShoppingCart size={20} className="p-1 bg-gray-600 rounded text-white" />
        </Link>

        {/* Right-side actions */}
        <div className="flex items-center space-x-4">
          <Link to="/create-product">
            <PlusIcon
              size={20}
              className="p-1 bg-green-600 text-white rounded hover:bg-green-700 shadow"
            />
          </Link>

          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
