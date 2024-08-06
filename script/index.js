
const Backgrounds = [
    "midias/imagePC/girl_demon_horns_1078594_1920x1080.jpg",
    "https://images7.alphacoders.com/135/1351303.png",
    "midias/imagePC/girl_hands_eyes_1078067_1920x1080.jpg",
    "midias/imagePC/girl_warrior_armor_1060104_1920x1080.jpg",
    "midias/imagePC/1af689d42bdb7686df444f22925f9e89.gif",
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
const BackgroundsCl = [
    "midias/imageCL/gato_mais_garota.jpg",
    "midias/imageCL/Tanjiro01.jpg",
    "midias/imageCL/image_planeta.jpg",
    "midias/imageCL/japan_chuva.jpg",
    "midias/imageCL/konosuba01.jpg",
    "midias/imageCL/zenitsu02.jpg",
    "midias/imageCL/Konosuba02.jpg",
    "midias/imageCL/Tanjiro02.jpg",
    "midias/imageCL/konosuba03.jpg",
    "midias/imageCL/lua.jpg",
    "midias/imageCL/Obanai.jpg",
    "midias/imageCL/oceano_more_space.jpg",
    "midias/imageCL/rua_japan.jpg",
    "midias/imageCL/stylish_japan.jpg",
    "midias/imageCL/Tomyoka.jpg",
    "midias/imageCL/tuantuan.jpg",
    "midias/imageCL/village_space.jpg",
    "midias/imageCL/Yudi.jpg",
    "midias/imageCL/zenitsu.jpg",
    "https://images3.alphacoders.com/132/1322308.jpeg",
]
const textGamaplayInsano = [{
    "Fácil": {
        "h2": "Modo de GamePlay:<br> Insana",
        "h3": "Dificuldade: Fácil",
        "p": "No modo Fácil de GamePlay insana, os circulos aparecerem na tela a cada 01 segundos. Clique nos circulos e ganhe pontos, clicar nos circulos não influência no aparecimento dos outros circulos.",
    },
    "Médio": {
        "h2": "Modo de GamePlay:<br> Insana",
        "h3": "Dificuldade: Medio",
        "p": "No modo Medio de GamePlay insana, os circulos aparecerem na tela a cada 0.8 segundos. Clique nos circulos e ganhe pontos, clicar nos circulos não influência no aparecimento dos outros circulos.",
    },
    "Difícil": {
        "h2": "Modo de GamePlay:<br> Insana",
        "h3": "Dificuldade: Difícil",
        "p": "No modo Difícil de GamePlay insana, os circulos aparecerem na tela a cada 0.5 segundos. Clique nos circulos e ganhe pontos, clicar nos circulos não influência no aparecimento dos outros circulos.",
    }
}];
const arrayMusic = [
    {
        "nome": "RAINING IN 0SAKA",
        "src": "midias/Music/RAINING IN 0SAKA (Lofi HipHop)(M4A_128K).m4a",
    },
    {
        "nome": "POORSTACY - Don_t Look At Me",
        "src": "midias/Music/POORSTACY - Don_t Look At Me (prod. Whethan)(M4A_128K).m4a",
    },
    {
        "nome": "Kobenz - Diary of a Simpy Kid",
        "src": "midias/Music/Kobenz - Diary of a Simpy Kid(M4A_128K).m4a",
    },
    {
        "nome": "Chief Kelly x Spaceman Zack - Sons of Icarus",
        "src": "midias/Music/Chief Kelly x Spaceman Zack - Sons of Icarus(M4A_128K).m4a",
    },
    {
        "nome": "aldn - icantbelieveiletyougetaway",
        "src": "midias/Music/aldn - icantbelieveiletyougetaway [Lyrics _ AMV](M4A_128K).m4a",
    },
];

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
var audio = new Audio();

var containerMapa = window.document.getElementById("containerMapa");
var scoreText = window.document.getElementById("score");
var caica_de_texto_Gameplay = window.document.getElementById("caica_de_texto_Gameplay");

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
    audio.src = arrayMusic[0].src;
    audio.loop = true;
    audio.play();
})

