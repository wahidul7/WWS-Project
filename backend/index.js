// Import necessary modules
import express from "express"; // Express framework for handling server and routing
import mysql from "mysql"; // MySQL module for database connection
import cors from "cors"; // CORS module for handling Cross-Origin Resource Sharing

const app = express(); // Create an Express application

// Configure MySQL database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "test",
});

app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors()); // Middleware to enable CORS

// Define a basic route
app.get("/", (req, res) => {
  res.json("hello this is backend");
});

// Define a route to get news from the database
app.get("/news", (req, res) => {
  const q = "SELECT * FROM news"; // Query to fetch all news
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data); // Send the fetched data as JSON response
  });
});

// Define a route to handle contact form submissions
app.post("/contact", async (req, res) => {
  const { name, email, phone, message } = req.body; // Extract data from the request body

  // Store contact data in MySQL
  const query =
    "INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)";
  db.query(query, [name, email, phone, message], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    console.log("Data saved in MySQL");
  });

  // Send contact data via Web3Forms
  try {
    const formData = {
      name,
      email,
      phone,
      message,
      access_key: "5c2b4393-132c-4f8c-ae20-13e0ebbdbdd8", // Access key for Web3Forms
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

// Start the server and listen on port 8800
app.listen(8800, () => {
  console.log("Backend Connection Successful!");
});
