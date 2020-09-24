import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import '../style/contact.css'

const Contact = ({set, props}) => {

  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const message = useRef();

  const [emailSent, setEmailSent] = useState(false);

  const handleInputClick = (elem) => {
    elem.target.style.border = "none";
  }

  const handleMouseLeave = (elem) => {
    if (("  " + elem.target.placeholder) !== (elem.target.name + " can't be empty")) {
      elem.target.placeholder = elem.target.name;
    }
  }

  const handleSendingEmail = (e) => {
    e.preventDefault();
    console.log("Should be sending email");

    let emptyField = false;
    if (firstName.current.value === "") {
      emptyField = true;
      firstName.current.style.border = "2px solid red";
      firstName.current.placeholder = "First Name can't be empty";
    }
    if (lastName.current.value === "") {
      emptyField = true;
      lastName.current.style.border = "2px solid red";
      lastName.current.placeholder = "Last Name can't be empty";
    }
    if (email.current.value === "") {
      emptyField = true;
      email.current.style.border = "2px solid red";
      email.current.placeholder = "Email can't be empty";
    }
    if (message.current.value === "") {
      emptyField = true;
      message.current.style.border = "2px solid red";
      message.current.placeholder = "Message can't be empty";
    }

    if (emptyField) return;

    setEmailSent(true);

    emailjs.send("service_66sbl9u","template_epsqujg",{
      first_name: firstName.current.value,
      last_name: lastName.current.value,
      email: email.current.value,
      message: message.current.value,
    }, "user_OAbJrXNbQNX2IyGb8TPqX")
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });

  }

  return (
    <>
      {
        !emailSent
        ?  
        <div id="contactPage">
          <div id="contactInfo">
          <a href="https://github.com/jesse10klein" target="_blank" rel="noopener noreferrer" className="icon hoverIcon">
            <img src="./github-icon.png" alt="couldn't be loaded"></img>
            <h2>Github</h2>
          </a>
          <a href="https://www.linkedin.com/in/jesse-klein-8a5794109/" target="_blank" rel="noopener noreferrer" className="icon hoverIcon">
            <img src="./linkedin.png" alt="couldn't be loaded"></img>
            <h2>LinkedIn</h2>
          </a>
          <div className="icon staticIcon">
            <img src="./gmail.png" alt="couldn't be loaded"></img>
            <h2>jesse10klein@gmail.com</h2>
          </div>
          <div className="icon staticIcon">
            <img src="./telephone.png" alt="couldn't be loaded"></img>
            <h2>0480 298 213</h2>
          </div>
          
        </div>
        <form id="form" onSubmit={handleSendingEmail}>
          <h3>Get in touch</h3>
          <div className="input">
            <input ref={firstName} type='text' name="  First Name" placeholder="  First Name" onClick={handleInputClick} onMouseLeave={handleMouseLeave}></input>
          </div>
          <div className="input">
            <input ref={lastName} type='text' name="  Last Name" placeholder="  Last Name" onClick={handleInputClick} onMouseLeave={handleMouseLeave}></input>
          </div>
          <div className="input">
            <input ref={email} type='text' name="  Email" placeholder="  Email" onClick={handleInputClick} onMouseLeave={handleMouseLeave}></input>
          </div>
          <div className="input">
            <textarea ref={message} placeholder="  Message" name="  Message" onClick={handleInputClick} onMouseLeave={handleMouseLeave}></textarea>
          </div>
          <button id="submitButton">Send Email</button>
        </form>
      </div>
        :
        
        <div id="emailSent">
          <h1>Your response is on its way!</h1>
          <img id="mail-sending" src="./mail.gif" alt="couldn't be loaded"></img>
          <h3>I'll get back to you as soon as possible</h3>
        </div>
      }
   </>
  );
};

export default Contact;
