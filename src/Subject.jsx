import React, { Component } from "react";

class Subject extends Component {
  render() {
    const { name, grade, subject } = this.props.match.params;

    return (
      <div className="container-fluid">
        <h1>Subject Component</h1>
        <h2>{`${name}: Render Notes here for ${subject} subject of grade ${grade}`}</h2>
      </div>
    );
  }
}

export default Subject;
