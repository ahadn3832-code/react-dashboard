import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const data = [
  { name: 'Jan', thisYear: 30000, lastYear: 25000 },
  { name: 'Feb', thisYear: 45000, lastYear: 38000 },
  { name: 'Mar', thisYear: 35000, lastYear: 36000 },
  { name: 'Apr', thisYear: 52000, lastYear: 48000 },
  { name: 'May', thisYear: 62000, lastYear: 55000 },
  { name: 'Jun', thisYear: 58000, lastYear: 54000 },
  { name: 'Jul', thisYear: 65000, lastYear: 60000 },
  { name: 'Aug', thisYear: 75000, lastYear: 68000 },
  { name: 'Sep', thisYear: 68000, lastYear: 69000 },
  { name: 'Oct', thisYear: 78000, lastYear: 72000 },
  { name: 'Nov', thisYear: 85000, lastYear: 80000 },
  { name: 'Dec', thisYear: 95000, lastYear: 88000 },
];

const StatCard = ({ title, value, trend, isUp }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-200">
    <p className="text-sm text-gray-500 mb-1">{title}</p>
    <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
    <p className={`text-xs mt-2 flex items-center ${isUp ? 'text-green-500' : 'text-red-500'}`}>
      {isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
      <span className="ml-1">{trend} from last month</span>
    </p>
  </div>
);

const Reports = () => {
  const products = [
    { 
      name: 'Gaming Joy Stick', 
      sold: '768 units sold', 
      price: '$2,120', 
      img: 'https://themewagon.github.io/inapp/assets/images/product-1.png'
    },
    { 
      name: 'Wireless Headphones', 
      sold: '154 units sold', 
      price: '$2,650', 
      img: 'https://themewagon.github.io/inapp/assets/images/product-2.png' 
    },
    { 
      name: 'Smartwatch', 
      sold: '86 units sold', 
      price: '$1,990', 
      img: 'https://themewagon.github.io/inapp/assets/images/product-3.png' 
    },
  ];

  return (
    <div className="p-1 bg-white min-h-screen font-sans">
        <p className="text-2xl font-xs text-black">Reports</p>
      <p className="text-sm text-gray-800 mb-6">View your inventory analytics and reports</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Revenue" value="$45,231" trend="12%" isUp={true} />
        <StatCard title="Products Sold" value="1,234" trend="8%" isUp={true} />
        <StatCard title="Low Stock Items" value="23" trend="2%" isUp={false} />
        <StatCard title="Out of Stock" value="5" trend="2%" isUp={false} />
      </div>
      <div className="bg-white p-6 rounded-xl border border-gray-200 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-xs font-Poppins text-gray-800">Sales Overview</h3>
          <div className="flex gap-2">
            <button className="px-4 py-1 text-xs  bg-gray-200 rounded-sm hover:bg-gray-100 transition cursor-pointer">Randomize Data</button>
            <button className="px-4 py-1.5 text-xs bg-[#e6643d] text-white rounded-sm hover:bg-red-600 transition cursor-pointer">Show This Year Only</button>
          </div>
        </div>
        <div style={{ height: '400px' }} className="w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorThis" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f97316" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorLast" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9ca3af'}} />
              <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9ca3af'}} tickFormatter={(value) => `$${value}`} />
              <Tooltip cursor={{ stroke: '#f97316', strokeWidth: 1 }} />
              <Area type="monotone" dataKey="thisYear" stroke="#f97316" strokeWidth={3} fillOpacity={1} fill="url(#colorThis)" />
              <Area type="monotone" dataKey="lastYear" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorLast)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl border border-gray-200 cursor-pointer">
        <h3 className="text-lg font-bold text-gray-800 mb-6">Top Products</h3>
        <div className="space-y-6">
          {products.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between pb-4 border-b border-gray-200 last:border-0">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg overflow-hidden border border-gray-200">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.sold}</p>
                </div>
              </div>
              <p className="font-bold text-gray-800">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
      <footer className="mt-12 text-center text-xs text-gray-700 pb-5">
        Copyright © 2026 <span className="text-gray-700 font-xs font-stretch-100% font-Poppins">InApp Inventory Dashboard</span>. Developed by <span className="text-orange-500">CodesCandy</span> • Distributed by <span className="text-orange-500">ThemeWagon</span>
      </footer>
    </div>
  );
};

export default Reports;