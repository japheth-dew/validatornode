import React from "react";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";

const Button = ({ children, link }) => {
  return (
    <a target={"_blank"} rel="noreferrer" className="text-white hover:bg-white hover:text-[#7db991] md:p-4  p-2" href={link}>
      <button className=" p-2 rounded-full md:text-[2em] text-[1em]">{children}</button>
    </a>
  );
};

const Tablet = () => {
  return (
    <div className="fixed z-[100] bg-[#7db991] bottom-3 right-2 rounded-lg flex flex-col  items-center">
      <Button link={"https://wa.link/jjtebz"}>
        <BsWhatsapp />
      </Button>
      <Button link={"https://msng.link/o/?@trezorwalletzcom=tg"}>
        <FaTelegramPlane />
      </Button>
      <Button link={"https://msng.link/o/?trezorwalletzcom=ig"}>
        <BsInstagram />
      </Button>
      <Button link={"mailto:trezorwalletz.com@gmail.com?subject=I%20am%20messaging%20from%20trezorwalletz.com"}>
        <FiMail />
      </Button>
    </div>
  );
};

export default Tablet;


