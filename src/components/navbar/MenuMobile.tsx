import { FC, useEffect, useState } from "react";
import openMenu from "../../assets/icons/menu.svg";
import closeMenu from "../../assets/icons/closeMenu.svg";
import { navLink } from "./data";
import Button from "../button";
import { Link } from "react-router-dom";

export const MenuMobile: FC = () => {
  const [menu, setMenu] = useState<boolean>(false);

  useEffect(() => {
    const resize = (e: UIEvent) => {
      if (window.innerWidth > 1024) {
        setMenu(false);
      }
    };
    window.addEventListener("resize", resize);

    return () => {
      return window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <div
        className={`block lg:hidden py-5 w-5 cursor-pointer`}
        onClick={() => setMenu(!menu)}
      >
        <img
          src={menu ? closeMenu : openMenu}
          alt="menu"
          className="w-full he-full"
        />
      </div>
      <div
        className={`absolute bg-primary-btn bg-opacity-70 overflow-hidden text-white w-11/12 sm:w-full mx-auto left-0 right-0 top-[100%] transition-all duration-500 py-${
          menu ? 4 : 0
        } h-${menu ? "max" : 0} opacity-${menu ? 1 : 0}`}
      >
        <ul className="border-b-2 border-b-slate-50">
          {navLink.map((item, index) => (
            <li className="py-3 text-xl sm:text-2xl border-b-2 border-transparent hover:border-white transition-all duration-200 px-5">
              <Link className="block" to={item.to} key={index}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-between items-center px-5">
          <Button className="py-2 text-xl text-white" href="/login">
            ورود
          </Button>
          <Button
            className="py-2 bg-opacity-50 text-xl text-white"
            href="/register"
          >
            ثبت نام
          </Button>
        </div>
        <span className="h-0 h-max hidden" />
      </div>
    </>
  );
};
