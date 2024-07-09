import React, { useState } from "react";
import { useRef } from "react";

function ContactForm() {
  const formRef = useRef();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState();
  const [error, setError] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);

    if (!name) {
      setError("Please enter your Name.");
      return;
    }

    if (!email) {
      setError("Please enter your Email.");
      return;
    }

    if (!phone) {
      setError("Please enter your Phone Number.");
      return;
    }

    if (!message) {
      setError("Don't forget your Message!");
      return;
    }

    setError("");

    console.log(data);
  }

  return (
    <div className="block">
      <h2 className="heading">Get in Toch</h2>
      <form onSubmit={handleSubmit} ref={formRef} className="text-left form">
        <div className=" md:flex justify-between gap-24">
          <div className="w-full">
            <div className="form-group">
              <label className="form-label" htmlFor="name">
                Your name
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                className="input"
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Your email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="input"
                type="text"
                name="email"
                id="email"
                placeholder="Your email"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="phone">
                Your phone number
              </label>
              <input
                onChange={(e) => setPhone(e.target.value)}
                className="input"
                type="text"
                name="phone"
                id="phone"
                placeholder="Your phone number"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="form-group">
              <label className="form-label" htmlFor="message">
                Your Message
              </label>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                className="input resize-none"
                name="message"
                id="message"
                placeholder="Type your message"
                rows={10}
              ></textarea>
            </div>
          </div>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button className="bg-black text-white px-6 py-2 rounded-md w-full mt-8 hover:text-black hover:bg-white hover:ring-2 hover:ring-black hover:ring-inset md:w-[35%]">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
