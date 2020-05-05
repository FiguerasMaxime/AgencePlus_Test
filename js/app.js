const arrow = document.getElementById("arrow");
const form = document.getElementById("form");
const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");


arrow.addEventListener("click", function(){
    arrow.classList.toggle("toggle");
    form.classList.toggle("clicked")
})

burger.addEventListener("click", function(){
    navLinks.classList.toggle("open");
    burger.classList.toggle("close");
})