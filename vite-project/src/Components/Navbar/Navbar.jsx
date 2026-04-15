import React from 'react'
import logo from '../../assets/logo.svg'   
import box from '../../assets/box.svg'
import { Bell, PanelLeft } from 'lucide-react' 

const Navbar = ({ onToggle }) => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 w-full font-Poppins">
      <div className="max-w-9xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-25">
            <div className="flex items-center">
              <img src={box} alt="Box icon" className="h-8 w-auto mr-2" />
              <img src={logo} alt="InApp Logo" className="h-8 w-auto" />
            </div>
            <button 
              onClick={onToggle}
              className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-all duration-200 border border-gray-100 shadow-sm"
              title="Toggle Sidebar">
              <PanelLeft size={20} strokeWidth={2.5} />
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative text-gray-600 hover:text-gray-800 focus:outline-none bg-gray-100 rounded-full p-2 transition-colors">
              <Bell size={22} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full px-1.5 py-0.5 border-2 border-white">
                2
              </span>
            </button>
            <div className="flex items-center cursor-pointer group">
              <img
                src="https://themewagon.github.io/inapp/assets/images/avatar-1.jpg"
                alt="User avatar"
                className="h-9 w-9 rounded-full border border-gray-200 group-hover:border-indigo-400 transition-all"/>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar