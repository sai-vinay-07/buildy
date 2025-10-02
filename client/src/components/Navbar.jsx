import React from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContent";

const Navbar = () => {
  const { navigate, token, logout } = useAppContext();

  return (
    <div className="relative h-[110px] flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-6">
      {/* Logo */}
      <img
        src={assets.buildy_logo}
        onClick={() => navigate("/")}
        alt="logo"
        className="h-14 w-45 cursor-pointer"
      />

      {/* Right-side buttons */}
      <div className="flex items-center gap-4">
        {token ? (
          <>
            <button
              onClick={() => navigate("/admin")}
              className="flex items-center gap-2 text-base justify-center cursor-pointer px-5 py-2.5 bg-blue-700 hover:bg-indigo-600 transition text-white rounded-full"
            >
              Dashboard
              <img src={assets.arrow} className="w-3" alt="" />
            </button>
            <button
              onClick={logout}
              className="flex items-center gap-2 text-base justify-center cursor-pointer px-5 py-2.5 bg-red-600 hover:bg-red-500 transition text-white rounded-full"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="flex items-center gap-2 text-base justify-center cursor-pointer px-5 py-2.5 bg-blue-700 hover:bg-indigo-600 transition text-white rounded-full"
          >
            Login
            <img src={assets.arrow} className="w-3" alt="" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
