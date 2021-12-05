let main = document.querySelector(".main");
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let list = document.querySelectorAll(".navigation li");

toggle.onclick = function(){
    main.classList.toggle('active');
    navigation.classList.toggle('active');
}

function activeLink() {
  list.forEach((item) => item.classList.remove("hovered"));
  this.classList.add("hovered");
}
list.forEach((item) => item.addEventListener("mouseover", activeLink));
