const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const port = process.env.PORT || 3000;

//public static path
const html_Path = path.join(__dirname, "../public");
const static_Path = path.join(__dirname, "../views");
const template_Path = path.join(__dirname, "../templetes/views");
const partial_Path = path.join(__dirname, "../templetes/partials");

app.set("view engine", "hbs");
app.set("views", template_Path);
hbs.registerPartials(partial_Path);
app.use(express.static(html_Path));

//Routing
app.get("/", (req, res) => {
  res.render("index");
  //res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});

app.get("*", (req, res) => {
  res.render("404", {
    errorMsg: "Opps! Page Not Found",
  });
});

app.listen(port, () => {
  console.log(`running port : ${port}`);
});
