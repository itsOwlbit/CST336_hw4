getDigimon();

const dCard = document.querySelector('#digimon-div');

async function getDigimon() {
    const url = "https://digimon-api.vercel.app/api/digimon";
    const response = await fetch(url);
    const data = await response.json();

    loadDigimon(data);
}

function loadDigimon(data) {
    const numOfDigimon = data.length;
    const randomIndex = Math.floor(Math.random() * numOfDigimon);

    let dImg = document.createElement('img');
    dImg.src = data[randomIndex].img;
    dImg.setAttribute('id', 'digimon-img');
    let dText = document.createElement('p');
    dText.innerHTML = `<strong>Name</strong>: ${data[randomIndex].name}<br><strong>Level</strong>: ${data[randomIndex].level}`;
    dText.setAttribute('id', 'digimon-text');
    dCard.appendChild(dImg);
    dCard.appendChild(dText);
}