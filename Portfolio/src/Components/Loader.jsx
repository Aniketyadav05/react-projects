import React from 'react'
import { useEffect, useRef } from "react";
import gsap from "gsap";
const Loader = ({children}) => {
  const pageRef = useRef(null);
  
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(pageRef.current, {
      y: "100vh",
      scale: 0.6,
      duration: 0,
    })
      .to(pageRef.current, {
        y: "-100vh",
        duration: 1,
        delay: 1,
      })
      .to(pageRef.current, {
        y: "0vh",
        rotate: -360,
        scale: 1,
        duration: 0.8,
        delay:1
      });
  }, []);

  return <div ref={pageRef} className='overflow-hidden'>{children}</div>;
}

export default Loader