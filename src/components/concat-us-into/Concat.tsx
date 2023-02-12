import { FC, useState } from "react";
import Input from "./Input";
import { IInputState } from "./data";
import Button from "../button";

const placeholders = ["ایمیل خود را وارد کنید", "متن خود را وارد کنید"];

const Concat: FC = () => {
  const [inputFrom, setInputFrom] = useState<IInputState>({
    email: "",
    text: "",
  });

  return (
    <div className="space-y-9 w-11/12 sm:w-8/12">
      <h2 className="text-2xl md:text-4xl text-white mb-3 sm:mb-10 ">
        پیشنهادات وانتقادات
      </h2>
      {Object.keys(inputFrom).map((item, index) => (
        <Input
          key={index}
          name={item as keyof IInputState}
          state={inputFrom}
          setState={setInputFrom}
          className="py-4 w-full outline-none px-2 bg-primary-btn bg-opacity-50 border-b-2 focus:border-[rgb(100,216,174)] focus:placeholder:border-[rgb(100,216,174)] border-transparent placeholder:text-[rgb(100,216,174)] text-white transition-all duration-500"
          placeholder={placeholders[index]}
        />
      ))}
      <Button
        className="primary-btn py-3 px-8 float-left mt-12 text-2xl"
        href="/#"
      >
        ارسال
      </Button>
    </div>
  );
};

export default Concat;
