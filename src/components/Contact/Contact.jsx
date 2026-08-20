import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setStatus("sending");

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setStatus("sent");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setStatus("");
    }, 3000);
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Get in Touch</h2>
      <h3>Have a project in mind?</h3>

      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>

          <input
            type="text"
            placeholder="Your Name"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />

          {errors.name && <span className="error-msg">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>

          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />

          {errors.email && (
            <span className="error-msg">{errors.email}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject:</label>

          <select
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
          >
            <option value="">Select an option</option>
            <option value="web development">Web Development</option>
            <option value="data science">Data Science</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>

          <textarea
            name="message"
            id="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          />

          {errors.message && (
            <span className="error-msg">{errors.message}</span>
          )}
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending"
            ? "Sending..."
            : status === "sent"
            ? "✅ Message sent"
            : "Send Message"}
        </button>
      </form>
    </section>
  );
}

export default Contact;