import React from 'react';
import { Search, Filter, FileSpreadsheet, FileText, Edit, Trash2 } from 'lucide-react';

const Inventory = () => {
    const products = [
        { id: 1, name: "Gaming Joy Stick", code: "PRD001", category: "Electronics", brand: "Brand Name", price: "$99.99", unit: "pcs", quantity: 150, img: "https://themewagon.github.io/inapp/assets/images/product-1.png" },
        { id: 2, name: "Wireless Earphones", code: "PRD002", category: "Electronics", brand: "Tech Pro", price: "$89.99", unit: "pcs", quantity: 320, img: "https://themewagon.github.io/inapp/assets/images/product-2.png" },
        { id: 3, name: "Smart Watch Pro", code: "PRD003", category: "Electronics", brand: "Tech Pro", price: "$98.00", unit: "pcs", quantity: 200, img: "https://themewagon.github.io/inapp/assets/images/product-3.png" },
        { id: 4, name: "USB-C Fast Charger", code: "PRD004", category: "Electronics", brand: "Tech Pro", price: "$86.00", unit: "pcs", quantity: 80, img: "https://themewagon.github.io/inapp/assets/images/product-4.png" },
        { id: 5, name: "Portable Bluetooth Speaker", code: "PRD005", category: "Electronics", brand: "Tech Pro", price: "$32.00", unit: "pcs", quantity: 110, img: "https://themewagon.github.io/inapp/assets/images/product-5.png" },
        { id: 6, name: "Magic Keyboard", code: "PRD006", category: "Electronics", brand: "Tech Pro", price: "$49.00", unit: "pcs", quantity: 10, img: "https://themewagon.github.io/inapp/assets/images/product-6.png" },
        { id: 7, name: "MacBook Pro 16\"", code: "PRD007", category: "Electronics", brand: "Tech Pro", price: "$99.00", unit: "pcs", quantity: 10, img: "https://themewagon.github.io/inapp/assets/images/product-7.png" },
        { id: 8, name: "Wireless Earphones", code: "PRD008", category: "Electronics", brand: "Tech Pro", price: "$109.00", unit: "pcs", quantity: 200, img: "https://themewagon.github.io/inapp/assets/images/product-8.png" },
    ];

    return (
        <div className="w-full">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h1 className="text-2xl font-xs text-gray-800">Inventory</h1>
                    <p className="text-sm font-xs text-gray-800">Manage your product inventory</p>
                </div>
                <button className="bg-[#e45531] hover:bg-[#d65f42] text-white px-4 py-2 rounded-md text-sm font-xs transition-colors cursor-pointer">
                    Add Product
                </button>
            </div>
            <div className="flex justify-between items-center mb-4 gap-4">
                <div className="relative flex-1 max-w-sm">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full border border-gray-300 rounded-md py-2 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-red-300"/>
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center gap-1 border border-gray-500 px-2 py-1.5 rounded-md text-sm text-gray-600 hover:bg-gray-200 cursor-pointer">
                        <Filter size={16} /> Filter
                    </button>
                    <button className="flex items-center gap-1 border border-gray-500 px-2 py-1.5 rounded-md text-sm text-gray-600 hover:bg-gray-200 cursor-pointer">
                        <FileSpreadsheet size={16} /> Excel
                    </button>
                    <button className="flex items-center gap-1 border border-gray-500 px-2 py-1.5 rounded-md text-sm text-gray-600 hover:bg-gray-200 cursor-pointer">
                        <FileText size={16} /> PDF
                    </button>
                </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-100 border-b border-gray-100 text-gray-600 text-xs">
                            <th className="py-3 px-3 font-medium">Image</th>
                            <th className="py-3 px-4 font-medium">Code</th>
                            <th className="py-3 px-4 font-medium">Category</th>
                            <th className="py-3 px-4 font-medium">Brand</th>
                            <th className="py-3 px-4 font-medium">Price</th>
                            <th className="py-3 px-4 font-medium">Unit</th>
                            <th className="py-3 px-4 font-medium">Quantity</th>
                            <th className="py-3 px-4 font-medium text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-xs text-gray-700">
                        {products.map((item) => (
                            <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                <td className="py-3 px-2">
                                    <div className="flex items-center gap-3">
                                        <img src={item.img} alt={item.name} className="w-10 h-10 rounded border border-gray-200 object-cover" />
                                        <span className="font-medium text-gray-600">{item.name}</span>
                                    </div>
                                </td>
                                <td className="py-3 px-4 text-black">{item.code}</td>
                                <td className="py-3 px-4 text-black">{item.category}</td>
                                <td className="py-3 px-4 text-black">{item.brand}</td>
                                <td className="py-3 px-4 font-xs text-black">{item.price}</td>
                                <td className="py-3 px-4 text-black">{item.unit}</td>
                                <td className="py-3 px-4 text-black">{item.quantity}</td>
                                <td className="py-3 px-4">
                                    <div className="flex justify-center gap-3">
                                        <button className="text-gray-700 hover:text-blue-500"><Edit size={13} /></button>
                                        <button className="text-red-500 hover:text-red-500"><Trash2 size={13} /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="border border-gray-200 rounded-b-xl border-t-0 p-2 flex justify-between items-center bg-white">
                <p className="text-sm text-black font-xs">Showing product per page</p>
                <div className="flex items-center gap-1 border border-gray-300">
                    <button className="px-3 py-1  border-gray-300 rounded text-sm font-xs text-gray-700 bg-gray-400 cursor-not-allowed">
                        Previous
                    </button>
                    <button className="px-3 py-1 bg-[#e76f51] text-white rounded text-sm font-semibold">
                        1
                    </button>
                    <button className="px-3 py-1 border border-gray-200 rounded text-sm hover:bg-gray-50 transition-colors">
                        2
                    </button>
                    <button className="px-3 py-1 border border-gray-200 rounded text-sm hover:bg-gray-50 transition-colors">
                        3
                    </button>
                    <button className="px-3 py-1 border border-gray-200 rounded text-sm hover:bg-gray-50 transition-colors">
                        Next
                    </button>
                </div>
            </div>
            <footer className="mt-12 text-center text-xs text-gray-700 pb-5">
        Copyright © 2026 <span className="text-gray-700 font-xs font-stretch-100% font-Poppins">InApp Inventory Dashboard</span>. Developed by <span className="text-orange-500">CodesCandy</span> • Distributed by <span className="text-orange-500">ThemeWagon</span>
      </footer>
        </div>
    );
};

export default Inventory;