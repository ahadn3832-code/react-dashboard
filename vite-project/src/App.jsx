import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import Dashboard from './Components/Dashboard/Dashboard'
import Inventory from './Components/Inventory/Inventory'
import Product from './Components/Product/Product'
import Reports from './Components/Reports/Reports'
import Error from './Components/Error/Error'
import Doc from './Components/Doc/Doc'
import Login from './Components/Accounts/Login/Login'
import Signup from './Components/Accounts/Signup/Signup'

const AppContent = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const isLoginPage = location.pathname === '/Login' || location.pathname === '/Signup';

  if (isLoginPage) {
    return (
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    );
  }
  return (
    <div className="min-h-screen flex flex-col font-Poppins">
      <Navbar onToggle={() => setIsCollapsed(!isCollapsed)} />
      <div className="flex flex-1">
        <Sidebar isCollapsed={isCollapsed} />
        <main 
          className={`flex-1 bg-white min-h-screen p-6 overflow-y-auto transition-all duration-300 
            ${isCollapsed ? 'ml-20' : 'ml-56'}`}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/Reports" element={<Reports />} />
            <Route path="/Doc" element={<Doc />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App;