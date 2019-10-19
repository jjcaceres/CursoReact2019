import React from "react";

const Student = ({
  name = "Somebody",
  background = "Programmer",
  company = "Area51"
}) => (
  <div className="student">
    <h2>{name}</h2>
    <p>{background}</p>
    <span>{background}</span>
  </div>
);
