import React, { useEffect, useState } from 'react'
import { FaArrowUp } from "react-icons/fa";

const Scroll = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(window.scrollY > 200);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
      }, []);

  return (
    <div>
        {isVisible ? (
            <button className='fixed bottom-6 right-20 bg-gray-400 text-white p-2 rounded-sm'
            onClick={scrollToTop}
            >
            <FaArrowUp size={20} />
            </button>
        )
        : null}
    </div>
  )
}

export default Scroll