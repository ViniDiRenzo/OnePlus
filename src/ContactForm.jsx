import { useState } from "react";

function ContactForm() {
  return (
    <>
      <div className="block" name="form">
        <h3 className="heading">Talk To Us</h3>
        <form className="form">
          <div className="form__section">
            {/* <div className="form__section"> */}
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your Name"
              required
            />
            {/* </div> */}
            {/* <div className="form__section"> */}
            <label htmlFor="email">Your Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your Email"
              required
            />
            {/* </div> */}
          </div>
          <div className="form__section">
            <label htmlFor="message">Your Message</label>
            <textarea
              name="message"
              id="message"
              cols="40"
              rows="10"
              placeholder="Type your Message"
              required
            ></textarea>
          </div>
          <button type="submmit" className="btn btn--send">
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
