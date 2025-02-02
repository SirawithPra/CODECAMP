// Block.jsx
import React from "react";

const Block = ({ role, blockName, blockColor, children }) => {
    if (role !== "ADMIN" && blockName === "Admin") {
        return null;
    }

    return (
        <div className={`p-4 mt-4 bg-white hover:bg-gray-400 flex justify-center items-center rounded-sm
         w-[150px]  md:w-[300px] h-[150px] transition-all duration-300`}>
            {/* <h3 className="text-black text-xl">{blockName}</h3> */}
            {children}
        </div>
    );
};

export default Block;