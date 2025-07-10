import React from "react";
import {
  ShoppingCart,
  Rocket,
  Plus,
  Sun
} from "lucide-react";

function Navbar({ onAddClick, onToggleTheme }) {
  return (
    <div className="w-full bg-[#141824] px-6 py-4 flex items-center justify-between shadow-md">
      {/* Left - Store Title */}
      <div className="flex items-center space-x-2">
        <h1 className="text-cyan-400 text-xl font-bold">PRODUCT STORE</h1>
        <ShoppingCart className="text-cyan-400 w-5 h-5" />
      </div>

    
      
      {/* Right - Icons */}
      <div className="flex items-center space-x-3">
        <button
          className="bg-[#1f273a] hover:bg-[#2e374d] p-2 rounded-md"
          onClick={onAddClick}
          title="Add Product"
        >
          <Plus className="text-white w-5 h-5" />
        </button>
        <button
          className="bg-[#1f273a] hover:bg-[#2e374d] p-2 rounded-md"
          onClick={onToggleTheme}
          title="Toggle Theme"
        >
          <Sun className="text-white w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
