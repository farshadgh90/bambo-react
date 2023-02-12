import React from "react";

import logo from "../../../assets/logo.png";
import instagram from "../../../assets/socials/instagram copy.png";
import telegram from "../../../assets/socials/telegram copy.png";
import whatsapp from "../../../assets/socials/whatsapp copy.png";
import youtube from "../../../assets/socials/youtube3.png";

const socials = [
  { link: "/#", logo: youtube, alt: "youtube" },
  { link: "/#", logo: whatsapp, alt: "whatsapp" },
  { link: "/#", logo: telegram, alt: "telegram" },
  { link: "/#", logo: instagram, alt: "instagram" },
];

const Logo: React.FC = () => {
  return (
    <div className="text-5xl font-normal text-white">
      <div className="flex border-b-2 pb-8">
        <h1 className="text-3xl md:text-5xl">آکادمی آموزشی بامبو</h1>
        <div className="h-7 md:h-10">
          <img src={logo} alt="logo" className="h-full" />
        </div>
      </div>

      <div className="hidden md:flex justify-between pt-8 ">
        {socials.map((social) => (
          <a
            key={social.alt}
            href={social.link}
            className="h-7 w-7 lg:h-12 lg:w-12"
          >
            <img src={social.logo} alt={social.alt} className="w-full h-full" />
          </a>
        ))}
      </div>
    </div>
  );
};
export default Logo;
