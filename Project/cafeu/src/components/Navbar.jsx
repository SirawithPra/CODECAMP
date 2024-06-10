import React, { useState , useEffect} from 'react'
import { Link } from 'react-scroll'
import menu_icon from '../assets/menu-icon.png'


const Navbar = () => {

    const [menu,setMenu] = useState('menu');
    const [sticky,setSticky] = useState(false);
    

    useEffect(() => {
        window.addEventListener('scroll',()=>{
            window.scrollY > 10? setSticky(true) : setSticky(false);
        });
    },[]);

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = ()=>{
      mobileMenu? setMobileMenu(false): setMobileMenu(true);
  }

  return (
    <div className={`${sticky? "bg-white shadow-lg transition":""} z-50 w-full pt-4 pb-3 fixed top-0 left-0 flex justify-between items-center  text-secondary-light`}>
      <div className="pl-20 text-xl font-bold select-none cursor-pointer"
      style={{fontFamily: "'Apple Chancery', sans-serif"}}>Cafeu
      </div>
      <div className='pr-10 relative'>
        <ul className={`bg-white h-full text-left md:h-auto transition-all duration-1.5 ease-in-out ${mobileMenu ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"} fixed right-0 top-14 gap-8 md:top-5 md:flex md:pr-20 text-sm select-none md:translate-x-0`}>
            <li><Link to="home" smooth={true} offset={0} deration={500}
            className="text-hover transition duration-300  cursor-pointer px-5 md:px-0"
            onClick={()=>{setMenu('home'),setMobileMenu(false)}}>Home</Link></li>
            <li><Link to="about" smooth={true} offset={0} deration={500}
            className="text-hover transition duration-300 cursor-pointer  px-5 md:px-0" 
            onClick={()=>{setMenu('about'),setMobileMenu(false)}}>About</Link></li>
            <li><a href="#" 
            className="text-hover transition duration-300 cursor-pointer  px-5 md:px-0" 
            onClick={()=>setMenu('menu')}>Menu</a></li>
            <li><a href="#" 
            className="text-hover transition duration-300 cursor-pointer  px-5 md:px-0" 
            onClick={()=>setMenu('blog')}>Blog</a></li>
            <li><a href="#" 
            className="text-hover transition duration-300 cursor-pointer  px-5 md:px-0" 
            onClick={()=>setMenu('page')}>Page</a></li>
            <li><a href="#" 
            className="text-hover transition duration-300 cursor-pointer  px-5 md:px-0"
            onClick={()=>setMenu('services')}>Services</a></li>
            <li><a href="#" 
            className="text-hover transition duration-300 cursor-pointer  px-5 md:px-0"
            onClick={()=>setMenu('contact')}>Contact</a></li>
        </ul>
        <img className="opacity-80 cursor-pointer w-6 h-6 md:hidden absolute -top-3 right-4" src={menu_icon} alt="" onClick={toggleMenu}/>
      </div>

    </div>
  )
}

export default Navbar
