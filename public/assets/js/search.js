//get to api/search route
//submitting search fields as an object
//use a get in the controller to submit the query using json from api/search route

$("#searchBtn").on("click", function () {
  const keyword = $("#keyword").val();
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
  fetch("/api/search" + queryString);
  console.log("QUERY STRING: ", queryString);
});
