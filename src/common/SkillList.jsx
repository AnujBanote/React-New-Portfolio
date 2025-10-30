import React from "react";

function SkillList({checkMarkIcon, skill}) {
  return (
    <span>
      <img src={checkMarkIcon} alt="CheckMark icon" />
      <p id="skillp">{skill}</p>
      <div></div>
    </span>
  );
}

export default SkillList;
