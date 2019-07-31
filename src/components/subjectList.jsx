import React, { Component } from "react";
class SubjectList extends Component {
  render() {
    const { grade, subjects, onClick } = this.props;

    return (
      <div id="subject-list">
        <ul className="list-group">
          <li className="list-group-item active">
            <h5> Grade {grade}</h5>
          </li>
          {subjects.map(subject => (
            <li
              id="clickables_subjectlist"
              onClick={() => onClick(grade, subject)}
              className="list-group-item"
              key={subject}
            >
              {subject}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SubjectList;
