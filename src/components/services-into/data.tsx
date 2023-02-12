import Advisor from "../../assets/middle-page/business-people-with-finance-chart.png";
import Cooperation from "../../assets/middle-page/cheerful-mood-group-people-business-conference-modern-classroom-daytime.png";
import Certificate from "../../assets/middle-page/young-handsome-curly-student-man-with-notebooks-isolated-white-wall.png";

import { FC } from "react";
import Button from "../button";

// set Props for Service component
export interface IProps {
  /* title for service component */
  title: string;
  /* description for service component */
  desc: string;
  /* image for service component */
  poster: string;
  /* set opacity in image service component */
  opacity?: boolean;
  /* set flow for service component */
  reverse?: boolean;
  /* set background gradient "bg-gradient-to-l from-[rgb(40,165,136)_50%]  bg-primary-btn" */
  gradient?: boolean;
  /* add button to service*/
  ButtonService?: FC;
}

// button for service component
const AdvisorButton: FC = () => {
  return (
    <>
      <Button
        href="/#"
        className="bg-[rgba(255,255,255,0.7)] py-2 lg:py-4 text-sm md:text-xl px-7 md:px-10 text-primary-btn"
      >
        مشاوره
      </Button>
    </>
  );
};

// set data for Service-into
export const services: IProps[] = [
  {
    title: "مشاوره ی آنلاین",
    desc: "مشاوران ما برای حل مشکالات شما اماده اند ...",
    poster: Advisor,
    opacity: true,
    ButtonService: AdvisorButton,
  },
  {
    title: "آرائه مدرک معتبر",
    desc: "بهترین راه برای ساختن رزومه حرفه ای ...",
    poster: Certificate,
    reverse: true,
    gradient: true,
  },
  {
    title: "همکاری در آموزش",
    desc: "به اساتید آموزشی در بامبو بپیوندید ...",
    poster: Cooperation,
  },
];
