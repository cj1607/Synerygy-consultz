const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const rootDir = require("./utils/path");

// const adminRoutes = require("./routes/admin");
const homeRoutes = require("./routes/home");

const app = express();

app.use(express.static(path.join(rootDir, "public")));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(homeRoutes);

app.use((req, res) => {
  res.status(404).send("<h1> Page Not Found </h1>");
});

app.listen(4000, () => {
  console.log("listening on port 4000");
});
