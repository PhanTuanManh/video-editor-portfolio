import { useRef, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "../assets/styles/Contact.scss"; // Changed from .scss to .css

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef<HTMLFormElement>(null); // Added proper type for form ref

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setNameError(name === "");
    setEmailError(email === "");
    setMessageError(message === "");

    // If you want to use emailjs later, uncomment and type properly:
    // if (form.current && !nameError && !emailError && !messageError) {
    //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    //     .then((result) => {
    //       console.log(result.text);
    //     }, (error) => {
    //       console.log(error.text);
    //     });
    // }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>
            Got a project waiting to be realized? Let's collaborate and make it
            happen!
          </p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={sendEmail} // Added proper form submission handler
          >
            <div className="form-flex">
              <TextField
                required
                id="outlined-required-name"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setNameError(false);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
                fullWidth
              />
              <TextField
                required
                id="outlined-required-contact"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError(false);
                }}
                error={emailError}
                helperText={
                  emailError ? "Please enter your email or phone number" : ""
                }
                fullWidth
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static-message"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                setMessageError(false);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
              fullWidth
            />
            <Button
              type="submit" // Changed to type="submit" for proper form handling
              variant="contained"
              endIcon={<SendIcon />}
            >
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
