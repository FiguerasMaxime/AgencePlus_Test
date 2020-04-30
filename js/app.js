const arrow = document.getElementById("arrow");
const form = document.getElementById("form");

arrow.addEventListener("click", function(){
    arrow.classList.toggle("toggle");
    form.classList.toggle("clicked")
})
