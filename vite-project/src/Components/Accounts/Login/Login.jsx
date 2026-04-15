import React from 'react';
import BoxLogo from '../../../assets/box.svg'; 
import InAppText from '../../../assets/logo.svg';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4 font-['Satoshi','Poppins',sans-serif]">
      <div className="w-full max-w-md border border-gray-200 rounded-lg p-8 md:p-12 ">
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-2">
            <img src={BoxLogo} alt="Box" className="w-10 h-10" />
            <img src={InAppText} alt="InApp" className="h-7" />
          </div>
          <h2 className="text-[18px] font-xs text-[#212529] mt-6">
            Sign in to your account
          </h2>
        </div>
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-xs text-[#212529] mb-2">
              Email address
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#eb6238] focus:border-[#eb6238] transition-all placeholder:text-gray-600 text-sm "/>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-xs text-[#212529]">
                Password
              </label>
              <a href="#" className="text-xs text-[#eb6238] hover:underline">
                Forgot Password?
              </a>
            </div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#eb6238] focus:border-[#eb6238] transition-all placeholder:text-gray-600 text-sm"/>
          </div>
          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              className="h-3 w-3 text-[#eb6238] border-gray-200 rounded focus:ring-[#eb6238] accent-[#eb6238]"/>
            <label htmlFor="remember-me" className="ml-2 block text-xs text-[#212529]">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-[#eb6238] text-white font-xs py-2 rounded-md hover:bg-[#d4552f] transition-colors duration-200 mt-2">
            Sign in
          </button>
        </form>
        <div className="text-center mt-5">
          <p className="text-sm text-[#6c757d]">
            Don't have an account?{' '}
            <a href="#" className="text-[#eb6238] font-xs hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;