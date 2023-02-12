import { FC } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import nextIcon from "../../../assets/icons/nextIcon.svg";
import prevIcon from "../../../assets/icons/prevIcon.svg";

import { slides } from "../data";
import Item from "./Item";

const PrevBtn: FC = () => {
  const swiper = useSwiper();
  return (
    <button className="w-4 lg:w-10" onClick={() => swiper.slidePrev()}>
      <img src={nextIcon} alt="next icon" className="w-full he-full" />
    </button>
  );
};
const NextBtn: FC = () => {
  const swiper = useSwiper();

  return (
    <button className="w-4 lg:w-10" onClick={() => swiper.slideNext()}>
      <img src={prevIcon} alt="prevent icon" className="w-full he-full" />
    </button>
  );
};

const Slider: FC = () => {
  return (
    <div className="md:w-full h-[90%] mx-auto">
      <Swiper slidesPerView={1} dir="rtl">
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <Item {...item} />
          </SwiperSlide>
        ))}
        <div className="w-10/12 flex justify-between mx-auto border-2 border-[rgba(57,130,105)] border-t-0 py-2">
          <PrevBtn />
          <NextBtn />
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
