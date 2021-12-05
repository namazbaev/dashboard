const main = document.querySelector(".main");
const viewAll = document.querySelector(".btn");
const toggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");
const list = document.querySelectorAll(".navigation li");

viewAll.onclick = function() {
  alert('All orders!')
}
toggle.onclick = function(){
    main.classList.toggle('active');
    navigation.classList.toggle('active');
}
function activeLink() {
  list.forEach((item) => item.classList.remove("hovered"));
  this.classList.add("hovered");
}
list.forEach((item) => item.addEventListener("mouseover", activeLink));
