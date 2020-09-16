//get to api/search route
//submitting search fields as an object
//use a get in the controller to submit the query using json from api/search route
const orm = require("../../../config/passport");
const posture = {
  all: function(cb) {
    orm.all("poses", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("poses", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("poses", objColVals, condition, function(res) {
      cb(res);
    });
  }
};
// Export the database functions for the controller (Controller.js).
module.exports = posture;