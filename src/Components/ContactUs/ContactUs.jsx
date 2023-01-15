import React from "react";
import Title from "../Title/Title";
import "./index.css";
const ContactUs = () => {
  return (
    <div className="contact_container" id="contact">
      <Title title="leave a request to be called" />
      <div className="inputs_holder">
        <div className="contact_input">
          <h3>your name</h3>
          <input
            type="text"
            name=""
            id=""
            placeholder="completed entry field"
          />
        </div>
        <div className="contact_input">
          <h3>your phone number</h3>
          <input type="tel" name="" id="" placeholder="+972-__-__-__-__" />
        </div>
        <div className="contact_input">
          <h3></h3>
          <button>send</button>
        </div>
      </div>
      <div className="contact_details">
        <p>
          {" "}
          by filling in the form you constent to the processing of personal data
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
