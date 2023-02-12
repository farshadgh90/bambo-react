import { FC } from "react";

import Navbar from "../navbar";
import SearchBar from "../searchBar";

const CoursesHero: FC = () => {
  return (
    <div className="bg-courses relative bg-no-repeat bg-cover">
      <Navbar />
      <SearchBar />
    </div>
  );
};

export default CoursesHero;
