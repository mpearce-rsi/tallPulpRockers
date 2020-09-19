const path = require("path");

const isAuthenticated = require("../config/middleware/isAuthenticated");
// Routes
// =============================================================
module.exports = function (app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      return res.redirect("/members");

      // res.render("members")
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      return res.redirect("/search");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  // app.get("/members", isAuthenticated, function (req, res) {
  //   res.sendFile(path.join(__dirname, "../public/members.html"));
  // });

  app.get("/search", function (req, res) {
    // console.log("HTML get singup url ");
    //Render the index handle bar
    res.render("index");
});
  // app.get("/search", isAuthenticated, function (req, res) {
  //   res.sendFile(path.join(__dirname, "../public/testhtml.html"));
  //   res.render("index");
  // });
};

