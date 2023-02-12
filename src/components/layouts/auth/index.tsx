import React from "react";
import { Link } from "react-router-dom";

import home from "../../../assets/home12.png";
import Logo from "./Logo";

interface AuthLayoutProps extends React.PropsWithChildren {
  reverse?: boolean;
  title: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  reverse = false,
  title,
}) => {
  return (
    <>
      <main
        className={`flex flex-col lg:${
          reverse ? "flex-row-reverse" : "flex-row"
        } h-screen container-max`}
      >
        <div className="bg-login h-[40%] md:h-[60%] lg:h-screen bg-cover lg:bg-current lg:basis-1/2 xl:basis-2/3 bg-no-repeat flex justify-center items-center relative">
          <Logo />

          <Link
            to="/"
            className="hidden md:flex absolute bottom-4 lg:bottom-12 h-7 w-7 lg:h-12 lg:w-12"
          >
            <img src={home} alt="home" className="h-full w-full" />
          </Link>
        </div>

        <div className="lg:basis-1/2 xl:basis-1/3 px-7">
          <div className="max-w-md mx-auto flex flex-col justify-center h-full py-4">
            <div className="flex justify-between items-baseline">
              <h1 className="text-2xl sm:text-4xl font-semibold mb-3 sm:mb-8 text-primary-btn  tracking-wide">
                {title}
              </h1>
              <Link
                to="/"
                className="block md:hidden rounded-sm bg-gray-700 h-7 w-7 p-1"
              >
                <img src={home} alt="home" className="h-full w-full" />
              </Link>
            </div>
            {children}
          </div>
        </div>
      </main>
      <span className="hidden lg:flex-row lg:flex-row-reverse" />
    </>
  );
};
export default AuthLayout;
