import React, { Component } from "react";
import homeimage from "../images/Home_image.jpg";
class Home extends Component {
  render() {
    return (
      <div>
        <img id="home_image" src={homeimage} className="img-fluid" alt="" />
        <div className="container">
          <div className="row">
            <div className="col">One of three columns</div>
            <div className="col">One of three columns</div>
            {/* <div className="col">One of three columns</div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
