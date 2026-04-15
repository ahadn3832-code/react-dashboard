import React from 'react'
import { Clipboard, Repeat, DollarSign, FileText, Copy, CreditCard, BanknoteArrowDown, TrendingUp, Users, ShoppingCart, Truck, ArrowUpRight, Calendar, ArrowUpLeft } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const stats = [
  { id: 1, title: 'Total Sales', value: '$25,000', percent: '+5% since last month', colorClass: 'text-red-500', border: 'border-red-200', icon: <Clipboard className="w-6 h-6 text-white" />, iconBg: 'bg-red-500', bg: 'bg-red-50' },
  { id: 2, title: 'Total Purchase', value: '$18,000', percent: '+22% since last month', colorClass: 'text-green-500', border: 'border-green-300', icon: <Repeat className="w-6 h-6 text-white" />, iconBg: 'bg-green-500', bg: 'bg-green-100' },
  { id: 3, title: 'Total Expenses', value: '$9,000', percent: '+10% since last month', colorClass: 'text-blue-500', border: 'border-sky-300', icon: <DollarSign className="w-6 h-6 text-white" />, iconBg: 'bg-blue-500', bg: 'bg-sky-100' },
  { id: 4, title: 'Invoice Due', value: '$25,000', percent: '+35% since last month', colorClass: 'text-yellow-500', border: 'border-orange-200', icon: <FileText className="w-6 h-6 text-white" />, iconBg: 'bg-yellow-500', bg: 'bg-orange-50' },
]

const whiteStats = [
  { id: 5, title: 'Total Profit', value: '$25,458', percentValue: '+35%', percentLabel: 'vs Last Month', colorClass: 'text-green-500', border: 'border-gray-200', icon: <Copy className="w-6 h-6 text-red-600 " />, bg: 'bg-white' },
  { id: 6, title: 'Total Payment Returns', value: '$45,458', percentValue: '-20%', percentLabel: 'vs Last Month', colorClass: 'text-red-500', border: 'border-gray-200', icon: <CreditCard className="w-6 h-6 text-red-600" />, bg: 'bg-white' },
  { id: 7, title: 'Total Expenses', value: '$34,458', percentValue: '-20%', percentLabel: 'vs Last Month', colorClass: 'text-yellow-500', border: 'border-gray-200', icon: <BanknoteArrowDown className="w-6 h-6 text-orange-400" />, bg: 'bg-white' },
]

const topSelling = [
  { name: "Wireless Earphones", price: "$89", units: "1,250 Units", badge: "18%", color: "text-red-500 bg-red-50 border-red-400", img: "https://themewagon.github.io/inapp/assets/images/product-2.png" },
  { name: "Gaming Joy Stick", price: "$49", units: "5,420 Units", badge: "32%", color: "text-orange-600 bg-orange-50 border-orange-400", img: "https://themewagon.github.io/inapp/assets/images/product-1.png" },
  { name: "Smart Watch Pro", price: "$98", units: "862 Units", badge: "22%", color: "text-cyan-500 bg-cyan-50 border-cyan-400", img: "https://themewagon.github.io/inapp/assets/images/product-3.png" },
  { name: "USB-C Fast Charger", price: "$35", units: "3,200 Units", badge: "28%", color: "text-green-500 bg-green-50 border-green-400", img: "https://themewagon.github.io/inapp/assets/images/product-4.png" },
  { name: "Portable Bluetooth Speaker", price: "$65", units: "2,890 Units", badge: "25%", color: "text-yellow-600 bg-yellow-50 border-yellow-400", img: "https://themewagon.github.io/inapp/assets/images/product-5.png" },

];

const lowStock = [
  { name: "Wireless Headphones", id: "#554433", stock: "06", img: "https://themewagon.github.io/inapp/assets/images/product-8.png" },
  { name: "USB-C Cable Pack", id: "#887766", stock: "09", img: "https://themewagon.github.io/inapp/assets/images/product-4.png" },
  { name: "Phone Screen Protector", id: "#332211", stock: "03", img: "https://themewagon.github.io/inapp/assets/images/product-10.png" },
  { name: "Portable Charger", id: "#998877", stock: "07", img: "https://themewagon.github.io/inapp/assets/images/product-4.png" },
  { name: "Mechanical Keyboard", id: "#665544", stock: "02", img: "https://themewagon.github.io/inapp/assets/images/product-6.png" },

];

