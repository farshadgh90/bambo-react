import { FC } from "react";
import { useGlobalContext } from "../../Data/Context";

import CoursesHero from "../../components/courses-hero/CoursesHero";
import CourseTabs from "../../components/courses-tab/Tabs";
import CourseCard from "../../components/courses-course-card/CourseCard";
import CoursePagination from "../../components/pagination/Pagination";
import Footer from "../../components/footer";

const CoursesPage: FC = () => {
  const { courses } = useGlobalContext();

  return (
    <div className="font-body container-max font-body text-primary-btn">
      <CoursesHero />
      <main className="p-20 bg-gray-100">
        <div className="flex flex-row py-2.5 mb-10 items-center">
          <h1 className="basis-1/2 text-[65px] font-bold text-primary-btn">
            دوره های آموزشی
          </h1>
          <div className="basis-1/2 flex flex-row justify-between">
            <CourseTabs />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {courses.map((item) => (
            <div className="container ">
              <CourseCard
                key={item.id}
                id={item.id}
                image={item.image}
                name={item.name}
                teacher={item.teacher}
                numberOfStudents={item.numberOfStudents}
                totalPrice={item.totalPrice}
                startDate={item.startDate}
                endDate={item.endDate}
                progress={item.progress}
              />
            </div>
          ))}
        </div>
        <div className="m-6">
          <CoursePagination />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CoursesPage;
