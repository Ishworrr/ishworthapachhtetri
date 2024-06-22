// Import required packages
const express = require("express");
const cors = require("cors");

// Create an instance of Express app
const app = express();

// Import environment variables (optional)
require("dotenv").config();

// Set up middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000", // Replace with your frontend URL
    credentials: true, // Allow cookies to be sent with requests
  })
);

// Import routes
const userRoutes = require("./routes/userRoutes"); // Example: Replace with your actual routes file

// Use routes
app.use("/user", userRoutes); // Example: Mount userRoutes under /user prefix

// Define a default route
app.get("/", (req, res) => {
  res.send("Welcome to the backend server"); // Replace with your desired response
});

// Define a fallback route for 404 errors
app.use((req, res) => {
  res.status(404).send("Page not found");
});

// Define the port and start the server
const PORT = process.env.PORT || 9000; // Use the specified port or default to 9000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
