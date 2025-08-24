import React from 'react';
import { assets } from '../assets/assets';
import { useAppContext } from '../context/AppContext';

const Navbar = () => {
  const { navigate, token } = useAppContext();

  return (
    <div className="sticky top-0 z-50 flex justify-between items-center py-4 px-8 sm:px-20 xl:px-32 bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 border-b border-gray-800
 shadow-md">
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img
          src={assets.logo}
          alt="logo"
          className="w-30 sm:w-12 drop-shadow-md"
        />
        <h1 className="text-xl sm:text-2xl font-bold tracking-wide bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
          Neurotide
        </h1>

      </div>
      <button
        onClick={() => navigate('/admin')}
        className="flex items-center gap-2 rounded-full text-xs sm:text-sm cursor-pointer bg-blue-600 text-gray-100 px-4 sm:px-5 py-2 sm:py-2.5 shadow-md hover:bg-blue-500 transition-all duration-150 active:scale-[0.99]"
      >
        {token ? 'Dashboard' : 'Login'}
        <img
          src={assets.arrow}
          className="w-3.5 sm:w-3 h-auto"
          alt="arrow"
        />
      </button>
    </div>
  );
};

export default Navbar;
