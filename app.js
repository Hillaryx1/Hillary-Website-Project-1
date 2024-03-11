const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navLinks");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    overlay.classList.toggle("open"); 
});


