import OnlineIcon from "../../assets/sub-hero/online-education copy.png";
import HatIcon from "../../assets/sub-hero/graduation-hat copy.png";
import TeacherIcon from "../../assets/sub-hero/teacher copy.png";

const cards = [
  {
    id: 1,
    icon: HatIcon,
    title: "576 دانشجو",
    description: `تا کنون بیش از 500 نفر از آموزش های  بامبو استفاده کرده اند
 .و نظرات خودشونو ثبت کرده اند
`,
  },
  {
    id: 2,
    icon: TeacherIcon,
    title: "34 استاد",
    description: `بیش از 30 استاد ، از برترین اساتید ایران همراه ما هستند 
 .و دوره های خودشونو ثبت کرده اند
`,
  },
  {
    id: 3,
    icon: OnlineIcon,
    title: "219 دوره",
    description: `تا کنون بیش از 200 دوره ، از دسته بندی های متفاوت 
.در سایت ثبت شده و قابل دسترسی است
`,
  },
];

function SubHero() {
  return (
    <div className="bg-subhero md:pt-[30rem] bg-cover bg-no-repeat">
      <div className="container-max h-2/5 bg-opacity-50 w-full bg-black flex flex-wrap md:flex-nowrap md:flex-row ">
        <Card />
      </div>
    </div>
  );
}

const Card = () => {
  return (
    <>
      {cards.map((item) => {
        return (
          <div
            className="h-full border-b-2 md:border-b-0 flex-grow text-white text-center flex flex-col justify-center items-center gap-5 border-r-2 first:border-r-0 border-[rgba(255,255,255,0.2)] px-4 md:py-10 py-20 lg:py-20"
            key={item.id}
          >
            <img src={item.icon} alt="icon" className="h-10 lg:w-max" />
            <h1 className="text-2xl lg:text-3xl">{item.title}</h1>
            <p className=" text-base lg:text-lg text-gray-200">
              {item.description}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default SubHero;
