import React from "react";

const experienceContent = [
  {
    year: "   2021 - 2022",
    position: " Developer",
    compnayName: "OpenClassrooms",
    details: `  Realization of 17 school projects in different languages in order to obtain 2 degrees .`,
  },
  {
    year: "2020 - 2022",
    position: "Founder",
    compnayName: "AD IT SOLUTIONS",
    details: `Student entrepreneur, IT support and web services for companies (website creation,...).`,
  },
  {
    year: "2019 - 2021",
    position: "Founder",
    compnayName: "Stouw",
    details: `Student entrepreneur, creation of a clothing brand with a social purpose. Creation of the brand, design, stock management, marketing, online sales, ...`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
