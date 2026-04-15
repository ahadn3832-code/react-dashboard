import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import box from '../../assets/box.svg';

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-white px-4">
      <div className="flex flex-row items-center justify-center gap-2 mb-12">
        <img
          src={box}
          alt="Box Logo"
          className="h-10 w-auto object-contain" />
        <img
          src={logo}
          alt="InApp Text"
          className="h-8 w-auto object-contain"/>
      </div>
      <div className="text-center">
        <h1 className="text-[80px] font-bold text-[#eb6b4d] leading-none mb-4">
          404
        </h1>
        <h2 className="text-2xl font-xs text-gray-800 mb-3">
          Page Not Found
        </h2>
        <p className="text-gray-500 max-w-md mx-auto mb-10 text-sm">
          Sorry, the page you're looking for doesn't exist has been moved.
        </p>
        <button
          onClick={() => navigate('/Dashboard')}
          className="bg-[#ee733a] hover:bg-[#d65d41] text-white px-5 py-3 rounded-md text-sm font-xs transition-all duration-300 active:scale-95 cursor-pointer shadow-md">
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Error;