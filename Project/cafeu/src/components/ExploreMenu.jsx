import React, { useState, useEffect } from 'react'
import banner from '../assets/banner-bg-3.jpeg'
import { menu_list, food_list } from '../assets/assets'


const ExploreMenu = ({ category, setCategory }) => {


    const [isVisible, setIsVisible] = useState(false);

    // Effect to handle scroll visibility
    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector("#slide_3");
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

    // Effect to handle category change
    useEffect(() => {
        setIsVisible(false);
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 300); // ระยะเวลาตามที่กำหนดใน transition
        return () => clearTimeout(timer);
    }, [category]);

    return (
        <div className='menu pt-20 '>
            <div
                className="select-none cursor-default bg-left text-secondary flex flex-col justify-center flex-wrap items-center pt-5 bg-auto md:bg-cover "
                style={{ backgroundImage: `url(${banner})` }}>
                <div className='px-20'>
                    <div className='flex flex-col justify-center items-center'>
                        <h2 className="text-primary font-medium text-center"
                            style={{ fontFamily: "'Apple Chancery', sans-serif" }}>
                            Special Menu
                        </h2>
                        <h5 className='text-3xl font-semibold'>Our Special Menu</h5>
                    </div>
                    <div className='flex flex-wrap justify-center pt-6'>
                        {/* menu icons */}
                        {menu_list.map((item, index) => {
                            return (
                                <div className='p-4 flex flex-col justify-center items-center'
                                    key={index}
                                    onClick={() => {
                                        setCategory(e => (e === item.menu_name ? "All" : item.menu_name))
                                    }}>
                                    <img className='w-10 cursor-pointer ' src={item.menu_image} alt="" />
                                    <p className='text-primary'
                                        style={{ fontFamily: "'Apple Chancery', sans-serif" }} >{item.menu_name}</p>
                                    <button
                                        key={index}
                                        className={`mx-2 w-10 h-0.5 z-30
                                    ${category === item.menu_name ? "bg-primary" : "bg-gray-300"}
                                     cursor-pointer`}
                                        onClick={() => setCurrentFood(index)}
                                    ></button>

                                </div>
                            )
                        })
                        }
                    </div>
                    <div id='slide_3' className={`py-10 transition-all duration-1.5 ease-in-out
            ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}>
                        {/* items menu */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
                            {food_list.map((item, index) => {
                                if (category === 'All' || category === item.category) {
                                    return (
                                        <div className='border flex flex-col justify-center items-center m-2 group hover:shadow-lg'>
                                            <div className='relative overflow-hidden w-full'>
                                                <p className='text-sm flex items-center justify-center opacity-0 group-hover:opacity-100 text-white  absolute top-3 left-3 transition-opacity ease-in-out duration-500 bg-primary w-8 h-8 z-30'>${item.price}</p>
                                                <img className='w-full h-full bg-auto group-hover:scale-110 group-hover:rotate-2 z-40 transition-transform ease-in-out duration-500' src={item.image} alt="" />
                                            </div>
                                            <div className='p-8 bg-white'>
                                                <h5 className='text-primary text-left font-semibold'>{item.name}</h5>
                                                <p className='pt-5 text-sm text-secondary-light text-left'>{item.description}</p>
                                                <div className='pt-4'>
                                                    <p className='text-primary text-xs text-left'>Delivery Fee : $1</p>
                                                    <div>
                                                        <img src="" alt="" />
                                                        <img src="" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExploreMenu
