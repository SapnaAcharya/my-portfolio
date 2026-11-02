import {
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import "../styles/Contact.css";

function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const subject = encodeURIComponent(
      `Portfolio Contact from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href =
      `mailto:YOUR_EMAIL@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact section-padding" id="contact">

      <div className="container">

        <div className="section-heading">

          <span>GET IN TOUCH</span>

          <h2>Let's Connect</h2>

          <p>
            I am interested in opportunities to contribute,
            learn and grow as a software developer.
            Feel free to reach out.
          </p>

        </div>

        <div className="contact-content">

          <div className="contact-information">

            <h3>Contact Information</h3>

            <p>
              Have an opportunity or want to discuss
              a software development project?
              I would be happy to connect.
            </p>

            <a href="mailto:YOUR_EMAIL@gmail.com">
              <Mail />
              YOUR_EMAIL@gmail.com
            </a>

            <a
              href="https://github.com/SapnaAcharya"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              GitHub Profile
            </a>

            <a
              href="https://linkedin.com/in/sapna-acharya12/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
              LinkedIn Profile
            </a>

            <div className="contact-location">
              <MapPin />
              Kathmandu, Nepal
            </div>

          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <h3>Send Me a Message</h3>

            <label htmlFor="name">Your Name</label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />

            <label htmlFor="email">Email Address</label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />

            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message..."
              required
            />

            <button type="submit">
              Send Message
              <Send size={17} />
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;