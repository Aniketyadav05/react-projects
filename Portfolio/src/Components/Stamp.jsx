import React from "react";
import {stamp,signature} from '../assets/index'
const Stamp = ({className}) => {
  return (
    <div className=" w-fit">
  {/* Heading with Higher z-index */}
  <div className="w-[140px] h-[100px] absolute z-50 right-[125px] top-15 overflow-hidden">
            
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[3px] h-[100px] bg-[#f47329]"
                style={{ transform: `rotate(${i * 40}deg) translateY(-2px)` }}
              ></div>
            ))}
          </div>
          <img className="absolute z-50 top-35 -right-8 h-[140px] " src={signature} alt="" />
          <div className=" text-left text-4xl text-black font-extrabold absolute z-50 top-48 right-28 mt-20">
          <p className="text-[12px] font-bold tracking-widest">
            NAME: <span className="font-normal play ml-1">ANIKET YADAV</span>
          </p>
          <p className="text-[12px] font-bold tracking-widest mt-2">
            DATE: <span className="font-normal play ml-[10px]">11/04/2005</span>
          </p>
        </div>
<img
    className="w-fit absolute top-0 right-5 h-[380px] z-0"
    src={stamp}
    alt=""
  />
</div>
  );
};

export default Stamp;
