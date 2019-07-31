import React from "react";

export default function PaperSheet(props) {
  const { grade, subjects } = props;
  return (
    <div id="subject-list">
      <ul className="list-group">
        <li className="list-group-item active">
          <h5> Grade {grade}</h5>
        </li>
        {subjects.map(subject => (
          <li className="list-group-item" key={subject}>
            {subject}
          </li>
        ))}
      </ul>
    </div>
  );
}
