import { useParams } from "react-router-dom";

import { useGlobalContext } from "../../Data/Context";

const CourseInfo = () => {
  const { courses } = useGlobalContext();
  const { id } = useParams<{ id?: string }>();
  return (
    <section className="p-10">
      {courses
        .filter((item) => item.id === Number(id))
        .map((item) => (
          <div className="basis-2/3 container ">
            <h1 className=" text-[65px] font-bold text-primary-btn">
              توضیحات:
            </h1>
            <h3 className="font-body ml-7 text-[28px]">{item.description}</h3>
          </div>
        ))}
    </section>
  );
};

export default CourseInfo;
