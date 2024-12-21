import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);
  
    const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
    };
  
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
  
    React.useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <nav className='flex justify-evenly items-center p-4 transition-all duration-300  text-white sticky top-20 z-10'>
      
      {/* Navigation Links */}
      <div className="flex space-x-6 gap-4 ">
        <a href="#home" className="hover:text-[#7193f1] transition ease-in text-xl font-bold">Home</a>
        <a href="#projects" className="hover:text-[#7193f1]   transition text-xl font-bold">Projects</a>
        <a href="#your-projects" className="hover:text-[#7193f1]  transition text-xl font-bold">Your Projects</a>
        <a href="#investment-history" className="hover:text-[#7193f1]  transition text-xl font-bold">Investment History</a>
      </div>

      {/* Dynamic Search Bar */}
      <div className="flex items-center space-x-2 bg-white rounded px-2 py-1 text-gray-800 focus-within:ring-2 focus-within:ring-purple-500">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="px-2 py-1 bg-transparent focus:outline-none"
        />
      </div>
    </nav>
  );
};

export default Navbar;