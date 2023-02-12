import { FC } from "react";
import Button from "../button";

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

const CourseDialog: FC<Props> = ({
  id,
  progress,
  image,
  name,
  teacher,
  numberOfStudents,
  totalPrice,
  startDate,
  endDate,
}) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-6 container ">
        <div>
          <h2 className="courseTitle">دوره {name}</h2>
          <h4 className="courseDetail">مدرس: {teacher}</h4>
          <h4 className="courseDetail">ظرفیت: {numberOfStudents} نفر</h4>
          <h4 className="courseDetail">تاریخ شروع: {startDate}</h4>
          <h4 className="courseDetail">تاریخ پایان: {endDate}</h4>
        </div>
        <div>
          <img src={image} alt={name} className="w-full" />
        </div>
      </div>
      <h4 className="courseDetail inline-block	">قیمت: </h4>
      <h2 className="coursePrice inline-block	">{totalPrice} تومان </h2>
      <div>
        <h4 className="courseDetail inline-block"> وضعیت دوره:</h4>
        <div className="w-full bg-gray-200 rounded-full border-solid border-b-2	border-[#3E7788]">
          <div
            className={`bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full w-[${progress}]`}
          >
            {progress}
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between	m-3 border-solid border-t-2	border-[#3E7788]">
        <Button
          className="primary-btn bg-gray-100 coursesBtn m-3"
          href="/courses"
        >
          خروج
        </Button>
        <Button className="white-btn coursesBtn m-3" href={`/courses/${id}`}>
          مشاهده کامل
        </Button>
      </div>
    </>
  );
};

export default CourseDialog;
