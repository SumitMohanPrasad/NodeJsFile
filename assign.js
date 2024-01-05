function convertToPlain(html){

  // Create a new div element
  var tempDivElement = document.createElement("div");

  // Set the HTML content with the given value
  tempDivElement.innerHTML = html;

  // Retrieve the text property of the element 
  return tempDivElement.textContent || tempDivElement.innerText || "";
}

var htmlString= "<div><h1>Bears Beets Battlestar Galactica </h1>\n<p>Quote by Dwight Schrute</p></div>";


console.log(convertToPlain(htmlString));
// Expected Result:
// Bears Beets Battlestar Galactica 
// Quote by Dwight Schrute