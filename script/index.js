
var containerMapa = window.document.getElementById("containerMapa");

var NumberClicks = 0;

function createCircle() {

    let randomTop = Math.floor(Math.random() * 80 + 10);
    let randomLeft = Math.floor(Math.random() * 80 + 10);

    let circle = document.createElement("div");
    circle.className = "cirlce";
    circle.id = `circle${randomTop}-${randomLeft}`;

    circle.style.top = `${randomTop}%`;
    circle.style.left = `${randomLeft}%`;

    circle.addEventListener('click', () => { interacao(`circle${randomTop}-${randomLeft}`); });

    containerMapa.appendChild(circle);
};

function interacao(idItem) {
    let item = window.document.getElementById(idItem);
    item.remove();
    createCircle();
}

createCircle();