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
          "Social Studies",
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
          "Social Studies",
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
          "Social Studies",
          "Computer Science"
        ]
      },
      {
        grade: 9,
        subjects: [
          "English",
          "Math",
          "Science",
          "Nepali",
          "Optional Mathematics",
          "Health and Population",
          "Social Studies",
          "Computer Science"
        ]
      },
      {
        grade: 10,
        subjects: [
          "English",
          "Math",
          "Science",
          "Nepali",
          "Optional Mathematics",
          "Health and Population",
          "Social Studies",
          "Computer Science"
        ]
      },
      {
        grade: 11,
        subjects: [
          "English",
          "Math",
          "Physics",
          "Chemistry",
          "Biology",
          "Hotel Management",
          "Sociology",
          "Computer Science"
        ]
      },
      {
        grade: 12,
        subjects: [
          "English",
          "Math",
          "Physics",
          "Chemistry",
          "Biology",
          "Hotel Management",
          "Sociology",
          "Computer Science"
        ]
      }
    ]
  };

  getGrades = one => {
    let a = "";
    for (let i = 0; i < one.length; i++) {
      if (i === one.length - 1) a = a + "and Grade " + one[i].grade;
      else a = a + "Grade " + one[i].grade + ", ";
    }
    return a.trim();
  };
  handleSelect = (grade, subject) => {
    this.props.history.push(
      `/School/${this.props.match.params.name}/${grade}/${subject}`
    );
  };
  render() {
    const { name: school_label } = this.props.match.params;
    const { grades: allGrades } = this.state;

    let filtered_grades = [];
    if (school_label === "School") {
      filtered_grades = allGrades.filter(grade => {
        return grade.grade < 9;
      });
    } else if (school_label === "High-School") {
      filtered_grades = allGrades.filter(grade => {
        return grade.grade > 8;
      });
    }

    const one = this.getGrades(filtered_grades);

    return (
      <React.Fragment>
        <h3>Curriculum Notes for: {one}</h3>
        <div className="container-fluid">
          {filtered_grades.map(grade => (
            <SubjectList
              onClick={this.handleSelect}
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
