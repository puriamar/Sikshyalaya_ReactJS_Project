import React, { Component } from "react";
import Tabs from "./tabs";

class Notes extends Component {
  state = { current_lesson: this.props.lessons[0] };
  handleChange = lesson => {
    this.setState({ current_lesson: lesson });
  };
  render() {
    const { lessons } = this.props;

    return (
      <div className="row">
        <div className="col-2">
          <h3>Lessons</h3>
          <ul className="list-group">
            {lessons.map(a => (
              <li
                onClick={() => this.handleChange(a)}
                key={a.topic}
                className={
                  a === this.state.current_lesson
                    ? "list-group-item active"
                    : "list-group-item"
                }
              >
                {a.topic}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-8">
          <Tabs notes={this.state.current_lesson.lessons_note} />
        </div>
      </div>
    );
  }
}

export default Notes;
