import { FC } from "react";
import { IProps } from "./data";
import { Link } from "react-router-dom";

const Service: FC<IProps> = ({
  desc,
  poster,
  title,
  opacity,
  reverse,
  gradient,
  ButtonService,
}) => {
  return (
    <div
      className={` sm:w-full flex-grow ${
        gradient
          ? `bg-gradient-to-l  items-center  from-[rgb(40,165,136)_50%] to-primary-btn`
          : "bg-primary-btn"
      }`}
    >
      <div
        className={`container-max flex justify-center items-center group  ${
          reverse && "flex-row-reverse"
        }`}
      >
        <Link
          to="/#"
          className="py-10 px-10 sm:p-0 w-full h-full sm:group-hover:basis-1/2 sm:basis-3/5 flex justify-center flex-col items-center transition-all duration-500"
        >
          <div className="w-max space-y-4">
            <h2 className="text-xl md:text-2xl lg:text-4xl text-white">
              {title}
            </h2>
            <p className="text-xs sm:text-sm lg:text-lg text-slate-300 tracking-wider">
              {desc}
            </p>
          </div>
        </Link>
        <div className="group-hover:basis-1/2 basis-2/5 relative hidden sm:block transition-all duration-500">
          <img
            src={poster}
            alt={title}
            className={`${opacity && "opacity-30"} w-full`}
          />
          <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
            {ButtonService && <ButtonService />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

// from-${gradient[0]} to-${gradient[1]}
