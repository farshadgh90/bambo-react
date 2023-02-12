import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../Data/Context";

import Navbar from "../navbar";
import Capacity from "../../assets/icons/CapacityIcon.png";
import Student from "../../assets/icons/StudentIcon.png";
import CourseProgress from "../course-progress/CourseProgress";
import ClenderIcon from "../../assets/icons/CalendarIcon.png";
import TeacherIcon from "../../assets/icons/teacher.png";
import LikeIcon from "../../assets/icons/LikeIcon.png";
import CourseRate from "../course-rate/CourseRate";
import CourseSubHero from "../course-sub-hero/CourseSubHero";

const CourseHero = () => {
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
    <div className="bg-course relative bg-no-repeat bg-cover">
      <Navbar />
      <div className="flex flex-col">
        {courses
          .filter((item) => item.id === Number(id))
          .map((item) => (
            <div className="flex flex-col justify-center items-center text-white px-[300px] py-[50px]">
              <div>
                <img src={item.courseIcon} alt={item.name} />
              </div>
              <h1 className="text-[66px]">{item.name}</h1>
              <div className="flex flex-row text-[40px]">
                <div className="mx-8">
                  <img src={Capacity} alt="capacity" className="inline-block" />
                  <h3 className="inline-block">
                    ظرفیت:{item.courseCapacity} نفر
                  </h3>
                </div>
                <div className="mx-8">
                  <img src={Student} alt="student" className="inline-block" />
                  <h3 className="inline-block">
                    دانشجو:{item.numberOfStudents} نفر
                  </h3>
                </div>
              </div>
              <div className="mt-10">
                <CourseProgress />
              </div>
            </div>
          ))}
      </div>
      <CourseSubHero />
    </div>
  );
};

export default CourseHero;
