// alert
function message() {
    alert("Selamat di Website saya")
}

// Humberger button toggler
hamberger = document.querySelector(".hamberger");
nav = document.querySelector("nav");
hamberger.onclick = function () {
    nav.classList.toggle("active");
}