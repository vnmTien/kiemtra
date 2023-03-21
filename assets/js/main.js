var menu = document.getElementById("menu1");
var navs = menu.getElementsByClassName("nav");
console.log('navs', navs);
for (var i = 0; i < navs.length; i++) {
  navs[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active1");
  current[0].className = current[0].className.replace(" active1", "");
  console.log('cur-->', current[0]);
  this.className += " active1";
  });
}


// menu dọc và button menu thay đổi của header
function navMobiandChangeBtn(x) {
  var y = document.getElementById("menu2");
  if (y.style.display === "block") {
    x.classList.toggle("change");
    y.style.display = "none";
  } else {
    x.classList.toggle("change");
    y.style.display = "block";
  }
}