import { Link } from "react-router-dom";
import Button from "../../components/button";

import { ChangeEvent, FormEvent, useState } from "react";
import AuthLayout from "../../components/layouts/auth";

interface State {
  password: string;
  email: string;
  save: boolean;
}

const LoginPage = () => {
  const [inputForm, setInputForm] = useState<State>({
    password: "",
    email: "",
    save: false,
  });

  const onChangeHandel = (event: ChangeEvent<HTMLInputElement>) => {
    setInputForm({
      ...inputForm,
      [event.target.name]: event.target.value,
    });
  };

  const handelSubmit = (event: FormEvent<HTMLFormElement>) => {};

  return (
    <AuthLayout reverse={false} title="ورود کاربر">
      <form className="grid grid-cols-1 gap-6" onSubmit={handelSubmit}>
        <input
          type="email"
          name="email"
          className="input-form  rounded-none py-4"
          placeholder="ایمیل"
          onChange={onChangeHandel}
          value={inputForm.email}
        />
        <input
          type="password"
          name="password"
          className="input-form rounded-none py-4"
          placeholder="رمز عبور"
          onChange={onChangeHandel}
          value={inputForm.password}
        />
        <div className="text-lg text-primary-btn flex flex-col md:flex-row justify-between">
          <div className="flex items-center mb-4 font-semibold gap-2">
            <label htmlFor="default-checkbox" className="ml-2 ">
              من را به خاطر بسپار
            </label>
            <input
              id="default-checkbox rounded-none"
              type="checkbox"
              className="h-5 w-5 accent-primary-btn"
              onChange={(e) => {
                console.log(e);
                setInputForm((prev) => ({ ...prev, save: e.target.checked }));
              }}
            />
          </div>
          <Link to="/">فراموشی رمز عبور</Link>
        </div>
        <div className="text-lg sm:text-xl mt-12">
          <div className="float-left">
            <Button
              href="/register"
              className="secondary-btn ml-5 text-primary-btn"
            >
              ثبت نام
            </Button>
            <Button className="primary-btn px-10 transition-all">ورود</Button>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
