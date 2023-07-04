var images = ["dragonMing.jpeg", "DinastiaMing.jpg", "politicaExteriorMing.jpeg", "Comercio.jpeg", "Arte.jpeg", "GrandesObrasMing.jpeg", "ArtedelaGuerra.jpeg"];
var indice = 0;

var carrucel = document.querySelectorAll(".ima");
var prev = document.getElementById("anterior");
var next = document.getElementById("siguiente");
prev.addEventListener("click", patras);
next.addEventListener("click", palante);

function actualizar() {
  for (var i = 0; i < carrucel.length; i++) {
    carrucel[i].style.backgroundImage = "url('" + images[i] + "')";
    carrucel[i].style.display = (i === indice) ? "block" : "none";
  }
}

function patras() {
  indice--;
  if (indice < 0) {
    indice = carrucel.length - 1;
  }
  actualizar();
}

function palante() {
  indice++;
  if (indice >= carrucel.length) {
    indice = 0;
  }
  actualizar();
}

actualizar();
setInterval(palante, 3000);