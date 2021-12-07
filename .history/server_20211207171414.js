const express = require("express");
const app = express();

const app = express();
const port = 3000;

app.get("/login", (req, res) => {
  res.send({
    token: "test123",
  });
});

app.listen(port, () => {
  console.log(`API is running on http://localhost:${port}/login`);
});
