import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../Data/Context";

const CourseProgress = () => {
  const { courses } = useGlobalContext();
  const { id } = useParams<{ id?: string }>();
  return (
    <>
      {courses
        .filter((item) => item.id === Number(id))
        .map((item) => (
          <div className="w-[400px] relative bg-opacity-30 bg-[#DBDBDB] h-[2rem]">
            <div
              className={`bg-[#DBDBDB] bg-opacity-75 absolute inset-y-0 left-0 text-[#004458] text-left p-0.5 leading-none h-[2rem] flex flex-col justify-center		
              w-[${item.progress * 4}px]`}
            >
              <h3>{item.progress}%</h3>
            </div>
          </div>
        ))}
    </>
  );
};

export default CourseProgress;
