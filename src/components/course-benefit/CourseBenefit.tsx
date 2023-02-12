import { FC } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../Data/Context";

const CourseBenefit: FC = () => {
  const { courses } = useGlobalContext();
  const { id } = useParams<{ id?: string }>();
  return (
    <>
      {courses
        .filter((item) => item.id === Number(id))
        .map((item) =>
          item.benefits.map((item) => (
            <div key={item.id} className="my-8 p-4">
              <div className="flex flex row">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="mx-2 inline-block"
                />
                <h3 className="font-body ml-7 text-[28px]">{item.title}</h3>
              </div>
              <h3 className="font-body ml-7 text-[28px]">{item.description}</h3>
            </div>
          ))
        )}
    </>
  );
};

export default CourseBenefit;
