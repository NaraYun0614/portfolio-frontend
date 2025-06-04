import React from 'react';
import {
  Home,
  User,
  Briefcase,
  Folder,
  Mail,
} from 'lucide-react';

function Sidebar() {
    return(
        <div className="fixed top-0 left-0 h-full w-20 bg-gray-900 text-white flex flex-col justify-center items-center py-6 space-y-6 z-50">
            <a href="/home" title="Home" className="hover:text-yellow-400">
                <Home size={24}/>
            </a>
            <a href="/about" title="About" className="hover:text-yellow-400">
                <User size={24}/>
            </a>
            <a href="/experience" title="Experince" className="hover:text-yellow-400">
                <Briefcase size={24}/>
            </a>
            <a href="/projects" title="Projects" className="hover:text-yellow-400">
                <Folder size={24}/>
            </a>
            <a href="/contact" title="Contact" className="hover:text-yellow-400">
                <Mail size={24}/>
            </a>
        </div>
    );
}

export default Sidebar;