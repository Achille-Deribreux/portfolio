import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Achille" },
  { meta: "last name", metaInfo: "Deribreux" },
  { meta: "Age", metaInfo: "23 Years" },
  { meta: "Nationality", metaInfo: "Belgian" },
  //{ meta: "Address", metaInfo: "Comines" },
  { meta: "phone", metaInfo: "+32 488 57 64 33" },
  { meta: "Email", metaInfo: "achille@deribreux.be" },
  { meta: "Github", metaInfo: "Achille-Deribreux" },
  { meta: "languages", metaInfo: "French, Dutch, English" },
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
