import React, { useState, useEffect } from "react";
import picture from "../assets/wallpaper-1.png";
const Informed = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector("#slide");
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
        <div>
            <div
                className="overflow-hidden relative bg-cover bg-right py-24"
                style={{ backgroundImage: `url(${picture})` }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="z-10 flex flex-col md:flex-row items-center justify-center h-full">
                    <div id='slide' className={`text-white w-full md:basis-1/2 py-10 px-20 text-left pb-4 cursor-default select-none transition-all duration-1.5 ease-in-out ${isVisible ? "transform translate-x-0 opacity-100" : "transform -translate-x-20 opacity-0"
                        }`}>
                        <h2 className="text-3xl ">Stay Informed About Special Offers</h2>
                        <p className="text-xs">For Exclusive Deals, Coupons, News and More!</p>
                    </div>
                    <form id="slide" className={`w-full md:basis-1/2 py-10 px-20 transition-all duration-1.5 ease-in-out ${isVisible ? "transform translate-x-0 opacity-100" : "transform translate-x-20 opacity-0"
                        }`}>
                        <div className="flex flex-row justify-center items-center">

                            <input
                                className={`p-3 pl-5 text-sm border-none rounded-l w-3/4 md:max-w-full md:flex-1`}
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                required
                            />
                            <button className={`bg-primary hover:bg-secondary text-white text-sm py-3 px-4 rounded-r min-w-[120px] w-1/4 md:w-auto `}>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Informed;
