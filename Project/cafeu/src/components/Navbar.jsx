import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import menu_icon from '../assets/menu-icon.png';

const Navbar = () => {
  const [menu, setMenu] = useState('menu');
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <div
      className={`${
        sticky ? 'bg-white shadow-lg transition' : ''
      } z-50 w-full pt-4 pb-3 fixed top-0 left-0 flex justify-between items-center text-secondary-light`}>
      
      {/* Logo */}
      <Link  className="pl-20 text-xl font-bold select-none cursor-pointer" 
            style={{ fontFamily: "'Apple Chancery', sans-serif" }}
            to="home"
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => setMenu('home')}>
        Cafeu
      </Link>

      {/* Navbar Items */}
      <div className="pr-10 relative">
        {/* Desktop Menu */}
        <ul className={`hidden md:flex gap-8 text-sm select-none`}>
          <li>
            <Link
              to="home"
              smooth={true}
              offset={0}
              duration={500}
              className={`${
                menu === 'home' ? 'text-primary font-bold' : ''
              } text-hover transition duration-300 cursor-pointer`}
              onClick={() => setMenu('home')}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              offset={0}
              duration={500}
              className={`${
                menu === 'about' ? 'text-primary font-bold' : ''
              } text-hover transition duration-300 cursor-pointer`}
              onClick={() => setMenu('about')}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="menu"
              smooth={true}
              offset={0}
              duration={500}
              className={`${
                menu === 'menu' ? 'text-primary font-bold' : ''
              } text-hover transition duration-300 cursor-pointer`}
              onClick={() => setMenu('menu')}
            >
              Menu
            </Link>
          </li>
          <li>
            <a
              href="#"
              className={`${
                menu === 'blog' ? 'text-primary font-bold' : ''
              } text-hover transition duration-300 cursor-pointer`}
              onClick={() => setMenu('blog')}
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`${
                menu === 'page' ? 'text-primary font-bold' : ''
              } text-hover transition duration-300 cursor-pointer`}
              onClick={() => setMenu('page')}
            >
              Page
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`${
                menu === 'services' ? 'text-primary font-bold' : ''
              } text-hover transition duration-300 cursor-pointer`}
              onClick={() => setMenu('services')}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`${
                menu === 'contact' ? 'text-primary font-bold' : ''
              } text-hover transition duration-300 cursor-pointer`}
              onClick={() => setMenu('contact')}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu */}
        <ul
          className={`bg-white fixed top-14 right-0 w-1/4 h-screen shadow-lg flex flex-col items-start gap-8 px-8 py-4 text-sm transition-all duration-300 ease-in-out md:hidden ${
            mobileMenu ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <li>
            <Link
              to="home"
              smooth={true}
              offset={0}
              duration={500}
              className="text-hover transition duration-300 cursor-pointer"
              onClick={() => {
                setMenu('home');
                setMobileMenu(false);
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              offset={0}
              duration={500}
              className="text-hover transition duration-300 cursor-pointer"
              onClick={() => {
                setMenu('about');
                setMobileMenu(false);
              }}
            >
              About
            </Link>
          </li>
          {/* Add other links similarly */}
        </ul>

        {/* Hamburger Icon */}
        <img
          className="opacity-80 cursor-pointer w-6 h-6 md:hidden absolute right-4"
          style={{ top: '-.5rem' }}
          src={menu_icon}
          alt="Menu Icon"
          onClick={toggleMenu}
        />
      </div>
    </div>
  );
};

export default Navbar;
