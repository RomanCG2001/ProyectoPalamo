const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
		this.parentElement.classList.add('is-active')
	})
})

var hambi = document.querySelector(".hamb");
var navList = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");

hambi.addEventListener("click", function(){
    this.classList.toggle("click");
    navList.classList.toggle("open");
})