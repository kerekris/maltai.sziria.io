var hambi = document.getElementById("hamburger");
var menu = document.getElementById("hamburgerMenu");

hambi.onclick = function(){
if (menu.style.display == "none")
{menu.style.display = "block";}
else {menu.style.display = "none";}
}

menu.onclick = function(){
menu.style.display = "none";
}

