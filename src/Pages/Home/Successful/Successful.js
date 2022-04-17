import React, { useEffect, useState } from "react";
import Success from "../Success/Success";

const Successful = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch("sucess.json")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);
  return (
    <div className="container">
      <h1>My Successful Students</h1>
      <div className="row">
        {students.map((student) => (
          <Success key={student.id} student={student}></Success>
        ))}
      </div>
    </div>
  );
};

export default Successful;
