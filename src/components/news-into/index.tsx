import { FC } from "react";
import Description from "./Description";
import Slider from "./slider";

const NewsInto: FC = () => {
  return (
    <section className="container-max flex flex-col md:flex-row overflow-hidden ">
      <div className=" w-full md:w-1/2">
        <Description />
      </div>
      <div className=" w-full md:w-1/2 py-20 px-20">
        <Slider />
      </div>
    </section>
  );
};

export default NewsInto;
