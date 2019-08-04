import React from "react";

const List = ({ lessons, onClick, current_lesson }) => {
  return (
    <ul className="list-group">
      {lessons.map(a => (
        <li
          onClick={() => onClick(a)}
          key={a.topic}
          className={
            a === current_lesson ? "list-group-item active" : "list-group-item"
          }
        >
          {a.topic}
        </li>
      ))}
    </ul>
  );
};

export default List;
