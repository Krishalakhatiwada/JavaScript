// Write a JavaScript program to highlight the capital words of the following paragraph,
// on mouse over the div which contains this paragraph.

// WE have just started THIS section for the USERS (beginner to intermediate) who want to work 
//with various JAVASCRIPT problems and write scripts ONLINE to test their JavaScript skill.

document.getElementById('title').style.fontWeight="bold";
document.body.style.backgroundColor="SkyBlue";

// document.getElementById('para').addEventListener("mouseover",function(){

// });


// Get a reference to the div containing the paragraph
const paragraphContainer = document.getElementById("para");

// Function to highlight capital words in a paragraph
function highlightCapitalWords(paragraphElement) {
  const words = paragraphElement.textContent.split(" ");
  const highlightedWords = words.map(word => {
    if (/^[A-Z]/.test(word)) {
      return '<span class="highlight">' + word + '</span>';
    }
    return word;
  });
  paragraphElement.innerHTML = highlightedWords.join(" ");
}

// Function to remove highlighting from a paragraph
function removeHighlighting(paragraphElement) {
  paragraphElement.innerHTML = paragraphElement.textContent;
}

// Add a mouseover event listener to the paragraph container
paragraphContainer.addEventListener("mouseover", function(event) {
  if (event.target.tagName === "P") {
    const paragraph = event.target;
    highlightCapitalWords(paragraph);
  }
});

// Add a mouseout event listener to the paragraph container
paragraphContainer.addEventListener("mouseout", function(event) {
  if (event.target.tagName === "P") {
    const paragraph = event.target;
    removeHighlighting(paragraph);
  }
});

