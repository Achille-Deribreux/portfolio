import React from "react";

const achievementsContent = [
  { title: "1", subTitle1: "year of", subTitle2: "coding" },
  { title: "16", subTitle1: "completed", subTitle2: "projects" },
  { title: "3", subTitle1: "Degrees", subTitle2: "obtained" },
  { title: "?", subTitle1: "awards", subTitle2: "won" },
];

const Achievements = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative">{val.title}</h3>
            <p className="open-sans-font m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
