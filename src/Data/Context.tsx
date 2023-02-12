import { createContext, useContext } from "react";

import JavaScript from "../assets/courses-logo/JavaScript.png"
import CSharp from "../assets/courses-logo/CSharp.png";
import Sass from "../assets/courses-logo/Sass.png";
import ReactJs from "../assets/courses-logo/ReactJS.png";
import Bootstrap from "../assets/courses-logo/Bootstrap.png";
import Java from "../assets/courses-logo/Java.png";
import Python from "../assets/courses-logo/Python.png";
import Angular from "../assets/courses-logo/Angular.png";
import JavaScriptIcon from "../assets/courses-logo/JavaScriptIcon.png";
import Benefit1 from "../assets/icons/benefit1Icon.png"
import Benefit2 from "../assets/icons/benefit2Icon.png"
import Benefit3 from "../assets/icons/benefit3Icon.png"

export type GlobalContent = {
  courses: {
    id: number;
    name: string;
    courseIcon: any;
    image: any;
    courseCapacity: number;
    numberOfStudents: number;
    progress: number;
    teacher: string;
    startDate: string;
    endDate: string;
    rate: boolean[];
    description: string;
    totalPrice: number;
    discount: number;
    benefits: {
      id: number;
      title: string;
      description: string;
      icon: any;
    }[];
  }[];
  setCourses: (c: []) => void;
};
export const MyCourses = createContext<GlobalContent>({
  courses: [
    {
      id: 1,
      name: "جاوااسکریپت",
      image: JavaScript,
      courseIcon: JavaScriptIcon,
      courseCapacity: 59,
      numberOfStudents: 53,
      progress: 60,
      teacher: "بیل گیتس",
      startDate: "1400/1/1",
      endDate: "1401/1/1",
      rate: [true, true, true, true, true],
      description:
        "امروزه به دلیل آن که ارتباطات فضای مجازی رونق زیادی یافته است طراحی یک سایت به شکل مناسب و مورد پسند کاربران متفاوت اهمیت بالایی یافته است. به همین جهت صاحبان سرمایه و کار برای رونق کار خود به دنبال طراحان حرفه ای برای طراحی سایتی مناسب و کارآمد هستند. لذا یادگیری روش های مناسب و به روز طراحی سایت مورد توجه بسیاری از علاقه مندان و کارجویان قرار گرفته است. جاوا اسکریپت زبان برنامه نویسی مفسری در سمت کلاینت است که می توان بوسیله سایتی مناسب و کارآمد هستند. لذا یادگیری روش های مناسب و به روز طراحی سایت مورد توجه بسیاری از علاقه مندان و کارجویان قرار گرفته است. جاوا اسکریپت زبان برنامه نویسی مفسری در سمت کلاینت است که می توان بوسیله",
      totalPrice: 200000,
      discount: 10,
      benefits: [
        {
          id: 1,
          title: "آشنایی با زبان برنامه نویسی جاوااسکریپت",
          description:
            "در پایان این دوره ی آموزشی ، شما دانشجوی گرامی، قادر به فهمی عمیق و مناسب نسبت به این زبان خواهید بود و به راحتی تسک های مربوط را انجام خواهی داد.",
          icon: Benefit1,
        },
        {
          id: 2,
          title: "آشنایی با زبان برنامه نویسی جاوااسکریپت",
          description:
            "در پایان این دوره ی آموزشی ، شما دانشجوی گرامی، قادر به فهمی عمیق و مناسب نسبت به این زبان خواهید بود و به راحتی تسک های مربوط را انجام خواهی داد.",
          icon: Benefit2,
        },
        {
          id: 3,
          title: "آشنایی با زبان برنامه نویسی جاوااسکریپت",
          description:
            "در پایان این دوره ی آموزشی ، شما دانشجوی گرامی، قادر به فهمی عمیق و مناسب نسبت به این زبان خواهید بود و به راحتی تسک های مربوط را انجام خواهی داد.",
          icon: Benefit3,
        },
      ],
    },
    {
      id: 2,
      name: "جاوااسکریپت",
      image: CSharp,
      courseIcon: JavaScriptIcon,
      courseCapacity: 59,
      numberOfStudents: 53,
      progress: 60,
      teacher: "بیل گیتس",
      startDate: "1400/1/1",
      endDate: "1401/1/1",
      rate: [true, true, true, true, false],
      description:
        "امروزه به دلیل آن که ارتباطات فضای مجازی رونق زیادی یافته است طراحی یک سایت به شکل مناسب و مورد پسند کاربران متفاوت اهمیت بالایی یافته است. به همین جهت صاحبان سرمایه و کار برای رونق کار خود به دنبال طراحان حرفه ای برای طراحی سایتی مناسب و کارآمد هستند. لذا یادگیری روش های مناسب و به روز طراحی سایت مورد توجه بسیاری از علاقه مندان و کارجویان قرار گرفته است. جاوا اسکریپت زبان برنامه نویسی مفسری در سمت کلاینت است که می توان بوسیله سایتی مناسب و کارآمد هستند. لذا یادگیری روش های مناسب و به روز طراحی سایت مورد توجه بسیاری از علاقه مندان و کارجویان قرار گرفته است. جاوا اسکریپت زبان برنامه نویسی مفسری در سمت کلاینت است که می توان بوسیله",
      totalPrice: 200000,
      discount: 10,
      benefits: [
        {
          id: 1,
          title: "آشنایی با زبان برنامه نویسی جاوااسکریپت",
          description:
            "در پایان این دوره ی آموزشی ، شما دانشجوی گرامی، قادر به فهمی عمیق و مناسب نسبت به این زبان خواهید بود و به راحتی تسک های مربوط را انجام خواهی داد.",
          icon: Benefit1,
        },
        {
          id: 2,
          title: "آشنایی با زبان برنامه نویسی جاوااسکریپت",
          description:
            "در پایان این دوره ی آموزشی ، شما دانشجوی گرامی، قادر به فهمی عمیق و مناسب نسبت به این زبان خواهید بود و به راحتی تسک های مربوط را انجام خواهی داد.",
          icon: Benefit2,
        },
        {
          id: 3,
          title: "آشنایی با زبان برنامه نویسی جاوااسکریپت",
          description:
            "در پایان این دوره ی آموزشی ، شما دانشجوی گرامی، قادر به فهمی عمیق و مناسب نسبت به این زبان خواهید بود و به راحتی تسک های مربوط را انجام خواهی داد.",
          icon: Benefit3,
        },
      ],
    },
    {
      id: 3,
      name: "جاوااسکریپت",
      image: Sass,
      courseIcon: JavaScriptIcon,
      courseCapacity: 59,
      numberOfStudents: 53,
      progress: 60,
      teacher: "بیل گیتس",
      startDate: "1400/1/1",
      endDate: "1401/1/1",
      rate: [true, true, true, false, false],
      description:
        "امروزه به دلیل آن که ارتباطات فضای مجازی رونق زیادی یافته است طراحی یک سایت به شکل مناسب و مورد پسند کاربران متفاوت اهمیت بالایی یافته است. به همین جهت صاحبان سرمایه و کار برای رونق کار خود به دنبال طراحان حرفه ای برای طراحی سایتی مناسب و کارآمد هستند. لذا یادگیری روش های مناسب و به روز طراحی سایت مورد توجه بسیاری از علاقه مندان و کارجویان قرار گرفته است. جاوا اسکریپت زبان برنامه نویسی مفسری در سمت کلاینت است که می توان بوسیله سایتی مناسب و کارآمد هستند. لذا یادگیری روش های مناسب و به روز طراحی سایت مورد توجه بسیاری از علاقه مندان و کارجویان قرار گرفته است. جاوا اسکریپت زبان برنامه نویسی مفسری در سمت کلاینت است که می توان بوسیله",
      totalPrice: 200000,
      discount: 10,
      benefits: [
        {
          id: 1,
          title: "آشنایی با زبان برنامه نویسی جاوااسکریپت",
          description:
            "در پایان این دوره ی آموزشی ، شما دانشجوی گرامی، قادر به فهمی عمیق و مناسب نسبت به این زبان خواهید بود و به راحتی تسک های مربوط را انجام خواهی داد.",
          icon: Benefit1,
        },
        {
          id: 2,
          title: "آشنایی با زبان برنامه نویسی جاوااسکریپت",
          description:
            "در پایان این دوره ی آموزشی ، شما دانشجوی گرامی، قادر به فهمی عمیق و مناسب نسبت به این زبان خواهید بود و به راحتی تسک های مربوط را انجام خواهی داد.",
          icon: Benefit2,
        },
        {
          id: 3,
          title: "آشنایی با زبان برنامه نویسی جاوااسکریپت",
          description:
            "در پایان این دوره ی آموزشی ، شما دانشجوی گرامی، قادر به فهمی عمیق و مناسب نسبت به این زبان خواهید بود و به راحتی تسک های مربوط را انجام خواهی داد.",
          icon: Benefit3,
        },
      ],
    },
    {
      id: 4,
      name: "جاوااسکریپت",
      image: ReactJs,
      courseIcon: JavaScriptIcon,
      courseCapacity: 59,
      numberOfStudents: 53,
      progress: 60,
      teacher: "بیل گیتس",
      startDate: "1400/1/1",
      endDate: "1401/1/1",
      rate: [true, true, false, false, false],
      description:
        "امروزه به دلیل آن که ارتباطات فضای مجازی رونق زیادی یافته است طراحی یک سایت به شکل مناسب و مورد پسند کاربران متفاوت اهمیت بالایی یافته است. به همین جهت صاحبان سرمایه و کار برای رونق کار خود به دنبال طراحان حرفه ای برای طراحی سایتی مناسب و کارآمد هستند. لذا یادگیری روش های مناسب و به روز طراحی سایت مورد توجه بسیاری از علاقه مندان و کارجویان قرار گرفته است. جاوا اسکریپت زبان برنامه نویسی مفسری در سمت کلاینت است که می توان بوسیله سایتی مناسب و کارآمد هستند. لذا یادگیری روش های مناسب و به روز طراحی سایت مورد توجه بسیاری از علاقه مندان و کارجویان قرار گرفته است. جاوا اسکریپت زبان برنامه نویسی مفسری در سمت کلاینت است که می توان بوسیله",
      totalPrice: 200000,
      discount: 10,
      benefits: [
        {
          id: 1,
          title: "آشنایی با زبان برنامه نویسی جاوااسکریپت",
          description:
            "در پایان این دوره ی آموزشی ، شما دانشجوی گرامی، قادر به فهمی عمیق و مناسب نسبت به این زبان خواهید بود و به راحتی تسک های مربوط را انجام خواهی داد.",
          icon: Benefit1,
        },
        {
          id: 2,
          title: "آشنایی با زبان برنامه نویسی جاوااسکریپت",
          description:
            "در پایان این دوره ی آموزشی ، شما دانشجوی گرامی، قادر به فهمی عمیق و مناسب نسبت به این زبان خواهید بود و به راحتی تسک های مربوط را انجام خواهی داد.",
          icon: Benefit2,
        },
        {
          id: 3,
          title: "آشنایی با زبان برنامه نویسی جاوااسکریپت",
          description:
            "در پایان این دوره ی آموزشی ، شما دانشجوی گرامی، قادر به فهمی عمیق و مناسب نسبت به این زبان خواهید بود و به راحتی تسک های مربوط را انجام خواهی داد.",
          icon: Benefit3,
        },
      ],
    },
    {
      id: 5,
      name: "جاوااسکریپت",
      image: Bootstrap,
      courseIcon: JavaScriptIcon,
      courseCapacity: 59,
      numberOfStudents: 53,
      progress: 60,
      teacher: "بیل گیتس",
      startDate: "1400/1/1",
      endDate: "1401/1/1",
      rate: [true, false, false, false, false],
      description:
        "امروزه به دلیل آن که ارتباطات فضای مجازی رونق زیادی یافته است طراحی یک سایت به شکل مناسب و مورد پسند کاربران متفاوت اهمیت بالایی یافته است. به همین جهت صاحبان سرمایه و کار برای رونق کار خود به دنبال طراحان حرفه ای برای طراحی سایتی مناسب و کارآمد هستند. لذا یادگیری روش های مناسب و به روز طراحی سایت مورد توجه بسیاری از علاقه مندان و کارجویان قرار گرفته است. جاوا اسکریپت زبان برنامه نویسی مفسری در سمت کلاینت است که می توان بوسیله سایتی مناسب و کارآمد هستند. لذا یادگیری روش های مناسب و به روز طراحی سایت مورد توجه بسیاری از علاقه مندان و کارجویان قرار گرفته است. جاوا اسکریپت زبان برنامه نویسی مفسری در سمت کلاینت است که می توان بوسیله",
      totalPrice: 200000,
      discount: 10,
      benefits: [
        {
          id: 1,
          title: "آشنایی با زبان برنامه نویسی جاوااسکریپت",
          description:
            "در پایان این دوره ی آموزشی ، شما دانشجوی گرامی، قادر به فهمی عمیق و مناسب نسبت به این زبان خواهید بود و به راحتی تسک های مربوط را انجام خواهی داد.",
          icon: Benefit1,
        },
        {
          id: 2,
          title: "آشنایی با زبان برنامه نویسی جاوااسکریپت",
          description:
            "در پایان این دوره ی آموزشی ، شما دانشجوی گرامی، قادر به فهمی عمیق و مناسب نسبت به این زبان خواهید بود و به راحتی تسک های مربوط را انجام خواهی داد.",
          icon: Benefit2,
        },
        {
          id: 3,
          title: "آشنایی با زبان برنامه نویسی جاوااسکریپت",
          description:
            "در پایان این دوره ی آموزشی ، شما دانشجوی گرامی، قادر به فهمی عمیق و مناسب نسبت به این زبان خواهید بود و به راحتی تسک های مربوط را انجام خواهی داد.",
          icon: Benefit3,
        },
      ],
    },
    {
      id: 6,
      name: "جاوااسکریپت",
      image: Java,
      courseIcon: JavaScriptIcon,
      courseCapacity: 59,
      numberOfStudents: 53,
      progress: 60,
      teacher: "بیل گیتس",
      startDate: "1400/1/1",
      endDate: "1401/1/1",
      rate: [false, false, false, false, false],
      description:
        "امروزه به دلیل آن که ارتباطات فضای مجازی رونق زیادی یافته است طراحی یک سایت به شکل مناسب و مورد پسند کاربران متفاوت اهمیت بالایی یافته است. به همین جهت صاحبان سرمایه و کار برای رونق کار خود به دنبال طراحان حرفه ای برای طراحی سایتی مناسب و کارآمد هستند. لذا یادگیری روش های مناسب و به روز طراحی سایت مورد توجه بسیاری از علاقه مندان و کارجویان قرار گرفته است. جاوا اسکریپت زبان برنامه نویسی مفسری در سمت کلاینت است که می توان بوسیله سایتی مناسب و کارآمد هستند. لذا یادگیری روش های مناسب و به روز طراحی سایت مورد توجه بسیاری از علاقه مندان و کارجویان قرار گرفته است. جاوا اسکریپت زبان برنامه نویسی مفسری در سمت کلاینت است که می توان بوسیله",
      totalPrice: 200000,
      discount: 10,
      benefits: [
        {
          id: 1,
          title: "آشنایی با زبان برنامه نویسی جاوااسکریپت",
          description:
            "در پایان این دوره ی آموزشی ، شما دانشجوی گرامی، قادر به فهمی عمیق و مناسب نسبت به این زبان خواهید بود و به راحتی تسک های مربوط را انجام خواهی داد.",
          icon: Benefit1,
        },
        {
          id: 2,
          title: "آشنایی با زبان برنامه نویسی جاوااسکریپت",
          description:
            "در پایان این دوره ی آموزشی ، شما دانشجوی گرامی، قادر به فهمی عمیق و مناسب نسبت به این زبان خواهید بود و به راحتی تسک های مربوط را انجام خواهی داد.",
          icon: Benefit2,
        },
        {
          id: 3,
          title: "آشنایی با زبان برنامه نویسی جاوااسکریپت",
          description:
            "در پایان این دوره ی آموزشی ، شما دانشجوی گرامی، قادر به فهمی عمیق و مناسب نسبت به این زبان خواهید بود و به راحتی تسک های مربوط را انجام خواهی داد.",
          icon: Benefit3,
        },
      ],
    },
    {
      id: 7,
      name: "جاوااسکریپت",
      image: Python,
      courseIcon: JavaScriptIcon,
      courseCapacity: 59,
      numberOfStudents: 53,
      progress: 60,
      teacher: "بیل گیتس",
      startDate: "1400/1/1",
      endDate: "1401/1/1",
      rate: [true, false, false, false, false],
      description:
        "امروزه به دلیل آن که ارتباطات فضای مجازی رونق زیادی یافته است طراحی یک سایت به شکل مناسب و مورد پسند کاربران متفاوت اهمیت بالایی یافته است. به همین جهت صاحبان سرمایه و کار برای رونق کار خود به دنبال طراحان حرفه ای برای طراحی سایتی مناسب و کارآمد هستند. لذا یادگیری روش های مناسب و به روز طراحی سایت مورد توجه بسیاری از علاقه مندان و کارجویان قرار گرفته است. جاوا اسکریپت زبان برنامه نویسی مفسری در سمت کلاینت است که می توان بوسیله سایتی مناسب و کارآمد هستند. لذا یادگیری روش های مناسب و به روز طراحی سایت مورد توجه بسیاری از علاقه مندان و کارجویان قرار گرفته است. جاوا اسکریپت زبان برنامه نویسی مفسری در سمت کلاینت است که می توان بوسیله",
      totalPrice: 200000,
      discount: 10,
      benefits: [
        {
          id: 1,
          title: "آشنایی با زبان برنامه نویسی جاوااسکریپت",
          description:
            "در پایان این دوره ی آموزشی ، شما دانشجوی گرامی، قادر به فهمی عمیق و مناسب نسبت به این زبان خواهید بود و به راحتی تسک های مربوط را انجام خواهی داد.",
          icon: Benefit1,
        },
        {
          id: 2,
          title: "آشنایی با زبان برنامه نویسی جاوااسکریپت",
          description:
            "در پایان این دوره ی آموزشی ، شما دانشجوی گرامی، قادر به فهمی عمیق و مناسب نسبت به این زبان خواهید بود و به راحتی تسک های مربوط را انجام خواهی داد.",
          icon: Benefit2,
        },
        {
          id: 3,
          title: "آشنایی با زبان برنامه نویسی جاوااسکریپت",
          description:
            "در پایان این دوره ی آموزشی ، شما دانشجوی گرامی، قادر به فهمی عمیق و مناسب نسبت به این زبان خواهید بود و به راحتی تسک های مربوط را انجام خواهی داد.",
          icon: Benefit3,
        },
      ],
    },
    {
      id: 8,
      name: "جاوااسکریپت",
      image: Angular,
      courseIcon: JavaScriptIcon,
      courseCapacity: 59,
      numberOfStudents: 53,
      progress: 60,
      teacher: "بیل گیتس",
      startDate: "1400/1/1",
      endDate: "1401/1/1",
      rate: [true, true, false, false, false],
      description:
        "امروزه به دلیل آن که ارتباطات فضای مجازی رونق زیادی یافته است طراحی یک سایت به شکل مناسب و مورد پسند کاربران متفاوت اهمیت بالایی یافته است. به همین جهت صاحبان سرمایه و کار برای رونق کار خود به دنبال طراحان حرفه ای برای طراحی سایتی مناسب و کارآمد هستند. لذا یادگیری روش های مناسب و به روز طراحی سایت مورد توجه بسیاری از علاقه مندان و کارجویان قرار گرفته است. جاوا اسکریپت زبان برنامه نویسی مفسری در سمت کلاینت است که می توان بوسیله سایتی مناسب و کارآمد هستند. لذا یادگیری روش های مناسب و به روز طراحی سایت مورد توجه بسیاری از علاقه مندان و کارجویان قرار گرفته است. جاوا اسکریپت زبان برنامه نویسی مفسری در سمت کلاینت است که می توان بوسیله",
      totalPrice: 200000,
      discount: 10,
      benefits: [
        {
          id: 1,
          title: "آشنایی با زبان برنامه نویسی جاوااسکریپت",
          description:
            "در پایان این دوره ی آموزشی ، شما دانشجوی گرامی، قادر به فهمی عمیق و مناسب نسبت به این زبان خواهید بود و به راحتی تسک های مربوط را انجام خواهی داد.",
          icon: Benefit1,
        },
        {
          id: 2,
          title: "آشنایی با زبان برنامه نویسی جاوااسکریپت",
          description:
            "در پایان این دوره ی آموزشی ، شما دانشجوی گرامی، قادر به فهمی عمیق و مناسب نسبت به این زبان خواهید بود و به راحتی تسک های مربوط را انجام خواهی داد.",
          icon: Benefit2,
        },
        {
          id: 3,
          title: "آشنایی با زبان برنامه نویسی جاوااسکریپت",
          description:
            "در پایان این دوره ی آموزشی ، شما دانشجوی گرامی، قادر به فهمی عمیق و مناسب نسبت به این زبان خواهید بود و به راحتی تسک های مربوط را انجام خواهی داد.",
          icon: Benefit3,
        },
      ],
    },
  ],
  setCourses: () => {},
});
export const useGlobalContext = () => useContext(MyCourses);
