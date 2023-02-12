import Navbar from "../../components/navbar";
import Button from "../button";
import SearchBar from "../searchBar";

function Hero() {
  return (
    <div className="bg-hero relative bg-no-repeat bg-cover">
      <Navbar />
      <div className="container container-max px-2 flex mx-auto pt-[10rem] lg:pt-[20rem] pb-[10rem]">
        <div className="lg:9/12 xl:w-7/12  text-white text-center sm:text-start">
          <h1 className="text-xl sm:text-3xl lg:text-5xl lg:leading-[4rem]">
            باید راه بهتری برای آموزش ساخته میشد ... <br />
            پس ما ساختیمش ...
          </h1>
          <div className="flex gap-12 mt-10 flex-col sm:flex-row">
            <p className="text-base sm:text-sm lg:text-2xl sm:w-6/12">
              سایت بامبو با هدف تولید و انتشار محتوای باکیفیت آموزشی و همچنین
              آشنایی جامعه با فضای کسب و کار در فضای مجازی ایجاد شده و امید
              داریم بتوانیم با راهکار های نوین ، فرصتی . برای افراد خواهان
              پیشرفت فراهم کنیم
            </p>
            <div className="bg-red-100 self-center lg:self-end">
              <Button
                className="white-btn text-lg lg:text-xl sm:px-7 lg:px-10 sm:py-3 lg:py-5 s"
                href="/courses"
              >
                مشاهده دوره ها
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full bg-primary-btn bg-opacity-50">
        <SearchBar />
      </div>
    </div>
  );
}

export default Hero;
