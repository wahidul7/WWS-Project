import express from "express";
import mysql from "mysql";
import cors from "cors";

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

app.post("/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Store in MySQL
  const query =
    "INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)";
  db.query(query, [name, email, phone, message], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    console.log("Data saved in MySQL");
  });

  // Send data via Web3Forms
  try {
    const formData = {
      name,
      email,
      phone,
      message,
      access_key: "5c2b4393-132c-4f8c-ae20-13e0ebbdbdd8",
    };
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    const resData = await response.json();

    if (resData.success) {
      console.log("Email sent successfully");
      return res.status(200).send({ message: "Success" });
    } else {
      console.log("Failed to send email");
      return res.status(500).send({ message: "Failed to send email" });
    }
  } catch (error) {
    console.log("Error sending email:", error);
    return res.status(500).send({ message: "Error sending email" });
  }
});

app.listen(8800, () => {
  console.log("Backend Connection Successful!");
});
