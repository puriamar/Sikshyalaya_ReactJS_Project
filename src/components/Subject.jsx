import React, { Component } from "react";

import { getNotes } from "./noteService";
import NotesComponent from "./Notes_Component";

class Subject extends Component {
  state = {
    notes: getNotes()
  };
  handleClick = a => {
    const { name, grade, subject } = this.props.match.params;
    this.props.history.push(`/School/${name}/${grade}/${subject}/${a.topic}`);
  };
  render() {
    const {
      grade: current_grade,
      subject: current_subject
    } = this.props.match.params;

    const { notes: allNotes } = this.state;
    const grade_allNotes = allNotes.filter(
      value => current_grade === value.grade + ""
    );

    let currentSubject_notes = [];
    if (grade_allNotes.length > 0) {
      currentSubject_notes = grade_allNotes[0].subjects.filter(
        value => value.subject === current_subject
      );
    }

    return (
      <div className="container-fluid">
        <h4>{`Grade: ${current_grade} | Subject: ${current_subject} `}</h4>

        {currentSubject_notes.map(note => (
          <NotesComponent
            key={note.subject}
            lessons={note.lessons}
            onClick={this.handleClick}
          />
        ))}
      </div>
    );
  }
}

export default Subject;
