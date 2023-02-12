import React, { FC } from "react";
import { useState } from "react";

import CourseDialog from "../course-dialog/CourseDialog";

type Props = {
  id: number;
  image: any;
  name: string;
  teacher: string;
  numberOfStudents: number;
  totalPrice: number;
  startDate: string;
  endDate: string;
  progress: number;
};
const CourseCard: FC<Props> = ({
  id,
  image,
  name,
  teacher,
  numberOfStudents,
  totalPrice,
  startDate,
  endDate,
  progress,
}) => {
  const [open, setOpen] = useState("hidden");
  const handleOpen = () => {
    setOpen("block");
  };

  return (
    <div key={id} className="flex flex-col container">
      <div>
        <img src={image} alt={name} className="w-full" />
      </div>
      <div className="px-5 bg-white ">
        <h2 className="courseTitle">دوره {name}</h2>
        <h4 className="courseDetail">مدرس: {teacher}</h4>
        <div className="flex flex-row justify-between	items-center">
          <h4 className="courseDetail">ظرفیت:{numberOfStudents} نفر</h4>
          <button className="primary-btn coursesBtn" onClick={handleOpen}>
            جزئیات
          </button>
        </div>
        <div className="border-solid border-t-2	border-[#3E7788]">
          <h2 className="coursePrice text-left">{totalPrice} تومان</h2>
        </div>
      </div>
      <div
        key={id}
        className={`absolute w-1/2 h-fit bg-white inset-1/4 z-10 p-20 ${open} `}
      >
        <CourseDialog
          id={id}
          image={image}
          name={name}
          teacher={teacher}
          numberOfStudents={numberOfStudents}
          totalPrice={totalPrice}
          startDate={startDate}
          endDate={endDate}
          progress={progress}
        />
      </div>
    </div>
  );
};

export default CourseCard;
