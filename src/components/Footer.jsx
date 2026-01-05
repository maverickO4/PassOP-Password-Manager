import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-800 text-white flex flex-col items-center  w-full">
      <div className="logo text-2xl" style={{ fontFamily: "'Black Ops One'" }}>
        <span className="text-orange-500">&lt;</span>
        Pass
        <span className="text-orange-500">OP/&gt;</span>
      </div>
      <div className="flex items-center">
        <span>Created with</span><img className="w-6 mx-1" src="icons/heart.png" alt="love"/><span className="italic font-light">by Rick.</span>
      </div>
    </div>
  );
};

export default Footer;
