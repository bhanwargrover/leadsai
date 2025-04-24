import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import DOMPurify from "dompurify";
import { fadeIn } from "../../variants"; // Adjust path if needed
import { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = DOMPurify.sanitize(value);
    setForm((prevForm) => ({
      ...prevForm,
      [name]: sanitizedValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, subject, message } = form;

    // Simple validations
    if (!name || !email || !subject || !message) {
      alert("All fields are required.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://leadsai-1.onrender.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });
      console.log("Sending request to:", "http://localhost:5000/send-email");

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      alert("Thank you! Your message was sent.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Network or server error:", error.message || error);
      alert("Network error: " + (error.message || "Try again later."));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-16 sm:py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px] mx-4 sm:mx-auto">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12 text-3xl sm:text-4xl pt-4"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            autoComplete="off"
          >
            <div className="flex flex-col sm:flex-row sm:gap-6 w-full">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                className="input mb-4 sm:mb-0 w-full sm:w-[48%]"
                disabled={loading}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={form.email}
                onChange={handleChange}
                className="input w-full sm:w-[48%]"
                disabled={loading}
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className="input w-full"
              disabled={loading}
              required
            />
            <textarea
              name="message"
              placeholder="Message..."
              value={form.message}
              onChange={handleChange}
              className="textarea w-full"
              disabled={loading}
              required
              rows={4}
            />
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group relative w-full sm:w-auto"
              disabled={loading}
            >
              <span
                className={`transition-all duration-500 ${
                  loading
                    ? "opacity-0 -translate-y-full"
                    : "group-hover:-translate-y-[120%] group-hover:opacity-0"
                }`}
              >
                {loading ? "Sending..." : "Let's talk"}
              </span>
              <BsArrowRight
                className={`absolute text-[22px] transition-all duration-300 ${
                  loading
                    ? "opacity-0"
                    : "group-hover:opacity-100 group-hover:translate-y-0 -translate-y-full opacity-0"
                }`}
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
