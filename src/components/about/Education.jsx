import React from "react";

const educationContent = [
  {
    year: "2021-2022",
    degree: "BACHELOR DEGREE",
    institute: "OPENCLASSROOMS",
    details: `RNCP level 6 title in Java application developement. Through 9 projects I learned object-oriented, java, spring boot, micro-services, docker, ... `,
  },
  {
    year: "2021",
    degree: "Diploma of Higher Education.",
    institute: "OPENCLASSROOMS",
    details: `RNCP level 5 title in web development, I learned to use html, css, sass, javascript as well as nodejs and react`,
  },
  {
    year: "2018-2021",
    degree: "BACHELOR DEGREE ",
    institute: "EPHEC BRUSSELS",
    details: `Bachelor in e-business, through 7 projects I have learned basics of programmation, marketing, data, website creation economics, ...`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
