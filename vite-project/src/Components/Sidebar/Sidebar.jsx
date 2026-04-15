import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, Box, Plus, FileText, AlertCircle, Lock, UserPlus } from 'lucide-react'

const Sidebar = ({ isCollapsed }) => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <aside
            className={`fixed inset-y-0 left-0 bg-white border-r border-gray-200 h-screen p-3 z-40 overflow-y-auto custom-scrollbar transition-all duration-300 
            ${isCollapsed ? 'w-20' : 'w-56'}`}>
            <div className="h-16"></div>
            <nav className="space-y-6">
                <div>
                    <h2 className={`text-xs font-Poppins text-gray-700 uppercase tracking-wide mb-3 ml-2 transition-opacity duration-200 
                        ${isCollapsed ? 'opacity-0 invisible' : 'opacity-100'}`}>
                        Main
                    </h2>
                    <ul className="space-y-1">
                        <NavItem to="/" icon={<Home />} label="Dashboard" isActive={isActive('/')} isCollapsed={isCollapsed} />
                        <NavItem to="/inventory" icon={<Box />} label="Inventory" isActive={isActive('/inventory')} isCollapsed={isCollapsed} />
                        <NavItem to="/Product" icon={<Plus />} label="Product" isActive={isActive('/Product')} isCollapsed={isCollapsed} />
                        <NavItem to="/Reports" icon={<FileText />} label="Reports" isActive={isActive('/Reports')} isCollapsed={isCollapsed} />
                        <NavItem to="404 Error" icon={<AlertCircle />} label="404 Error" isCollapsed={isCollapsed} isExternal />
                        <NavItem to="/Doc" icon={<FileText />} label="Doc" isActive={isActive('/Doc')} isCollapsed={isCollapsed} />
                    </ul>
                </div>
                <div>
                    <h2 className={`text-xs font-Poppins text-gray-800 uppercase tracking-wide mb-2 ml-2 transition-opacity duration-200 
                    ${isCollapsed ? 'opacity-0 invisible' : 'opacity-100'}`}>
                        Account
                    </h2>
                    <ul className="space-y-1">
                        <NavItem to="/Login" icon={<Lock />} label="Login" isActive={isActive('/Login')} isCollapsed={isCollapsed}/>
                        <NavItem to="/Signup" icon={<UserPlus/>} label="Sign up" isActive={isActive('/Signup')} isCollapsed={isCollapsed} />
                    </ul>
                </div>
            </nav>
        </aside>
    )
}
const NavItem = ({ to, icon, label, isActive, isCollapsed, isExternal = false }) => {
    const content = (
        <div className={`flex items-center px-2 py-2 text-sm rounded-lg transition-colors ${isActive ? 'bg-red-100 text-red-400' : 'text-gray-700 hover:bg-gray-100'
            }`}>
            <div className="w-5 h-5 flex items-center justify-center shrink-0">
                {React.cloneElement(icon, { className: "w-4 h-4" })}
            </div>
            <span className={`ml-3 whitespace-nowrap transition-all duration-300 overflow-hidden 
                ${isCollapsed ? 'w-0 opacity-0' : 'w-auto opacity-100'}`}>
                {label}
            </span>
        </div>
    );
    return (
        <li>
            {isExternal ? <a href={to}>{content}</a> : <Link to={to}>{content}</Link>}
        </li>
    );
};

export default Sidebar;