const btn = document.getElementById("changColor");
btn.addEventListener('click', change);

function change() {
    document.querySelector('.header').style.color = "red";
}
