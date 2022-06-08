import React, { useState } from "react";
import "./Contact.css";
import img55 from "../../assets/photos/IMG_4632.JPG";
import { db } from "../../server/firebase";
import firebase from "firebase";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sendMes, setSendMes] = useState(false);

  const senMessage = (e) => {
    e.preventDefault();
    db.collection("message").add({
      name,
      email,
      message,
      createAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setName("");
    setEmail("");
    setMessage("");
    setSendMes(true);
    setTimeout(() => {
      setSendMes(false);
    }, 2100);
  };

  const ctrlPlusEnter = (e) => {
    if (e.ctrlKey && e.keyCode === 13) {
      senMessage(e);
    }
  };

  return (
    <div className="contact">
      <h1 className="contact_title">Messages</h1>
      <div className="contact_container">
        <div className="contact_form">
          <form
            onSubmit={senMessage}
            onKeyDown={(e) => ctrlPlusEnter(e)}
            action=""
          >
            <div className="contact_formItem">
              <label htmlFor="">Your name:</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                type="text"
                placeholder="John Doe"
              />
            </div>
            <div className="contact_formItem">
              <label htmlFor="">Your email:</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="contact_formItem">
              <label htmlFor="">Message:</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="leave your message..."
                onke
                required
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <input
              disabled={!name || !email || !message}
              className="contact_btn"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
        <div className="contact_image">
          <img src={img55} alt="" />
        </div>
      </div>
      <div className={!sendMes ? "contact_modal anime" : "contact_modal"}>
        <p>Message is sent✅</p>
      </div>
    </div>
  );
}

export default Contact;
