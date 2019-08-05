import React, { Component } from "react";

class QuizPaper extends Component {
  state = {
    answer: <div id="answer_alert" />
  };

  handleSelect = event => {
    if (event.currentTarget.value === this.props.answer)
      this.setState({
        answer: (
          <div id="answer_alert" className="alert alert-success" role="alert">
            Your Answer Is Correct!
          </div>
        )
      });
    else {
      this.setState({
        answer: (
          <div id="answer_alert" className="alert alert-danger" role="alert">
            Your Answer Is Incorrect!
          </div>
        )
      });
    }
  };

  renderAnswer() {
    if (this.state.userAnswer === this.props.answer)
      return (
        <div class="alert alert-success" role="alert">
          This is a success alert—check it out!
        </div>
      );
    else {
      return (
        <div class="alert alert-danger" role="alert">
          This is a success alert—check it out!
        </div>
      );
    }
  }
  render() {
    return (
      <div id="question_container" className="jumbotron jumbotron-fluid">
        <div className="container">
          <h6>{this.props.question}</h6>
          {this.props.options.map(option => (
            <p key={option} className="lead">
              {option}
            </p>
          ))}
          <select onChange={this.handleSelect} className="custom-select">
            <option>...Select Answer...</option>
            {this.props.options.map(option => (
              <option key={option}>{option}</option>
            ))}
          </select>
          {this.state.answer}
        </div>
      </div>
    );
  }
}

export default QuizPaper;
