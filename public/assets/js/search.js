//get to api/search route
//submitting search fields as an object
//use a get in the controller to submit the query using json from api/search route

$("#searchBtn").on("click", function (event) {
  event.preventDefault()
  const keyword = $("#keyword").val();
  console.log("search button click on handlebars")
  const diffArr = [];
  const diffs = [...$("#difChoices input:checked")];
  diffs.forEach((diff) => diffArr.push(diff.value));
  console.log(diffs);
  let queryString = "?";
  if (keyword !== "") {
    queryString += "keyword=" + keyword;
  }
  if (diffArr.length > 0 && queryString !== "?") {
    diffArr.forEach((diff) => (queryString += "&difficulty=" + diff));
  } else if (diffArr.length > 0) {
    diffArr.forEach((diff) => (queryString += "difficulty=" + diff));
  }
  $.ajax({
    url: "/api/search" + queryString,
    method: "GET",
    // data: { activity: JSON.stringify(activity) },
    // dataType: "json",
})
.then(function(pose){$("#pose").append(pose)});

  
  console.log("QUERY STRING: ", queryString);
});
//const passport = require("../config/passport");
// const posture = {
//   all: function (cb) {
//     passport.all("poses", function (res) {
//       cb(res);
//     });
//   },
//   // The variables cols and vals are arrays.
//   create: function (cols, vals, cb) {
//     passport.create("poses", cols, vals, function (res) {
//       cb(res);
//     });
//   },
//   update: function (objColVals, condition, cb) {
//     passport.update("poses", objColVals, condition, function (res) {
//       cb(res);
//     });
//   }
// };
// // Export the database functions for the controller (Controller.js).
// module.exports = posture;


// $.ajax({
//   "method" :"GET",
//   url:"poses/:id'"
// })


// $("#searchBtn").on("click", function () {
//     const keyword = $("#keyword").val()
//     const diffArr = [];
//     const diffs = [...$("#difChoices input:checked")];
//     diffs.forEach((diff) => diffArr.push(diff.value));
//     console.log(diffs);
//     console.log(diffArr)
//     let queryString = "/api/search?";
//     // if keyword exists
//     if (keyword !== "") {
//         queryString += "keyword=" + keyword
//     }
//     for (let i = 0; i < diffArr.length; i++) {
//         if(keyword === "" && i === 0) {
//             queryString += "difficulty=" + diffArr[i]
//         } else {
//             queryString += "&difficulty=" + diffArr[i]
//         }
        
//     }
//     // if difficulty.length is more than 0, put & in front of each 
//     //if (keyword === "") {
//      //   diffArr.forEach(diff => queryString += "&difficulty=" + diff)
//     //} else {
//       //  diffArr.forEach(diff => queryString += "difficulty=" + diff)
//     //}
//     fetch(queryString);
//     console.log(queryString);
//   });

//const passport = require("../config/passport");
//const posture = {
 // all: function (cb) {
   // passport.all("poses", function (res) {
     // cb(res);
   // });
  //},
  // The variables cols and vals are arrays.
  //create: function (cols, vals, cb) {
    //passport.create("poses", cols, vals, function (res) {
      //cb(res);
    //});
  //},
  //update: function (objColVals, condition, cb) {
    //passport.update("poses", objColVals, condition, function (res) {
      //cb(res);
    //});
  //}
//};
// Export the database functions for the controller (Controller.js).
//module.exports = posture;

