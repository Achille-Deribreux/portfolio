import React from "react";

const experienceContent = [
  {
    year: "NOV 2022 - TODAY",
    position: "Java Developer",
    compnayName: "Ixor",
    details: `  Java/Spring consultant at Securex working in a microservices environment with Java 8-11-17, Spring boot, Spock, Nexus/Bamboo, Bitbucket, ...`,
  },
  {
    year: "APR 2022 - NOV 2022",
    position: "Java Developer",
    compnayName: "Sopra Steria",
    details: `  Java/Spring backend developer on a public sector project with Java 11, Spring boot, Junit, Gitlab, ...`,
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