const recentSales = [
  { name: "MacBook Pro 16\"", cat: "Computers", price: "$2,499", status: "Completed", color: "bg-green-100 text-green-600", img: "https://themewagon.github.io/inapp/assets/images/product-7.png" },
  { name: "AirPods Pro Max", cat: "Audio", price: "$549", status: "Processing", color: "bg-orange-100 text-orange-600", img: "https://themewagon.github.io/inapp/assets/images/product-9.png" },
  { name: "iPad Air 11\"", cat: "Tablets", price: "$799", status: "Completed", color: "bg-green-100 text-green-600", img: "https://themewagon.github.io/inapp/assets/images/product-8.png" },
  { name: "Apple Watch Ultra", cat: "Wearables", price: "$799", status: "Pending", color: "bg-yellow-100 text-yellow-600", img: "https://themewagon.github.io/inapp/assets/images/product-3.png" },
  { name: "Magic Keyboard", cat: "Accessories", price: "$299", status: "Cancelled", color: "bg-red-100 text-red-600", img: "https://themewagon.github.io/inapp/assets/images/product-6.png" },
];

const chartData = [
  { name: '28 Jan', sales: 42, purchase: 75 },
  { name: '29 Jan', sales: 55, purchase: 85 },
  { name: '30 Jan', sales: 58, purchase: 100 },
  { name: '31 Jan', sales: 55, purchase: 98 },
  { name: '1 Feb', sales: 60, purchase: 88 },
  { name: '2 Feb', sales: 58, purchase: 105 },
  { name: '3 Feb', sales: 62, purchase: 90 },
  { name: '4 Feb', sales: 60, purchase: 115 },
  { name: '5 Feb', sales: 65, purchase: 95 },
];

