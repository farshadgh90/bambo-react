import Coureses from "../../assets/coursesIntro/courses.png";
import Button from "../button";

function CoursesIntro() {
  return (
    <div className="container-max flex flex-col md:flex-row px2- md:p-0 gap-9 overflow-hidden">
      <div className="xl:basis-3/5 md:basis-1/2 flex justify-center items-center p-10">
        <img src={Coureses} alt="courses" className="md:w-[70%]" />
      </div>
      <div className="p-10 md:basis-1/2 xl:basis-2/5 flex justify-center items-center relative before:absolute before:w-full before:h-full before:bottom-[4rem] md:before:bottom-[4rem] lg:before:bottom-[3.8rem] xl:before:bottom-[26%] 2xl:before:bottom-[30%] md:before:-left-1  right-4 sm:right-10 lg:right-0 left-0 before:border-2  before:border-[rgba(0,0,0,0.2)]">
        <div className="w-4/5 relative">
          <h1 className="text-xl sm:text-2xl md:text-3xl text-primary-btn mb-8">
            دوره های آموزشی
          </h1>
          <p className="text-md text-slate-600 xl:text-2xl h-32">
            دسترسی به با کیفیت ترین دوره های آموزشی آنلاین با تدریس برترین
            اساتید ایران در دسته بندی های ، گوناگونی همچون طراحی ، برنامه نویسی
            ، اقتصاد ... فلسفه ، فیزیک ، شیمی ، ریاضی ، هنر و
          </p>

          <Button
            className="primary-btn mt-20 py-4 px-7 float-left ml-14 text-sm md:text-base"
            href={"/courses"}
          >
            مشاهده دوره ها
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CoursesIntro;
