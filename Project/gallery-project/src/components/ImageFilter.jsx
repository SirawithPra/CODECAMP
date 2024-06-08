import React, { useState } from "react";
import Button from "./Button";
import Image from "./Image";
import { filterableData } from "../data/FilterableData";

const ImageFilter = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const buttonCaptions = ["all", "nature", "cars", "people"];
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };
  return (
    <section className="w-full flex flex-col gap-12 py-16 lg:px-15 md:px-10 px-5">
      <div className="flex w-full md:justify-center items-start md:gap-6 gap-3 flex-wrap">
        {buttonCaptions.map((filter) => (
          <Button
            key={filter}
            onClick={() => handleFilterClick(filter)}
            type="button"
            className={`focus:outline-none border-2 border-purple-600 hover:bg-purple-800 font-medium rounded-lg text-sm px-5 text-white py-2.5 mb-2 capitalize 
            ${activeFilter === filter ? "bg-purple-600" : " "}`}
          >
            {/* {filter === "all" ? "Show all" : filter} */}
            {filter}
          </Button>
        ))}

        {/* filtered cards display */}
        <main className="w-full grid lg:grid-cols-4 md:grid-cols-2 gap-x-5 gap-y-8 md:mt-8">
          {filterableData
            .filter(
              (item) => activeFilter === "all" || item.name === activeFilter
            )
            .map((item, index) => (
              <div key={index} className="w-full cursor-pointer transition-all duration-200 hover:scale-95 hover:bg-gray-900 rounded-lg shadow bg-gray-800 border border-gray-600">
                <Image
                  image={item.src}
                  alt={item.name}
                  objectCover="object-cover"
                  className="rounded-t-lg w-full h-[200px] overflow-hidden"
                />
                <h5 className="my-2 text-2xl font-bold tracking-tight text-white">{item.title}</h5>
                <p className="mb-3 font-normal text-gray-400">{item.text}</p>
              </div>
            ))}
        </main>
      </div>
    </section>
  );
};

export default ImageFilter;