const Dashboard = () => {
  return (
    <div className="p-1 bg-white min-h-screen">
      <h1 className="text-2xl font-lg font-Poppins mb-1 text-black">Dashboard</h1>
      <h6 className="mt-0 mb-10 text-sm font-Poppins text-gray-800">Your main content goes here…</h6>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div key={item.id} className={`${item.bg} rounded-md p-6 flex items-center space-x-4 border ${item.border}`}>
            <div className={`p-2 ${item.iconBg} rounded-md mb-8`}>{item.icon}</div>
            <div>
              <p className="text-sm font-sans text-gray-800 mb-1">{item.title}</p>
              <p className="text-2xl font-bold font-Poppins text-gray-800">{item.value}</p>
              <p className={`text-xs ${item.colorClass} mt-1 font-medium`}>{item.percent}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 mt-6">
        {whiteStats.map((item) => (
          <div key={item.id} className={`${item.bg} rounded-md p-6 border ${item.border} `}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-2xl font-bold font-Poppins text-gray-800 mb-2">{item.value}</p>
                <p className="text-xs font-sans text-gray-900 uppercase tracking-wide mb-4">{item.title}</p>
              </div>
              <div className="p-2 rounded-lg">{item.icon}</div>
            </div>
            <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
              <p className="text-xs">
                <span className={`${item.colorClass} font-bold mr-1`}>{item.percentValue}</span>
                <span className="text-gray-400">{item.percentLabel}</span>
              </p>
              <a href="#" className="text-xs font-semibold text-red-500 underline">View</a>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-4 -mx-6 px-6">
            <h3 className="text-lg font-lg font-stretch-100% text-gray-800">Sales vs Purchase</h3>
            <select className="text-xs border font-sans border-gray-300 rounded-md px-4 py-1.5  text-gray-800">
              <option>This Year</option>
              <option>This Month</option>
              <option>This week</option>
            </select>
          </div>
          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#9ca3af' }} dy={15} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#9ca3af' }} tickFormatter={(value) => `${value}k`} />
                <Tooltip cursor={{ fill: '#f9fafb' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Legend iconType="circle" align="center" verticalAlign="bottom" wrapperStyle={{ paddingTop: '30px', fontSize: '12px' }} />
                <Bar dataKey="sales" fill="#f87171" radius={[4, 4, 0, 0]} name="Sales" barSize={18} />
                <Bar dataKey="purchase" fill="#f97316" radius={[4, 4, 0, 0]} name="Purchase" barSize={18} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-4 -mx-6 px-6">
              <h3 className="text-lg font-lg font-stretch-100% text-gray-800">Overall Information</h3>
              <select className="text-xs border font-sans border-gray-300 rounded-md px-4 py-1.5  text-gray-800">
                <option>Last 6 Month</option>
                <option>This Month</option>
                <option>This week</option>
              </select>
            </div>
            <p className="text-sm text-gray-700 font-xs mb-10">Customers Overview</p>
            <div className="flex flex-row items-center justify-between px-2">
              <div className="relative w-36 h-36 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="72" cy="72" r="63" stroke="#f3f4f6" strokeWidth="10" fill="transparent" />
                  <circle cx="72" cy="72" r="48" stroke="#f3f4f6" strokeWidth="10" fill="transparent" />
                  <circle cx="72" cy="72" r="62" stroke="#10b981" strokeWidth="10" fill="transparent" strokeDasharray="300" strokeDashoffset="100" strokeLinecap="round" />
                  <circle cx="72" cy="72" r="45" stroke="#f97316" strokeWidth="10" fill="transparent" strokeDasharray="300" strokeDashoffset="135" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <p className="text-3xl font-xs text-gray-800 mb-1">5.5K</p>
                  <p className="text-md text-emerald-500 font-xs mb-4">First Time</p>
                  <span className="bg-green-500 text-white text-[10px] font-extrabold px-2 py-1 rounded flex items-center gap-1 justify-center">
                    <ArrowUpLeft size={12} strokeWidth={3} /> 25%
                  </span>
                </div>
                <div className="w-px h-20 bg-gray-300"></div>
                <div className="text-center">
                  <p className="text-3xl font-xs text-gray-800 mb-1">3.5K</p>
                  <p className="text-md text-amber-500 font-xs mb-4">Return</p>
                  <span className="bg-green-500 text-white text-[10px] font-extrabold px-2 py-1 rounded flex items-center gap-1 justify-center">
                    <ArrowUpLeft size={12} strokeWidth={3} /> 21%
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="-mx-6 border-t border-gray-200 pt-6 grid grid-cols-3 mt-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-800">6987</p>
              <p className="text-[11px] text-gray-500 font-semibold uppercase mt-2">Suppliers</p>
            </div>
            <div className="text-center border-x border-gray-300">
              <p className="text-2xl font-bold text-gray-800">4896</p>
              <p className="text-[11px] text-gray-500 font-semibold uppercase mt-2">Customers</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-800">487</p>
              <p className="text-[11px] text-gray-500 font-semibold uppercase mt-2">Orders</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <div className="bg-white p-5 rounded-xl border border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-Extrabold font-stretch-100% font-Poppins">Top Selling Products</h2>
            <button className="border border-gray-600 px-3 py-1 rounded-sm text-xs flex items-center gap-2 text-gray-500"><Calendar size={14} /> Today</button>
          </div>
          <div className="border-b border-gray-200 -mx-5 mb-2"></div>
          <div className="space-y-4">
            {topSelling.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between border-b border-gray-200 pb-3 mb-3 last:border-0 last:pb-0 last:mb-0 -mx-4 px-4 hover:bg-gray-50/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-md overflow-hidden shrink-0">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[13px] text-gray-800 leading-none mb-1">{item.name}</h3>
                    <p className="text-[11px] text-gray-500">{item.price} • {item.units}</p>
                  </div>
                </div>
                <span className={`text-[10px] font-bold px-2 py-1 rounded border ${item.color}`}>
                  {item.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-Extrabold font-stretch-100% font-Poppins">Low Stock Products</h2>
            <a href="#" className="text-red-500 text-xs font-semibold underline">View All</a>
          </div>
          <div className="border-b border-gray-200 -mx-5 mb-2"></div>
          <div className="space-y-4">
            {lowStock.map((item, i) => (
              <div key={i} className="flex items-center justify-between border-b border-gray-200 pb-3 mb-3 last:border-0 last:pb-0 last:mb-0 -mx-4 px-4 hover:bg-gray-50/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg overflow-hidden shrink-0">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xs text-gray-800">{item.name}</h3>
                    <p className="text-[10px] text-gray-400 uppercase">ID: {item.id}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-base font-bold text-orange-600 leading-none">{item.stock}</p>
                  <p className="text-[9px] text-gray-400 uppercase">In Stock</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-Extrabold font-stretch-100% font-Poppins">Recent Sales</h2>
            <button className="border border-gray-700 px-3 py-1 rounded-sm text-xs flex items-center gap-2 text-gray-500"><Calendar size={14} />Weekly</button>
          </div>
          <div className="border-b border-gray-200 -mx-5 mb-2"></div>
          <div className="space-y-4">
            {recentSales.map((item, i) => (
              <div key={i} className="flex items-center justify-between border-b border-gray-200 pb-3 mb-3 last:border-0 last:pb-0 last:mb-0 -mx-4 px-4 hover:bg-gray-50/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg overflow-hidden">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xs text-gray-800">{item.name}</h3>
                    <p className="text-[10px] text-gray-500">{item.cat} • {item.price}</p>
                  </div>
                </div>
                <span className={`text-[9px] font-bold px-2 py-1 rounded-full ${item.color}`}>{item.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className="mt-12 text-center text-xs text-gray-700 pb-5">
        Copyright © 2026 <span className="text-gray-700 font-xs font-stretch-100% font-Poppins">InApp Inventory Dashboard</span>. Developed by <span className="text-orange-500">CodesCandy</span> • Distributed by <span className="text-orange-500">ThemeWagon</span>
      </footer>

    </div>

  )

}



export default Dashboard