import React, {useState, useEffect} from 'react'
import picture from '../assets/experience.png'
import icon_5 from '../assets/icon-5.png'
import icon_6 from '../assets/icon-6.png'

const About = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector("#slide_2");
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className='about grid grid-cols-1 md:grid-cols-2 px-20 pt-20'>
            <div id='slide_2' className={`pr-0 md:pr-10 transition-all duration-1.5 ease-in-out 
            ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}>
                <img src={picture} alt="" />
            </div>
            <div id='slide_2' className={`text-left pt-10 px-4 pl-0 md:pl-10 text-secondary transition-all duration-1.5 ease-in-out 
            ${isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}>
                <h2 className="text-primary font-medium"
                    style={{ fontFamily: "'Apple Chancery', sans-serif" }}>About Us</h2>
                <h2 className='text-3xl font-semibold py-5'>Why We Are The Best</h2>
                <p className='text-gray-600 text-xs'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi odio neque possimus placeat suscipit perferendis consequatur laborum provident facere labore dolorem molestiae iure ut sit, dicta voluptatibus dolores atque cupiditate? Dolores, cum, cupiditate voluptas atque quis delectus eaque perspiciatis est quas temporibus unde itaque architecto blanditiis aliquid neque accusamus quasi?</p>
                <div className='flex flex-row justify-center items-center px-4 pt-5'>
                    <div className='w-1/4'>
                        <div className='w-14 h-14 bg-red-50 flex justify-center items-center'>
                            <img className='min-h-6 min-w-6 ' src={icon_5} alt="" />
                        </div>
                    </div>
                    <div className='w-3/4'>
                        <h3 className='font-semibold'>Buffet Service</h3>
                        <p className='text-gray-600 text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, officiis omnis molestias ab similique doloremque a consequuntur odit ullam nihil.</p>
                    </div>
                </div>
                <div className='flex flex-row justify-center items-center px-4 pt-5 pb-10'>
                    <div className='w-1/4'>
                        <div className='w-14 h-14 bg-red-50 flex justify-center items-center'>
                            <img className='min-h-6 min-w-6 ' src={icon_6} alt="" />
                        </div>
                    </div>
                    <div className='w-3/4'>
                        <h3 className='font-semibold'>Online Booking</h3>
                        <p className='text-gray-600 text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, officiis omnis molestias ab similique doloremque a consequuntur odit ullam nihil.</p>
                    </div>
                </div>
                <button className="bg-primary hover:bg-secondary  text-white text-sm py-3 px-4 rounded">
                    About Us
                </button>

            </div>
        </div>
    )
}

export default About
