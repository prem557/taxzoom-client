import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const FloatingContact = () => {
  const location = useLocation();

  // Hide on Contact page
  if (location.pathname === "/contact") return null;

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
      {/* Call Button */}
      <a
        href="tel:+918210097911"
        className="flex items-center justify-center w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-transform transform hover:scale-110"
        aria-label="Call Us"
      >
        <FaPhoneAlt size={20} />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918210097911"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-transform transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={22} />
      </a>
    </div>
  );
};

export default FloatingContact;
