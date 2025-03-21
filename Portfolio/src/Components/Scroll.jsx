import { useEffect, useRef, createContext, useContext } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const LocoContext = createContext();

export const useLocoScroll = () => useContext(LocoContext);

const Scroll = ({ children }) => {
  const scrollRef = useRef(null);
  const locoScrollRef = useRef(null);

  useEffect(() => {
    locoScrollRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.1,
      multiplier: 1,
      getDirection: true,
    });

    const handleResize = () => locoScrollRef.current.update();
    window.addEventListener("resize", handleResize);

    setTimeout(() => {
      locoScrollRef.current.update();
    }, 1000);

    return () => {
      window.removeEventListener("resize", handleResize);
      locoScrollRef.current.destroy();
    };
  }, []);

  return (
    <LocoContext.Provider value={locoScrollRef}>
      <div ref={scrollRef} data-scroll-container>
        {children}
      </div>
    </LocoContext.Provider>
  );
};

export default Scroll;
