import React, { Component } from "react";

import NotesComponent from "./Notes_Component";

class Subject extends Component {
  state = {
    notes: [
      {
        grade: 6,
        subjects: [
          {
            subject: "Social Studies",
            lessons: [
              {
                topic: "One",
                lessons_note:
                  " 6 Social one The difference between a society and a community comes down to two main characteristics: size and interaction.  A community and a society can be any size that you want.  There isn't a minimum number of people needed for either (as long as you don't take extremes like 2-3 people).  What is generally understood as a key size difference is that a community is smaller than a society. The size factor is of secondary importance, if you ask me.  The level of interaction is more important.  A society could be huge, and span hundreds or thousands of miles.  The population of the United States could be considered a society the American society.Within that society though are many, many smaller communities."
              },
              {
                topic: "Two",
                lessons_note:
                  " 6 Social two The difference between a society and a community comes down to two main characteristics: size and interaction.  A community and a society can be any size that you want.  There isn't a minimum number of people needed for either (as long as you don't take extremes like 2-3 people).  What is generally understood as a key size difference is that a community is smaller than a society. The size factor is of secondary importance, if you ask me.  The level of interaction is more important.  A society could be huge, and span hundreds or thousands of miles.  The population of the United States could be considered a society the American society.Within that society though are many, many smaller communities."
              },
              {
                topic: "Three",
                lessons_note:
                  " 6 Social three The difference between a society and a community comes down to two main characteristics: size and interaction.  A community and a society can be any size that you want.  There isn't a minimum number of people needed for either (as long as you don't take extremes like 2-3 people).  What is generally understood as a key size difference is that a community is smaller than a society. The size factor is of secondary importance, if you ask me.  The level of interaction is more important.  A society could be huge, and span hundreds or thousands of miles.  The population of the United States could be considered a society the American society.Within that society though are many, many smaller communities."
              }
            ]
          },
          {
            subject: "Math",
            lessons: [
              {
                topic: "One",
                lessons_note:
                  " 6 Mathematics one The difference between a society and a community comes down to two main characteristics: size and interaction.  A community and a society can be any size that you want.  There isn't a minimum number of people needed for either (as long as you don't take extremes like 2-3 people).  What is generally understood as a key size difference is that a community is smaller than a society. The size factor is of secondary importance, if you ask me.  The level of interaction is more important.  A society could be huge, and span hundreds or thousands of miles.  The population of the United States could be considered a society the American society.Within that society though are many, many smaller communities."
              },
              {
                topic: "Two",
                lessons_note:
                  " 6 Mathematics two The difference between a society and a community comes down to two main characteristics: size and interaction.  A community and a society can be any size that you want.  There isn't a minimum number of people needed for either (as long as you don't take extremes like 2-3 people).  What is generally understood as a key size difference is that a community is smaller than a society. The size factor is of secondary importance, if you ask me.  The level of interaction is more important.  A society could be huge, and span hundreds or thousands of miles.  The population of the United States could be considered a society the American society.Within that society though are many, many smaller communities."
              }
            ]
          }
        ]
      },
      {
        grade: 7,
        subjects: [
          {
            subject: "Social Studies",
            lessons: [
              {
                topic: "One",
                lessons_note:
                  " 7 Social one The difference between a society and a community comes down to two main characteristics: size and interaction.  A community and a society can be any size that you want.  There isn't a minimum number of people needed for either (as long as you don't take extremes like 2-3 people).  What is generally understood as a key size difference is that a community is smaller than a society. The size factor is of secondary importance, if you ask me.  The level of interaction is more important.  A society could be huge, and span hundreds or thousands of miles.  The population of the United States could be considered a society the American society.Within that society though are many, many smaller communities."
              },
              {
                topic: "Two",
                lessons_note:
                  " 7 Social two The difference between a society and a community comes down to two main characteristics: size and interaction.  A community and a society can be any size that you want.  There isn't a minimum number of people needed for either (as long as you don't take extremes like 2-3 people).  What is generally understood as a key size difference is that a community is smaller than a society. The size factor is of secondary importance, if you ask me.  The level of interaction is more important.  A society could be huge, and span hundreds or thousands of miles.  The population of the United States could be considered a society the American society.Within that society though are many, many smaller communities."
              }
            ]
          },
          {
            subject: "Math",
            lessons: [
              {
                topic: "One",
                lessons_note:
                  " 7 Mathematics one The difference between a society and a community comes down to two main characteristics: size and interaction.  A community and a society can be any size that you want.  There isn't a minimum number of people needed for either (as long as you don't take extremes like 2-3 people).  What is generally understood as a key size difference is that a community is smaller than a society. The size factor is of secondary importance, if you ask me.  The level of interaction is more important.  A society could be huge, and span hundreds or thousands of miles.  The population of the United States could be considered a society the American society.Within that society though are many, many smaller communities."
              },
              {
                topic: "Two",
                lessons_note:
                  " 7 Mathematics two The difference between a society and a community comes down to two main characteristics: size and interaction.  A community and a society can be any size that you want.  There isn't a minimum number of people needed for either (as long as you don't take extremes like 2-3 people).  What is generally understood as a key size difference is that a community is smaller than a society. The size factor is of secondary importance, if you ask me.  The level of interaction is more important.  A society could be huge, and span hundreds or thousands of miles.  The population of the United States could be considered a society the American society.Within that society though are many, many smaller communities."
              }
            ]
          }
        ]
      }
    ]
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
          <NotesComponent key={note.subject} lessons={note.lessons} />
        ))}
      </div>
    );
  }
}

export default Subject;
