import React, { FC } from "react";

import Button from "../button";

const tabs = [
  {
    id: 1,
    class: "primary-btn coursesBtn",
    name: "همه دوره ها",
  },
  {
    id: 2,
    class: "secondary-btn coursesBtn",
    name: "جدیدترین ها",
  },
  {
    id: 3,
    class: "secondary-btn coursesBtn",
    name: "تکمیل نشده ها",
  },
  {
    id: 4,
    class: "secondary-btn coursesBtn",
    name: "جدیدترین ها",
  },
];
const CourseTabs: FC = () => {
  return (
    <>
      {tabs.map((tab) => (
        <Button key={tab.id} className={tab.class} href="/courses">
          {tab.name}
        </Button>
      ))}
    </>
  );
};

export default CourseTabs;
