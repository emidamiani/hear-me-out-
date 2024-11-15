const flashcardContainer = document.querySelector('.flashcard-container');

// Lista de nomes de personagens (exemplo)
const personagens = [
    "Simon", "Rudy Pankow- JJ", "Jonathan Bailey", 
    "Cole Sprouse", "Timothée Chalamet", "Nick", 
    "Luke Thompson", "Keith Powers", "Robert Pattinson", "Taylor Lautner"
];

// Lista de fotos dos personagens
const fotos = [
    "images/simon.jpg",
    "images/jj.jpg",
    "images/anthony.jpg",
    "images/cole sprouse.jpg",
    "images/timothee.jpg",
    "images/nick.jpg",
    "images/benedict.jpg",
    "images/Keith Powers.jpg",
    "images/edward cullen.jpg",
    "images/jacob black.jpg"
];

for (let i = 0; i < 10; i++) {
    const flashcard = document.createElement('div');
    flashcard.classList.add('flashcard');

    // Definindo a cor da estrela
    const starColor = "blue";  // Cor da estrela

    // Definindo o nome e a foto do personagem
    const nomePersonagem = personagens[i];
    const fotoPersonagem = fotos[i];  // Pega o caminho da foto

    flashcard.innerHTML = `
        <div class="front" style="color: ${starColor};">
            ⭐
        </div>
        <div class="back">
            <p>${nomePersonagem}</p>
            <img src="${fotoPersonagem}" alt="Imagem do ${nomePersonagem}" />
        </div>
    `;

    flashcard.addEventListener('click', () => {
        flashcard.classList.toggle('flipped');
    });

    flashcardContainer.appendChild(flashcard);
}
