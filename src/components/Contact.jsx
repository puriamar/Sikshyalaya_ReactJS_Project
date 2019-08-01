import React from "react";

import Joi from "joi-browser";
import Form from "./form";

class Contact extends Form {
  state = { data: { name: "", email: "", message: "" }, errors: {} };

  schema = {
    name: Joi.string().required(),
    message: Joi.string().required(),
    email: Joi.string()
      .required()
      .email()
  };

  doSubmit = () => {
    //call server
    console.log("submitted");
  };

  render() {
    return (
      <div className="container">
        <h1>Contact Us - Send message</h1>

        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("email", "Email")}
          {this.renderTextArea("message", "Message")}
          {this.renderButton("Send Message")}
        </form>
      </div>
    );
  }
}

export default Contact;
