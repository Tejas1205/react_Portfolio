const express = require("express");
const cors = require("cors");

const app = express();

// ✅ Enable CORS for React frontend
app.use(cors({ origin: "http://localhost:5173" }));

app.get("/views", (req, res) => {
  res.json({ views: 7 }); // Example response
});

app.listen(5000, () => {
  console.log("✅ Server running on port 5000");
});
