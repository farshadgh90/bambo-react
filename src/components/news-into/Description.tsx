import { FC } from "react";
import Button from "../button";

const Description: FC = () => {
  return (
    <div className="flex py-10 lg:mr-20 items-center lg:justify-start justify-center  -m-top-10 w-full relative h-full before:border-2 before:border-[rgba(0,0,0,0.2)] before:border-t-0 before:border-r-0 before:absolute 2xl:before:bottom-[12.5rem] xl:before:bottom-[10rem] lg:before:bottom-[6rem] before:bottom-[4rem] before:left-6 xl:before:left-52 lg:before:left-40 before:w-full before:h-full">
      <div className="w-4/5 lg:w-4/6 xl:w-3/5 relative ">
        <h1 className="text-xl sm:text-2xl md:text-3xl text-primary-btn mb-5 lg:mb-8">
          اخبار و مقالات
        </h1>
        <p className="text-md text-slate-600 xl:text-2xl h-32">
          دسترسی به جدید ترین مقالات تالیف شدخ توسط معتبر ترین روزنامه ها و
          رسانه ها در دسته بندی های ، گوناگونی همچون طراحی ، برنامه نویسی ،
          اقتصاد ... فلسفه ، فیزیک ، شیمی ، ریاضی ، هنر و
        </p>

        <Button
          className="primary-btn mt-20 py-4 px-7 float-left ml-14 text-sm md:text-base"
          href={"/news"}
        >
          مشاهده مقالات
        </Button>
      </div>
    </div>
  );
};

export default Description;
