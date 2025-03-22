import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Form = ({ courseArray }) => {
  const [name, setName] = useState("");
  const [courseNumber, setCourseNumber] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    let index = parseInt(courseNumber);
    if (courseArray[index - 1] !== undefined) {
      console.log(courseArray[index - 1]);
    } else {
      console.log("Nieprawidłowy numer kursu");
    }
  };
  return (
    <div className="container m-2">
      <h2>Liczba kursów: {courseArray.length}</h2>
      <ol>
        {courseArray.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ol>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Imię i nazwisko:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="course-number">Numer kursu</label>
          <input
            type="number"
            name="course-number"
            className="form-control"
            value={courseNumber}
            onChange={(e) => setCourseNumber(e.target.value)}
          />
        </div>
        <button className="my-2 btn btn-primary" type="submit">
          Zapisz do kursu
        </button>
      </form>
    </div>
  );
};

export default Form;
