import React from "react";

const Header = () => {
  return (
    <div className="container mx-auto px-2 ">
      <div className="py-4 flex justify-between items-center">
        <h2 className="font-bold text-2xl md:text-4xl">Knowledge Cafe</h2>
        <img
          className="w-12 h-12 md:w-16 md:h-16 rounded-full"
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="User"
        />
      </div>
      <hr className="border-[1.5px]" />
    </div>
  );
};

export default Header;
