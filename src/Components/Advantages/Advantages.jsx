import React from "react";
import Title from "../Title/Title";
import "./index.css";
import settings from "../../assets/settings-outline.svg";
import Check from "../../assets/checkbox-outline.svg";
import Person from "../../assets/person-outline.svg";

import Book from "../../assets/book-outline.svg";
import AdvanageComp from "./AdvanageComp";

const advantage = [
  {
    icon: Person,
    title: "a personal approach",
    details: "we check every application and answer all qustions",
  },
  {
    icon: settings,
    title: "newest transport ",
    details: "we use the most comfortable annd practical buses",
  },
  {
    icon: Check,
    title: "recent information",
    details: "we are constantly following the news and updating our routes",
  },
  {
    icon: Book,
    title: "experienced instructor",
    details: "all our instructors have doctoral degrees",
  },
];
const Advantages = () => {
  return (
    <div className="advantages_container">
      <Title title="our  advantages" />

      <div className="advantges_row">
        {advantage.map((item) => (
          <AdvanageComp data={item} />
        ))}
      </div>
    </div>
  );
};

export default Advantages;
