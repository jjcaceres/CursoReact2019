import React from "react";
export default ({ name, company, background = "SE" }) => (
  <div className="student">
    <h3>{name}</h3>
    <p>{company}</p>
    <span>{background}</span>
  </div>
);
