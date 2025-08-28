import express from "express";
import cors from "cors";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Temporary in-memory storage
let users = [];

// GET endpoint to fetch all users
app.get("/api/users", (req, res) => {
  res.json(users);
});

// POST endpoint to add a new user (now /api/adduser)
app.post("/api/adduser", (req, res) => {
  const { name, email } = req.body;

  // Basic validation
  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  // Add user to the array
  users.push({ name, email });

  // Send back the updated users array
  res.status(201).json({ message: "User added successfully", users });
});

// Start the server
app.listen(3000, () => {
  console.log("✔ Server running at http://localhost:3000");
});