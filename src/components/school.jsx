import React, { Component } from "react";
import SubjectList from "./subjectList";

class School extends Component {
  state = {
    grades: [
      {
        grade: 6,
        subjects: [
          "English",
          "Math",
          "Science",
          "Nepali",
          "Optional Mathematics",
          "Health and Population",
          "Social Science",
          "Computer Science"
        ]
      },
      {
        grade: 7,
        subjects: [
          "English",
          "Math",
          "Science",
          "Nepali",
          "Optional Mathematics",
          "Health and Population",
          "Social Science",
          "Computer Science"
        ]
      },
      {
        grade: 8,
        subjects: [
          "English",
          "Math",
          "Science",
          "Nepali",
          "Optional Mathematics",
          "Health and Population",
          "Social Science",
          "Computer Science"
        ]
      }
    ]
  };

  getGrades = one => {
    let a = "";
    for (let values of one) a = a + " Grade " + values.grade;
    return a.trim();
  };
  render() {
    let one = "";
    if (this.props.match.params.name === "School")
      one = this.getGrades(this.state.grades);
    else if (this.props.match.params.name === "High-School")
      one = this.getGrades(this.state.grades) + "HighSchool";

    return (
      <React.Fragment>
        <h1>Curriculum Notes for: {one}</h1>
        <div className="container-fluid">
          {this.state.grades.map(grade => (
            <SubjectList
              key={grade.grade}
              grade={grade.grade}
              subjects={grade.subjects}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default School;
