import React from 'react';

const Product = () => {
  return (
    <div className="p-2 bg-white w-full h-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-lg font-xs text-gray-800 tracking-tight">Add Inventory</h1>
          <p className="text-xs text-gray-700">Manage your inventory items</p>
        </div>
        <button className="bg-[#f05b36] hover:bg-[#f16d4b] text-white px-2 py-2 rounded-lg text-xs font-xs transition-all">
          Go to Inventory List
        </button>
      </div>
      <div className="bg-white p-5 rounded-md border border-gray-200">
        <form className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-xs text-gray-800">Product Name</label>
              <input 
                type="text"
                placeholder="Enter product name"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#e76f51]/20 focus:border-[#e76f51] outline-none transition-all text-sm"/>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-xs text-gray-800">SKU</label>
              <input 
                type="text" 
                placeholder="Enter SKU" 
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#e76f51]/20 focus:border-[#e76f51] outline-none transition-all text-sm"/>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-xs text-gray-800">Price</label>
              <input 
                type="number" 
                placeholder="0.00" 
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#e76f51]/20 focus:border-[#e76f51] outline-none transition-all text-sm"/>
            </div>
            <div className="space-y-2">
              <label className="text-md font-xs text-gray-800">Stock Quantity</label>
              <input 
                type="number" 
                placeholder="0" 
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#e76f51]/20 focus:border-[#e76f51] outline-none transition-all text-sm"/>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-xs text-gray-800">Category</label>
            <select className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#e76f51]/20 focus:border-[#e76f51] outline-none transition-all text-sm appearance-none bg-no-repeat bg-right_1rem_center cursor-pointer">
              <option value="">Select category</option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-xs text-gray-800">Product Image</label>
            <div className="flex items-center w-full border border-gray-300 rounded-lg overflow-hidden">
              <label className="bg-gray-100 px-4 py-2 text-sm font-medium text-gray-600 cursor-pointer border-r border-gray-300 hover:bg-gray-200">
                Choose File
                <input type="file" className="hidden" />
              </label>
              <span className="px-4 text-xs text-gray-400">No file chosen</span>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-xs text-gray-800">Description</label>
            <textarea 
              rows="4" 
              placeholder="Enter product description" 
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#e76f51]/20 focus:border-[#e76f51] outline-none transition-all text-sm resize-none">
              </textarea>
          </div>
          <div className="flex gap-1 pt-1">
            <button type="submit" className="bg-[#dd5c3b] hover:bg-[#d95d3f] text-white px-3 py-1.8 rounded-md text-sm font-xs transition-all">
              Add Product
            </button>
            <button type="reset" className="bg-[#4a4a4a] hover:bg-[#333] text-white px-2 py-1.5 rounded-md text-sm font-xs transition-all">
              Clear
            </button>
          </div>
        </form>
      </div>
      <footer className="mt-12 text-center text-xs text-gray-700 pb-5">
        Copyright © 2026 <span className="text-gray-700 font-xs font-stretch-100% font-Poppins">InApp Inventory Dashboard</span>. Developed by <span className="text-orange-500">CodesCandy</span> • Distributed by <span className="text-orange-500">ThemeWagon</span>
      </footer>
    </div>
  );
}

export default Product;