import React, { Component } from "react";
import QuizPaper from "./quiz_paper";

class Quiz extends Component {
  render() {
    return this.props.questions.map(question => (
      <QuizPaper
        key={this.props.questions.indexOf(question)}
        question={question.q}
        options={question.o}
        answer={question.a}
      />
    ));
  }
}

export default Quiz;
