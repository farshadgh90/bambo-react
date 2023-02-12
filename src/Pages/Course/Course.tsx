import CourseHero from "../../components/course-hero/CourseHero";
import CourseInfoCard from "../../components/course-Info-card/CourseInfoCard";
import CourseInfo from "../../components/course-Info/CourseInfo";
import BenefitPic from "../../assets/benefits.png";
import CourseBenefit from "../../components/course-benefit/CourseBenefit";
import Footer from "../../components/footer";

const CoursePage = () => {
  return (
    <div className="font-body container-max font-body text-primary-btn">
      <CourseHero />
      <section className="p-10 my-12">
        <div className="flex flex-row justify-between	">
          <CourseInfo />
          <CourseInfoCard />
        </div>
      </section>
      <section className="lg:flex bg-[#F9F9F9] relative overflow-hidden">
        <div className="absolute lg:static opacity-50 lg:opacity-100 left-0 w-full h-full top-0 lg:w-1/2">
          <img
            src={BenefitPic}
            alt="concat us"
            className="h-full w-full object-cover"
          />
        </div>
        <div className=" py-10 lg:p-0 relative ">
          <h1 className=" text-[65px] font-bold text-primary-btn">
            مزایای دوره:
          </h1>
          <CourseBenefit />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CoursePage;
