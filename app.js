const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navLinks");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-btn");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    overlay.classList.toggle("open"); 
});

closeBtn.addEventListener("click", () => { // Add an event listener to the close button
    navLinks.classList.remove("open");
    overlay.classList.remove("open");
});



