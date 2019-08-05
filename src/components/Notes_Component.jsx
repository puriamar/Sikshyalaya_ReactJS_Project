import React, { Component } from "react";
import Tabs from "./tabs";
import List from "./list_group";

class Notes extends Component {
  state = {
    current_lesson: this.props.lessons[0]
  };

  handleChange = lesson => {
    this.setState({ current_lesson: lesson });
  };

  render() {
    const { lessons } = this.props;
    //console.log(lessons[0].questions);
    return (
      <div className="row">
        <div className="col-2">
          <h3>Lessons</h3>
          <List
            lessons={lessons}
            onClick={this.handleChange}
            current_lesson={this.state.current_lesson}
          />
        </div>
        <div className="col-8">
          <Tabs
            notes={this.state.current_lesson.lessons_note}
            questions={this.state.current_lesson.questions}
            inde={this.state.inde}
          />
        </div>
      </div>
    );
  }
}

export default Notes;
