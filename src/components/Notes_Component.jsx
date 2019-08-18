import React, { Component } from "react";

import List from "./lessons_list";

class Notes extends Component {
  state = {
    current_lesson: this.props.lessons[0]
  };

  handleChange = lesson => {
    this.setState({ current_lesson: lesson });
    console.log(lesson);
  };

  render() {
    const { lessons } = this.props;
    console.log(lessons);
    return (
      <React.Fragment>
        <div className="row">
          <div className="col">
            <h3>Lessons</h3>
            {/* <List lesson={lessons} /> */}

            <List lesson={lessons} onClick={this.props.onClick} />

            {/* <List
              lessons={lessons}
              onClick={this.props.onClick}
              current_lesson={this.state.current_lesson}
            /> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Notes;
