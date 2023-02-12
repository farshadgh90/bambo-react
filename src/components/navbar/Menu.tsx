import { FC } from "react";
import Button from "../button";
import { navLink } from "./data";
import { Link } from "react-router-dom";

export const Menu: FC = () => {
  return (
    <>
      <ul className="text-white  justify-center items-center gap-14 text-2xl w-2/4 hidden lg:flex">
        {navLink.map((link) => (
          <li
            key={link.to}
            className="relative before:w-[0] hover:before:w-full hover:before:translate-x-[-50%] before:transition-all duration-500 before:absolute before:h-1 py-5 before:left-[50%] before:bottom-0 before:bg-primary-btn"
          >
            <Link to={link.to}>{link.title}</Link>
          </li>
        ))}
      </ul>
      <div className="w-1/4 justify-end lg:flex hidden ">
        <Button
          className="py-5 px-7 text-2xl text-white hover:text-primary-btn transition-all duration-300"
          href="/login"
        >
          ورود
        </Button>
        <Button
          className="py-5 bg-opacity-50 text-2xl text-white bg-[rgba(0,67,88,0.46)] border-2 px-7 border-transparent hover:border-primary-btn hover:bg-[rgba(0,67,88,0.3)] hover:border-[#00435875] transition-all duration-300 "
          href="/register"
        >
          ثبت نام
        </Button>
      </div>
    </>
  );
};