// ADICIONANDO MENU 
function addMenu() {
    let menu = document.createElement("div");
    let ul = document.createElement("ul");
    let optionBackground = document.createElement("li");
    optionBackground.innerText = "Background";
    optionBackground.addEventListener('click', () => { createMenuBackground(); });
    let optionStilishCircle = document.createElement("li");
    optionStilishCircle.innerText = "Estilizar";
    let optionTypetheGame = document.createElement("li");
    optionTypetheGame.innerText = "Modos de Jogo";
    optionTypetheGame.addEventListener('click', () => { createMenuGameplay();});
    let optionMusic = document.createElement("li");
    optionMusic.addEventListener('click', () => { createMusic(); });
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
    let containerGameplay = window.document.getElementById("menu_GamePlay");
    
    let containerInsano = window.document.getElementById("containerInsano");
    Background.style.display = "none";
    containerGameplay.style.display = "none";
    containerInsano.style.display = "none";
    caica_de_texto_Gameplay.style.display = "none";
}
// ADICIONANDO MENU-BACKGROUND
function createMenuBackground() {
    let Background = window.document.getElementById("menu_background");
    if (Background.style.display == "none") {
        menu.style.display = "none";

        let sair = document.createElement("p");
        sair.innerText = "sair";
        sair.id = "sairBackground";
        sair.addEventListener('click', () => { createMenuBackground(); });
        
        let img = document.createElement("div");
        img.className = "imageBackgroundInit";
        img.innerHTML = "<h2>Padrão</h2>"
        img.addEventListener('click', () => { containerMapa.style.backgroundImage = ''; containerMapa.style.background = "linear-gradient(60deg, rgb(6, 0, 10), rgb(0, 0, 10))"; });
        Background.appendChild(img);
        for (let x = 0; x < Backgrounds.length; x++) {
            let image = document.createElement("img");
            if (window.innerWidth <= 500) {
                image.src = BackgroundsCl[x];
            } else {
                image.src = Backgrounds[x];
            } 
            image.className = "imageBackground"
            image.addEventListener('click', () => {
                if (window.innerWidth <= 500) {
                    containerMapa.style.backgroundImage = `url("${BackgroundsCl[x]}")`
                    containerMapa.style.backgroundPosition = "center";
                    containerMapa.style.backgroundSize = "cover";
                    containerMapa.style.backgroundRepeat = "no-repeat";
                } else {
                    containerMapa.style.backgroundImage = `url("${Backgrounds[x]}")`
                    containerMapa.style.backgroundPosition = "center";
                    containerMapa.style.backgroundSize = "cover";
                    containerMapa.style.backgroundRepeat = "no-repeat";
                } 
            });
            
            Background.appendChild(image);
        }
        Background.appendChild(sair);
        Background.style.display = "block";
    } else {
        Background.innerHTML = '';
        Background.style.display = "none";
    }
}
// ADICIONANDO MENU-GAMEPLAY
var intervalInsano;

function createMenuGameplay() {
    let containerGameplay = window.document.getElementById("menu_GamePlay");
    if (containerGameplay.style.display == "none") {

        menu.style.display = "none";
        containerGameplay.style.display = "block";

        const typesGameplay = ["Padrão", "Com Tempo", "Insano"]

        let sair = document.createElement("p");
        sair.innerText = "sair";
        sair.className = "sair";
        sair.addEventListener('click', () => { createMenuGameplay(); });
        
        let lista = document.createElement("ul");
        
        containerGameplay.appendChild(sair);
        for (let x = 0; x < typesGameplay.length; x++) {
            let item = document.createElement("li");
            item.innerText = `${typesGameplay[x]}`;

            if (typesGameplay[x] == "Insano") {
                item.addEventListener('click', () => { typeGameplayInsano(); });
            }
            if (typesGameplay[x] == "Padrão") {
                item.addEventListener('click', () => { 
                    containerGameplay.style.display = "none";
                    containerGameplay.innerHTML = '';
                    setTimeout(() => {
                        let circle = containerMapa.getElementsByTagName("div")[1];
                        circle.remove();
                        clearInterval(intervalInsano); 
                        createCircle();
                    }, 10);
                });
            }

            lista.appendChild(item);
            containerGameplay.appendChild(lista);
        }
    } else {
        containerGameplay.style.display = "none";
        containerGameplay.innerHTML = '';
    }
}

