import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const FloatingContact = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* Call Button */}
      <a
        href="tel:+918210097911"
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-xl transition transform hover:scale-110 animate-bounce-slow"
        aria-label="Call Us"
      >
        <FaPhoneAlt size={22} />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918210097911"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl transition transform hover:scale-110 animate-bounce-slow delay-150"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={22} />
      </a>
    </div>
  );
};

export default FloatingContact;
