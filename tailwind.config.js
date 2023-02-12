/** @type {import('tailwindcss').Config} */
const { url } = require("inspector");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // here you can add your custom colors and use it across your projects
  theme: {
    fontFamily: {
      body: ["w1", "sans-serf"],
      display: ["w1", "sans-serf"],
    },
    colors: {
      "primary-btn": "#004458",
      ...colors,
    },
    // and here we have to require our form plugin which we have installed
    plugins: [
      require("@tailwindcss/forms")({
        strategy: "class",
      }),
    ],
    // and here we can have all our images and use it inside our projects
    extend: {
      backgroundImage: {
        hero: "url('assets/hero-section.png')",
        subhero: "url('assets/sub-hero/sub-hero.png')",
        register: "url('assets/register.png')",
        login: "url('assets/login.png')",
        courses: "url('assets/courses-page.png')",
        course: "url('assets/course-page.png')",
      },
    },
  },
  plugins: [],
};
