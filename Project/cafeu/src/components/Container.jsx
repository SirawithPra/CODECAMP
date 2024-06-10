import React, { useState, useEffect } from "react";
import icon_1 from "../assets/icon-1.png";
import icon_2 from "../assets/icon-2.png";
import icon_3 from "../assets/icon-3.png";
import icon_4 from "../assets/icon-4.png";
import banner from "../assets/wallpaper-container.png";

const items = [
  {
    id: 1,
    name: "100%  Swiss Quality",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nulla adipisci dolor, accusamus architecto tenetur?",
    more_detail: "Discover More",
    src: icon_1,
  },
  {
    id: 2,
    name: "Organic Production",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nulla adipisci dolor, accusamus architecto tenetur?",
    more_detail: "Discover More",
    src: icon_2,
  },
  {
    id: 3,
    name: "Food Law Certificates",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nulla adipisci dolor, accusamus architecto tenetur?",
    more_detail: "Discover More",
    src: icon_3,
  },
  {
    id: 4,
    name: "Food Production",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nulla adipisci dolor, accusamus architecto tenetur?",
    more_detail: "Discover More",
    src: icon_4,
  },
];

const Container = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll("[data-id]");
      const visibleElements = [];
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          visibleElements.push(element.dataset.id);
        }
      });
      setVisibleItems(visibleElements);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="mx-20 my-20">
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 select-none cursor-default">
          {items.map((item) => (
            <div
              key={item.id}
              data-id={item.id}
              className={`border bg-center bg-no-repeat rounded-lg p-5 hover:shadow-xl group transition-all duration-2 ease-in-out ${visibleItems.includes(String(item.id))
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-10 scale-75"
                }`}
              style={{ backgroundImage: `url(${banner})` }}
            >
              <div className="flex flex-col justify-center items-center">
                <img className="w-20 pb-5" src={item.src} alt="" />
                <div className="inline-flex items-center">
                  <div className="min-w-6 min-h-6 bg-primary rounded-full flex items-center justify-center">
                    <p className="text-white text-xs">{item.id}</p>
                  </div>
                  <p className="pl-3 text-md text-center group-hover:text-primary font-medium">
                    {item.name}
                  </p>
                </div>
                <p className="py-3 text-sm text-center text-secondary-light">
                  {item.detail}
                </p>
                <button className="text-sm text-center group-hover:text-orange-200">
                  *{" "}
                  <b className="font-normal group-hover:text-primary">
                    {item.more_detail}
                  </b>{" "}
                  *
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Container;
