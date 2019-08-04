import React, { Component } from "react";
import QuizPaper from "./quiz_paper";

class Quiz extends Component {
  state = {
    questions: [
      {
        q: "Question1 is my question number one, more text if needed",
        o: ["one", "two", "three", "four"],
        a: "one"
      },
      { q: "Question2", o: ["one", "two", "three", "four"], a: "one" },
      { q: "Question3", o: ["one", "two", "three", "four"], a: "one" },
      { q: "Question4", o: ["one", "two", "three", "four"], a: "one" },
      { q: "Question5", o: ["one", "two", "three", "four"], a: "one" }
    ],
    current_index: 0,
    current_userAnswer: ""
  };

  handleNext = index => {
    const { questions, current_index } = this.state;
    let next = 0;
    if (current_index < questions.length - 1) {
      next = index + 1;
      console.log("next:" + next);
      this.setState({ current_index: next, current_userAnswer: "" });
    }
  };

  handleSelect = userAnswer => {
    this.setState({ current_userAnswer: userAnswer });
  };

  renderAnswer() {
    const { questions, current_userAnswer, current_index } = this.state;
    if (current_userAnswer === questions[current_index].a)
      return <h5>Your answer "{current_userAnswer}" is Correct</h5>;
    else if (current_userAnswer === "") return <h5>Select the answer</h5>;
    else {
      return <h5>Your answer "{current_userAnswer}" is Incorrect</h5>;
    }
  }
  render() {
    const { questions, current_index } = this.state;

    return (
      <div>
        <QuizPaper
          question={questions[current_index].q}
          options={questions[current_index].o}
          answer={questions[current_index].a}
          index={current_index}
          optionSelect={this.handleSelect}
          onNext={this.handleNext}
        />
        {this.renderAnswer()}
      </div>
    );
  }
}

export default Quiz;
