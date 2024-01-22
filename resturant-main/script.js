var menuBtn = document.getElementById("menuBtn");
var sidenav = document.getElementById("sidenav");
var menu = document.getElementById("menu");
sidenav.style.right = "-250px";
menuBtn.onclick = function () {
    if(sidenav.style.right == "-250px")
    {
        sidenav.style.right = "0";
        menu.src="pic/close.png";
    }
    else {
        sidenav.style.right= "-250px";
        menu.src ="pic/MenuIc.png";
    }
}
// All animations will take exactly 500ms
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
    speedAsDuration: true
});