import React from 'react';
import {
  Home,
  User,
  Briefcase,
  Folder,
  Mail,
} from 'lucide-react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="fixed top-0 left-0 h-full w-20 bg-gray-900 text-white flex flex-col justify-center items-center py-6 space-y-3 z-50">

      {/* Home */}
      <Link to="/" className="relative group flex items-center justify-center w-full py-2">
        <Home size={24} className="group-hover:opacity-0 transition duration-200" />
        <span className="absolute text-yellow-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition duration-200">
          Home
        </span>
      </Link>

      {/* About */}
      <a href="/about" className="relative group flex items-center justify-center w-full py-2">
        <User size={24} className="group-hover:opacity-0 transition duration-200" />
        <span className="absolute text-yellow-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition duration-200">
          About
        </span>
      </a>

      {/* Experience */}
      <a href="/experience" className="relative group flex items-center justify-center w-full py-2">
        <Briefcase size={24} className="group-hover:opacity-0 transition duration-200" />
        <span className="absolute text-yellow-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition duration-200">
          Experience
        </span>
      </a>

      {/* Projects */}
      <Link to="/projects" className="relative group flex items-center justify-center w-full py-2">
        <Folder size={24} className="group-hover:opacity-0 transition duration-200" />
        <span className="absolute text-yellow-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition duration-200">
          Projects
        </span>
      </Link>

      {/* Contact */}
      <a href="/contact" className="relative group flex items-center justify-center w-full py-2">
        <Mail size={24} className="group-hover:opacity-0 transition duration-200" />
        <span className="absolute text-yellow-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition duration-200">
          Contact
        </span>
      </a>
    </div>
  );
}

export default Sidebar;
