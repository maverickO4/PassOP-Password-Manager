import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white">
      <div className="mycontainer flex justify-between items-center py-5 px-4 h-14">
        <div className="logo text-2xl" style={{ fontFamily: "'Black Ops One'" }}>
          <span className="text-orange-500">&lt;</span>
          Pass
          <span className="text-orange-500">OP/&gt;</span>
        </div>
        <button className="text-white bg-orange-700 my-5 flex justify-between items-center ring-1 hover:ring-2 ring-white hover:scale-105 transition-all duration-300 active:scale-95 cursor-pointer rounded-lg">
          <img
            className="invert p-1 w-10"
            src="/icons/github.svg"
            alt="github logo"
          />
          <span
            className="px-2"
            style={{ fontFamily: "'Black Ops One'" }}
          >
            GitHub
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
