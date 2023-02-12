import { FC } from "react";
import { ISlideProps } from "../data";

const Item: FC<ISlideProps> = ({ poster, title }) => {
  return (
    <div className="relative">
      <img src={poster} alt="title" className="object-cover w-full" />
      <p className="absolute bottom-0 left-0 w-full text-center p-4 bg-primary-btn bg-opacity-75 text-white text-xs lg:text-base xl:text-lg">
        {title}
      </p>
    </div>
  );
};

export default Item;
