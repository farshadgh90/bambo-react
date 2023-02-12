import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../Data/Context";

import Navbar from "../navbar";
import Capacity from "../../../assets/icons/CapacityIcon.png";
import Student from "../../../assets/icons/StudentIcon.png";
import CourseProgress from "../course-progress/CourseProgress";
import ClenderIcon from "../../assets/icons/CalendarIcon.png";
import TeacherIcon from "../../assets/icons/teacher.png";
import LikeIcon from "../../assets/icons/LikeIcon.png";
import CourseRate from "../course-rate/CourseRate";

const CourseSubHero = () => {
  const { courses } = useGlobalContext();
  const { id } = useParams<{ id?: string }>();

  const cards = [
    {
      id: 1,
      icon: TeacherIcon,
      description: [
        {
          id: 1,
          title: "مدرس:",
          css: "block",
          description: courses
            .filter((item) => item.id === Number(id))
            .map((item) => item.teacher),
        },
      ],
    },
    {
      id: 2,
      icon: ClenderIcon,
      description: [
        {
          id: 1,
          css: "inline-block",
          title: "تاریخ شروع:",
          description: courses
            .filter((item) => item.id === Number(id))
            .map((item) => item.startDate),
        },
        {
          id: 2,
          css: "inline-block",
          title: "تاریخ پایان:",
          description: courses
            .filter((item) => item.id === Number(id))
            .map((item) => item.endDate),
        },
      ],
    },
    {
      id: 3,
      icon: LikeIcon,
      description: [
        {
          id: 1,
          css: "block",
          title: "رتبه:",
          description: <CourseRate />,
        },
      ],
    },
  ];

  return (
      <div className="h-1/5 md:pt-[2rem] bg-opacity-50 w-full bg-black flex flex-wrap md:flex-nowrap md:flex-row ">
        <>
          {cards.map((item) => {
            return (
              <div
                className="h-full border-b-2 md:border-b-0 flex-grow text-white text-center flex flex-col justify-center items-center gap-5 border-r-2 first:border-r-0 border-[rgba(255,255,255,0.2)] px-4 md:py-10 py-20 lg:py-20"
                key={item.id}
              >
                <img src={item.icon} alt="icon" />
                {item.description.map((des) => (
                  <div key={des.id} className="text-[40px]">
                    <h1 className={`${des.css}`}>{des.title}</h1>
                    <p className={`${des.css}`}>{des.description}</p>
                  </div>
                ))}
              </div>
            );
          })}
        </>
      </div>
  );
};

export default CourseSubHero;
