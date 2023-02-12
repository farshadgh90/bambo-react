import { Link } from "react-router-dom";
import Button from "../../components/button";

import logo from "../../assets/logo.png";
import instagram from "../../assets/socials/instagram copy.png";
import telegram from "../../assets/socials/telegram copy.png";
import whatsapp from "../../assets/socials/whatsapp copy.png";
import youtube from "../../assets/socials/youtube3.png";
import home from "../../assets/home12.png";

const RegisterPage = () => {
  // Now we wrap our two sections of the page inside of a main tag
  // for our Forms we used the tailwindCSS Form plugin installed in the Dev-dependencies
  // and then we bring our buttons components.
  // at the end we load up our image and lay out everything inside it with flex
  return (
    <main>
      <div className="flex flex-row">
        <div className="form basis-1/3">
          <div className="mt-8 max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-8 text-primary-btn">
              ثبت نام
            </h1>
            <div className="grid grid-cols-1 gap-6 ">
              <input
                type="text"
                name="userName"
                className="input-form"
                placeholder="نام کاربری"
              />

              <input
                type="email"
                name="Email"
                className="input-form"
                placeholder="ایمیل"
              />
              <input
                type="number"
                name="phoneNumber"
                className="input-form"
                placeholder=" شماره موبایل"
              />
              <input
                type="number"
                name="numberID"
                className="input-form"
                placeholder=" شماره ملی"
              />
              <input type="date" name="Date" className="input-form" />
              <input
                type="password"
                name="Password"
                className="input-form"
                placeholder="رمز عبور"
              />
            </div>
            <div className="float-left mt-12">
              <Button href="/login" className="secondary-btn ml-5">
                ورود
              </Button>
              <Button href="/" className="primary-btn">
                ثبت نام
              </Button>
            </div>
          </div>
        </div>
        <div
          className="img-holder-form relative 
        basis-2/3 h-screen bg-cover bg-[url('assets/register.png')] 
        flex justify-center items-center"
        >
          <div className="text-5xl font-normal text-white">
            <div className="flex border-b-2 pb-8">
              <h1>آکادمی آموزشی بامبو</h1>
              <img src={logo} alt="logo" />
            </div>
            <div className="flex justify-between pt-8">
              <a href="#">
                <img src={youtube} alt="youtube" />
              </a>
              <a href="#">
                <img src={whatsapp} alt="whatsapp" />
              </a>
              <a href="#">
                <img src={telegram} alt="telegram" />
              </a>
              <a href="#">
                <img src={instagram} alt="instagram" />
              </a>
            </div>
          </div>
          <Link to="/" className="absolute bottom-12">
            <img src={home} alt="home" />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
