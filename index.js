const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/profile", handleProfile);

function handleProfile(req, res) {
  res.send("You are on my profile");
}
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