function typeGameplayInsano() {
    let containerInsano = window.document.getElementById("containerInsano");
    if (containerInsano.style.display == "none") {
        
        let containerGameplay = window.document.getElementById("menu_GamePlay");
        containerGameplay.style.display = "none";
        containerGameplay.innerHTML = '';

        containerInsano.style.display ="block";

        let sair = document.createElement("p");
        sair.innerText = "sair";
        sair.className = "sair";
        sair.addEventListener('click', () => { typeGameplayInsano(); });
        
        const typesGameplayInsano = ["Fácil", "Médio", "Difícil"]

        let lista = document.createElement("ul");
        
        containerInsano.appendChild(sair);
        for (let x = 0; x < typesGameplayInsano.length; x++) {
            let item = document.createElement("li");
            item.innerText = `${typesGameplayInsano[x]}`;

            if (typesGameplayInsano[x] == "Fácil") {
                item.addEventListener('click', () => { boxTextGamaplay("Fácil"); });
            } else if (typesGameplayInsano[x] == "Médio") {
                item.addEventListener('click', () => { boxTextGamaplay("Médio"); });
            } else if (typesGameplayInsano[x] == "Difícil") {
                item.addEventListener('click', () => { boxTextGamaplay("Difícil"); });
            }

            lista.appendChild(item);
        }
        containerInsano.appendChild(lista);
        containerMapa.appendChild(containerInsano);
    } else {
        containerInsano.style.display = "none";
        containerInsano.innerHTML = '';
    }
}

function startGameplayInsano(tempo) {
    let circle = containerMapa.getElementsByTagName("div")[1];
    circle.remove();
    clearInterval(intervalInsano);
    intervalInsano = setInterval(() => {

        let randomTop = Math.floor(Math.random() * 80 + 10);
        let randomLeft = Math.floor(Math.random() * 80 + 10);
        
        let circle = document.createElement("div");
        circle.className = "cirlce";
        circle.id = `circle${randomTop}-${randomLeft}`;
    
        circle.style.top = `${randomTop}%`;
        circle.style.left = `${randomLeft}%`;
    
        circle.addEventListener('click', () => { 
            
            let item = window.document.getElementById(`circle${randomTop}-${randomLeft}`);
            item.remove();
            score("add");
        });
    
        containerMapa.appendChild(circle);
    }, tempo);
}

// FUNÇÃO PARA APARECER E DESAPARECER A CAIXA DE TEXTO

function boxTextGamaplay(params) {

    caica_de_texto_Gameplay.innerHTML = '';
    caica_de_texto_Gameplay.style.display = "block";

    let h2 = document.createElement("h2");
    h2.innerHTML = textGamaplayInsano[0][params].h2

    let h3 = document.createElement("h3");
    h3.innerHTML = textGamaplayInsano[0][params].h3
    
    let p = document.createElement("p");
    p.innerHTML = textGamaplayInsano[0][params].p

    let back = document.createElement("span");
    let enter = document.createElement("span");
    
    back.addEventListener('click', () => {
        caica_de_texto_Gameplay.style.display = "none";
    });

    enter.addEventListener("click", () => {

        if (params == "Fácil") {
            typeGameplayInsano(); startGameplayInsano(1000);
            caica_de_texto_Gameplay.style.display = "none";
            
        } else if (params == "Médio") {
            typeGameplayInsano(); startGameplayInsano(800);
            caica_de_texto_Gameplay.style.display = "none";

        } else if (params == "Difícil") {
            typeGameplayInsano(); startGameplayInsano(500);
            caica_de_texto_Gameplay.style.display = "none";

        }
    });

    back.innerText = "Voltar";
    enter.innerText = "Começar";

    caica_de_texto_Gameplay.appendChild(h2);
    caica_de_texto_Gameplay.appendChild(h3);
    caica_de_texto_Gameplay.appendChild(p);
    caica_de_texto_Gameplay.appendChild(back);
    caica_de_texto_Gameplay.appendChild(enter);
}
// GERANDO MENU DE MUSICAS

function createMusic() {
    let menu = window.document.getElementById("menu");
    let containerMusic = document.createElement("div");
    let lista = document.createElement("ul");

    menu.style.display = "none";
    containerMusic.id = "containerMusic";
    lista.id = "listaMusic"

    for (let x = 0; x < arrayMusic.length; x++) {
        let item = document.createElement("li");
        item.innerText = arrayMusic[x].nome;
        item.addEventListener('click', () => {
            audio.src = arrayMusic[x].src;
            audio.loop = true;
            audio.play();
        });
        lista.appendChild(item);
    }

    let sair = document.createElement("p");
    sair.innerText = "sair";
    sair.className = "sair";
    sair.addEventListener('click', () => { window.document.getElementById("containerMusic").remove(); });

    
    containerMusic.appendChild(lista);
    containerMusic.appendChild(sair);
    containerMapa.appendChild(containerMusic);
}

addMenu();