import React from "react";
import { Link } from "react-router-dom";
const Email = () => {
  return (
    <div className="w-full py-6 bg-[#C4BCB3] border-t border-b-2 border-[#2f2f2f] whitespace-nowrap overflow-x-auto overflow-y-hidden scrollbar-hide">
      <div className="flex scroll-animation">
        <h1 className="text-[100px] font-light font-[domain] inline-block mr-8">
          Let's create something together{" "}
          <Link to="mailto:yadavaniket7611@gmail.com">
          <button className="font-[canopee] bg-[#1b1b1b] text-[#C4BCB3] px-3 cursor-pointer">
            Email me
          </button></Link>
        </h1>
        <h1 className="text-[100px] font-light font-[domain] inline-block mr-8">
          Let's create something together{" "}
          <span className="font-[canopee] bg-[#1b1b1b] text-[#C4BCB3] px-3">
            Email me
          </span>
        </h1>
        <h1 className="text-[100px] font-light font-[domain] inline-block mr-8">
          Let's create something together{" "}
          <span className="font-[canopee] bg-[#1b1b1b] text-[#C4BCB3] px-3">
            Email me
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Email;
