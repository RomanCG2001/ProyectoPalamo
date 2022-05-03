var hambi = document.querySelector(".hamb");
var navList = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");

hambi.addEventListener("click", function(){
    this.classList.toggle("click");
    navList.classList.toggle("open");
})
