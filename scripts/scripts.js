// function updateTextDisplay() {
//   const headingSize = parseInt(document.getElementById("number").value);
//   const text = document.getElementById("text").value;
//   const userTextAnswer = document.getElementById("user-answer");

//   if (headingSize >= 1 && headingSize <= 6) {
//     const heading = document.createElement("h" + headingSize);
//     heading.textContent = text;
//     userTextAnswer.innerHTML = "";
//     userTextAnswer.appendChild(heading);
//   } else {
//     userTextAnswer.innerHTML = "Please choose a number between 1 and 6.";
//   }
// }

// document.getElementById("number").addEventListener("input", updateTextDisplay);
// document.getElementById("text").addEventListener("input", updateTextDisplay);

//2
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
