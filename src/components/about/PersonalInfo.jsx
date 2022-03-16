import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Achille" },
  { meta: "last name", metaInfo: "Deribreux" },
  { meta: "Age", metaInfo: "22 Years" },
  { meta: "Nationality", metaInfo: "Belgian" },
  { meta: "Full Time Job", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Comines" },
  { meta: "phone", metaInfo: "+32 479 32 98 69" },
  { meta: "Email", metaInfo: "achille@deribreux.be" },
  { meta: "Github", metaInfo: "Achille-Deribreux" },
  { meta: "langages", metaInfo: "French, Dutch, English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
