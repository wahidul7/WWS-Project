import express from "express";
import mysql from "mysql";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "test",
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("hello this is backend");
});

app.get("/news", (req, res) => {
  const q = "SELECT * FROM news";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "pkwahid71@gmail.com",
    pass: "71@wahid",
  },
});

app.post("/contact", (req, res) => {
  const { name, email, phone, message } = req.body;

  // Store in MySQL
  const query =
    "INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)";
  db.query(query, [name, email, phone, message], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    console.log("Data saved in MySQL");

    // Send email
    const mailOptions = {
      from: "pkwahid71@gmail.com",
      to: "bhusalsameer006@gmail.com",
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send(error.toString());
      }
      console.log("Email sent: " + info.response);
      res.send("Form submitted successfully");
    });
  });
});

app.listen(8800, () => {
  console.log("Backend Connection Successful!");
});
