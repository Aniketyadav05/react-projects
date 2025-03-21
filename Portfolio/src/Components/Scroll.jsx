import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const Scroll = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const locoScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.1, // smoothness control
      multiplier: 1, // scroll speed
      getDirection: true, 
    });

    // Update on resize
    const handleResize = () => locoScroll.update();
    window.addEventListener("resize", handleResize);

    // Update after content load
    setTimeout(() => {
      locoScroll.update();
    }, 1000);

    return () => {
      window.removeEventListener("resize", handleResize);
      locoScroll.destroy();
    };
  }, []);

  return <div ref={scrollRef} data-scroll-container>{children}</div>;
};

export default Scroll;
