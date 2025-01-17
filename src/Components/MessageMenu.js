import React, { useState } from "react";
import { FaComments, FaWhatsapp, FaPhoneAlt, FaTimes } from "react-icons/fa";

const MessageMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/1234567890", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:1234567890";
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-center z-50">
      {isOpen && (
        <div className="flex flex-col items-center space-y-4 mb-4">
          
          <button
            onClick={handleCall}
            className="bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600"
          >
            <FaPhoneAlt size={24} />
          </button>
         
          <button
            onClick={handleWhatsApp}
            className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600"
          >
            <FaWhatsapp size={24} />
          </button>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={toggleMenu}
        className="bg-[#d0ae81] text-black p-4 rounded-full shadow-lg"
      >
        {isOpen ? <FaTimes size={24} /> : <FaComments size={24} />}
      </button>
    </div>
  );
};

export default MessageMenu;
