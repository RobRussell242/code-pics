const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))); // 'public' contains HTML, CSS, JS

// Form handler
app.post("/submit", (req, res) => {
  const { name, email, message } = req.body;
  console.log("Form received:", name, email, message);
  res.send("Thank you for your message!");
});

// Server start
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
