import { FC } from "react";
import { IProps, services } from "./data";

import Service from "./Service";

const ServicesInto: FC = () => {
  return (
    <section className="px-5 flex flex-wrap gap-5 sm:px-0 sm:gap-0 text-center sm:text-right sm:flex-col ">
      {services.map((item: IProps, index) => (
        <Service key={index} {...item} />
      ))}
    </section>
  );
};

export default ServicesInto;
