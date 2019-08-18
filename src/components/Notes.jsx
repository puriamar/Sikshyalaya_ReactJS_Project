import React, { Component } from "react";
import PDFViewer from "./PDFViewer";
import PDFJSBackend from "./backend/pdfjs";
import { getNotes } from "./noteService";
import Tab from "./tabs";

class Notes extends Component {
  state = {
    notes: getNotes()
  };

  render() {
    console.log(this.state.notes);
    console.log(this.props.match.params);
    const { grade, subject, lesson } = this.props.match.params;
    const grade_allNotes = this.state.notes.filter(a => a.grade + "" === grade);

    let currentSubject_notes = [];
    if (grade_allNotes.length > 0) {
      currentSubject_notes = grade_allNotes[0].subjects.filter(
        value => value.subject === subject
      );
    }

    let current_lesson = [];
    if (currentSubject_notes.length > 0) {
      current_lesson = currentSubject_notes[0].lessons.filter(
        a => a.topic === lesson
      );
    }
    //console.log(current_lesson);

    return (
      <div id="note_container" className="container">
        <Tab
          notes={
            <PDFViewer
              backend={PDFJSBackend}
              src={current_lesson[0].lessons_note}
            />
          }
          questions={current_lesson[0].questions}
        />
      </div>
    );
  }
}

export default Notes;
