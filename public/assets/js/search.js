//get to api/search route
//submitting search fields as an object
//use a get in the controller to submit the query using json from api/search route

$("#searchBtn").on("click", function () {
    const keyword = $("#keyword").val()
    const diffArr = [];
    const diffs = [...$("#difChoices input:checked")];
    diffs.forEach((diff) => diffArr.push(diff.value));
    console.log(diffs);
    console.log(diffArr)
    let queryString = "/api/search?";
    // if keyword exists
    if (keyword !== "") {
        queryString += "keyword=" + keyword
    }
    for (let i = 0; i < diffArr.length; i++) {
        if(keyword === "" && i === 0) {
            queryString += "difficulty=" + diffArr[i]
        } else {
            queryString += "&difficulty=" + diffArr[i]
        }
        
    }
    // if difficulty.length is more than 0, put & in front of each 
    //if (keyword === "") {
     //   diffArr.forEach(diff => queryString += "&difficulty=" + diff)
    //} else {
      //  diffArr.forEach(diff => queryString += "difficulty=" + diff)
    //}
    fetch(queryString);
    console.log(queryString);
  });
