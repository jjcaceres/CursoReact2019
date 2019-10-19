import React from "react";
import Student from "./Student";

export default ({ students }) =>
  students.map(students => <Student {...student} />);
