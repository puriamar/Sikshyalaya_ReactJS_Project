import React, { Component } from "react";
import homeimage from "../images/Home_image.jpg";
import Button from "./Buttons";
//import { Button, Collapse } from "react-bootstrap";

class Home extends Component {
  state = {
    value: [
      { id: 0, label: "School" },
      { id: 1, label: "High-School" }
      // { id: 2, label: "Undergrad" }
    ]
  };

  onClick = value => {
    this.props.history.push("/School/" + value);
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <img id="home_image" src={homeimage} className="img-fluid" alt="" />
          <div id="paper_container" className="container">
            <Button value={this.state.value} onClick={this.onClick} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
