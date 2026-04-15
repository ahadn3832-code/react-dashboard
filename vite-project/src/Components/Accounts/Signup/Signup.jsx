import React from 'react';
import logoSvg from '../../../assets/logo.svg'; 
import boxSvg from '../../../assets/box.svg'; 

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-1 font-['Poppins']">
      <div className="bg-white p-8 rounded-xl border border-gray-200 w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-2">
            <div className="w-15 h-11 flex items-center justify-center">
               <img src={boxSvg} alt="Box Icon" className="w-full h-full object-contain" />
            </div>
            <div className="h-7 flex items-center justify-center">
               <img src={logoSvg} alt="InApp Logo" className="h-full w-auto object-contain" />
            </div>
          </div>
          <h2 className="mt-6 text-lg font-md text-[#333]">Create your account</h2>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-normal text-[#333] mb-2">Full name</label>
            <input 
              type="text" 
              placeholder="Jane Doe"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#e71717] focus:ring-1 focus:ring-[#ec1616] transition-all text-sm placeholder:text-gray-600"/>
          </div>
          <div>
            <label className="block text-sm font-normal text-[#333] mb-2">Email address</label>
            <input 
              type="email" 
              placeholder="name@example.com"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#e71717] focus:ring-1 focus:ring-[#ec1616] transition-all text-sm placeholder:text-gray-600"/>
          </div>
          <div>
            <label className="block text-sm font-normal text-[#333] mb-2">Password</label>
            <input 
              type="password" 
              placeholder="Create a password"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#e71717] focus:ring-1 focus:ring-[#ec1616] transition-all text-sm placeholder:text-gray-600"/>
          </div>
          <div>
            <label className="block text-sm font-normal text-[#333] mb-2">Confirm password</label>
            <input 
              type="password" 
              placeholder="Repeat password"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#e71717] focus:ring-1 focus:ring-[#ec1616] transition-all text-sm placeholder:text-gray-600"/>
          </div>
          <div className="flex items-center gap-2 py-2">
            <input 
              type="checkbox" 
              id="terms" 
              className="w-4 h-4 border-gray-300 rounded accent-[#eb643d] cursor-pointer"/>
            <label htmlFor="terms" className="text-xs text-gray-600 cursor-pointer">
              I agree to the <span className="text-[#eb643d] hover:underline">terms and privacy</span>
            </label>
          </div>
          <button 
            type="submit" 
            className="w-full bg-[#eb643d] hover:bg-[#d55632] text-white font-sm py-2 rounded-lg transition-all mt--1">
            Sign up
          </button>
        </form>
        <p className="text-center text-xs text-gray-500 mt-4">
          Already have an account? <a href="#" className="text-[#eb643d] hover:underline font-medium">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;