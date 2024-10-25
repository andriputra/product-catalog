import { useState } from 'react';
import Image from 'next/image';

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ko', name: '한국어' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-center items-center w-full px-4 py-2 bg-transparent text-sm font-medium text-gray-700 focus:outline-none"
      >
        <Image src='/globe.svg' alt="language" width={25} height={25} className='w-[25px] h-[25px]' />
        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#000000" aria-hidden="true">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      <div className={`absolute right-0 z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-2 pointer-events-none'}`}>
        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          {languages.map((language) => (
            <a
              key={language.code}
              href="#"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              {language.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-6">
        <div className="text-black text-lg font-bold">
          <Image src="/img/logo.png" alt="Logo" width={170} height={28} />
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Menu for larger screens */}
        <ul className="hidden md:flex gap-10 items-center">
          <li><a href="#" className="text-gray-500 hover:text-black">Home</a></li>
          <li><a href="#" className="text-gray-500 hover:text-black">About Us</a></li>
          <li><a href="#" className="text-black menu-active">Product</a></li>
          <li><a href="#" className="text-gray-500 hover:text-black">Partner</a></li>
          <li><a href="#" className="text-gray-500 hover:text-black">Contact Us</a></li>
        </ul>
        <div className="hidden md:flex gap-4 items-center justify-center">
          <LanguageDropdown />
        </div>
      </div>

      {/* Dropdown menu for mobile view */}
      {isMenuOpen && (
        <div className="md:hidden absolute right-0 z-10 w-full">
          <ul className="flex flex-col gap-4 p-4 text-center text-white bg-gray-800">
            <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
            <li><a href="#" className="text-white menu-active">Product</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Partner</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
            <li><LanguageDropdown /></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
