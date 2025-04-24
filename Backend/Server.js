const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route to send email
app.post("/send-email", async (req, res) => {
  const { name, email, subject = "(No subject)", message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "grovernitin0428@gmail.com",
        pass: "vxrbnjcjmqlragyg", // Gmail App Password
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: "grovernitin0428@gmail.com",
      subject: `New message from ${name}: ${subject}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ error: "Failed to send email." });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
