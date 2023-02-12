import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../Data/Context";

import Button from "../button";

const CourseInfoCard = () => {
  const { courses } = useGlobalContext();
  const { id } = useParams<{ id?: string }>();
  return (
    <div className="mx-6 bg-gray-100 p-4 basis-1/3 w-full">
      {courses
        .filter((item) => item.id === Number(id))
        .map((item) => (
          <div>
            <div className="flex flex-row items-center container border-solid border-b-2 border-[#3E7788] my-6">
              <img
                src={item.image}
                alt={item.name}
                width="55px"
                height="55px"
                className="m-2"
              />
              <h2 className="font-bold text-primary-btn text-[40px]">
                دوره {item.name}
              </h2>
            </div>
            <div className="items-center text-[35px] text-[#004458]">
              <div className="flex flex-row justify-between my-2">
                <h6>قیمت دوره:</h6>
                <h6>{item.totalPrice} تومان</h6>
              </div>
              <div className="flex flex-row justify-between	my-2">
                <h6>تخفیف:</h6>
                <h6 className=" text-[#F20000]"> {item.discount}%</h6>
              </div>
              <div className="flex flex-row justify-between my-2">
                <h6 className="text-primary-btn"> مبلغ قابل پرداخت:</h6>
                <h6 className="text-[#09B28B]">
                  {item.totalPrice * ((100 - item.discount) / 100)} تومان
                </h6>
              </div>
            </div>
            <div className="flex flex-col items-center justify-items-center text-[35px]	my-2">
              <div className="flex flex-row items-center	">
                <div className="bg-slate-300 w-[45px] h-[61px] m-1"></div>
                <div className="bg-slate-300 w-[45px] h-[61px] m-1"></div>
                <h1>:</h1>
                <div className="bg-slate-300 w-[45px] h-[61px] m-1"></div>
                <div className="bg-slate-300 w-[45px] h-[61px] m-1"></div>
                <h1>:</h1>
                <div className="bg-slate-300 w-[45px] h-[61px] m-1"></div>
                <div className="bg-slate-300 w-[45px] h-[61px] m-1"></div>
              </div>
              <div className="my-2">
                <Button
                  href="buy"
                  className="bg-[#09B28B] py-2 px-5 text-white hover:opacity-80 justify-self-center m-2 text-[35px]"
                >
                  ثبت نام در دوره
                </Button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CourseInfoCard;
