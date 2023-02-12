import { FC } from "react";

import Image from "../../assets/middle-page/thought-catalog-505eectW54k-unsplash.png";
import Concat from "./Concat";

const ConcatUsInto: FC = () => {
  return (
    <section className="bg-[rgb(58,130,106)]">
      <div className="container-max lg:flex relative overflow-hidden ">
        <div className="absolute lg:static opacity-50 lg:opacity-100 left-0 w-full h-full top-0 lg:w-1/2">
          <img
            src={Image}
            alt="concat us"
            className="h-full w-full object-cover"
          />
        </div>
        <div className=" py-10 lg:p-0 relative flex-grow lg:w-1/2 flex justify-center items-center">
          <Concat />
        </div>
      </div>
    </section>
  );
};

export default ConcatUsInto;
