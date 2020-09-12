const express = require('express');
const session = require('express-session');
// Requiring passport as we've configured it
const path = require('path');
const passport = require('./config/passport');

const PORT = process.env.PORT || 8080;
const db = require('./models');

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, '/public/assets')));
app.use(express.static(path.join(__dirname, '/models')));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({ secret: 'just any words', resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Set Handlebars.
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them.
const routes = require('./controllers/pose_controller.js');
// require('./routes/html-routes.js')(app);
require('./routes/api-routes.js')(app);
require("./routes/html-routes.js")(app);
// app.use(routes);

// Start our server so that it can begin listening to client requests.

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log('Server listening on: http://localhost:' + PORT);
  });
});
