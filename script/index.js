
const Backgrounds = [
    "https://images.unsplash.com/photo-1556379092-dca659792591?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
    "https://cdna.artstation.com/p/assets/images/images/043/211/772/original/nauris-amatnieks-chroniclesanimation1080p.gif?1636620973",
    "https://i.pinimg.com/originals/ef/22/58/ef225816f24fc1eef530dbd5c5a14f43.gif",
    "https://wallpapers.com/images/featured/4k-oaax18kaapkokaro.jpg",
    "https://wallpapercave.com/wp/wp2527110.jpg",
    "https://cdn.wallpapersafari.com/55/83/Pl6QHc.jpg",
    "https://cdn.hero.page/wallpapers/28d841fd-fa7f-44e9-b804-57ea19944052-marvel-universe-the-incredible-hulk-wallpaper-1.png",
    "https://images3.alphacoders.com/132/1322308.jpeg",
    "https://img4.thuthuatphanmem.vn/uploads/2020/06/22/hinh-nen-full-hd-anime_092519720.jpg",
    "https://i.redd.it/g4crddfnmt9a1.jpg",
    "https://asset.gecdesigns.com/img/wallpapers/beautiful-fantasy-wallpaper-ultra-hd-wallpaper-4k-sr10012418-1706506236698-cover.webp",
]

// interatividade com o menu
function menuBurgue() {
    let menu = window.document.getElementById("menu");
    if (menu.style.display == "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}
// PEGANDO OBJETOS HTML
var containerMapa = window.document.getElementById("containerMapa");
var scoreText = window.document.getElementById("score");

var NumberClicks = 0;
// CRIANDO OS CIRCULOS  RANDOMICAMENTE
function createCircle() {

    let randomTop = Math.floor(Math.random() * 80 + 10);
    let randomLeft = Math.floor(Math.random() * 80 + 10);

    let circle = document.createElement("div");
    circle.className = "cirlce";
    circle.id = `circle${randomTop}-${randomLeft}`;

    circle.style.top = `${randomTop}%`;
    circle.style.left = `${randomLeft}%`;

    circle.addEventListener('click', () => { clickCircle(`circle${randomTop}-${randomLeft}`); });

    containerMapa.appendChild(circle);
};
// FUNCÇÃO DE CLICK DIS CIRCULOS
function clickCircle(idItem) {
    let item = window.document.getElementById(idItem);
    item.remove();
    score("add");
    createCircle();
}
// UPDATE DA PONTUAÇÃO
function score(addOrRemove) {
    if (addOrRemove = "add") {
        NumberClicks++
        scoreText.innerText = `Score: ${NumberClicks}`;
    } else {
        NumberClicks = 0;
        scoreText.innerText = `Score: ${NumberClicks}`;
    }
}
// VERIFICAÇÃO DE CLICK NA TALA INICAL
document.getElementById("start").addEventListener('click', () => {
    let item = window.document.getElementById("telaInicial");
    item.style.display = "none";
    createCircle();
})

// ADICIONANDO MENU 
function addMenu() {
    let menu = document.createElement("div");
    let ul = document.createElement("ul");
    let optionBackground = document.createElement("li");
    optionBackground.innerText = "Background";
    optionBackground.addEventListener('click', () => { menuBackground(); });
    let optionStilishCircle = document.createElement("li");
    optionStilishCircle.innerText = "Estilizar";
    let optionTypetheGame = document.createElement("li");
    optionTypetheGame.innerText = "Gamaplay";
    let optionMusic = document.createElement("li");
    optionMusic.innerText = "Músicas"

    menu.id = "menu";
    menu.className = "menu";
    menu.style.display = "none";

    ul.appendChild(optionBackground);
    ul.appendChild(optionStilishCircle);
    ul.appendChild(optionTypetheGame);
    ul.appendChild(optionMusic);
    menu.appendChild(ul);
    containerMapa.appendChild(menu);
    
    let Background = window.document.getElementById("menu_background");
    Background.style.display = "none";
}

function menuBackground() {
    let Background = window.document.getElementById("menu_background");
    if (Background.style.display == "none") {
        menu.style.display = "none";

        let sair = document.createElement("p");
        sair.innerText = "sair";
        sair.id = "sairBackground";
        sair.addEventListener('click', () => { menuBackground(); });
        
        for (let x = 0; x < Backgrounds.length; x++) {
            let image = document.createElement("img");
            image.src = Backgrounds[x]
            image.className = "imageBackground"
            image.addEventListener('click', () => { containerMapa.style.backgroundImage = `url("${Backgrounds[x]}")`})
            
            Background.appendChild(image);
        }

        Background.appendChild(sair);
        Background.style.display = "block";
    } else {
        Background.innerHTML = '';
        Background.style.display = "none";
    }
}
addMenu();