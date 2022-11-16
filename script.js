const images = [
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
]

const blankImage = [{
    name: 'blank',
    img: 'images/blank.png'
}]

const whiteImage =[{
    name: 'white',
    img: 'images/white.png'
}]

const container = document.querySelector('#container');
for(i = 0; i < 12; i++){
    const img = document.createElement('img');
    img.classList.add('card');
    img.setAttribute('src', 'images/blank.png');
    img.setAttribute('data-id', i);
    img.addEventListener('click', flipCard);

    container.appendChild(img);
}


function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
       array[randomIndex], array[currentIndex]];
    }
    return array;
  }


let rand = Math.floor(Math.random() * 12) + 1;
let rand2 = Math.floor(Math.random() * 12) + 1;

if(rand === rand2){
    rand2 += 2;
}

let shuffledImages = [];
let allimages = shuffle(images);
shuffledImages.push(...allimages)

let cardsChosenId = [];
let cardsWon = [];


checkMatch = () => {
    const cards = document.querySelectorAll('img');
    if(cardsChosen[0] === cardsChosen[1] && cardsChosenId[0] === cardsChosenId[1]){
        alert(' you clicked the same image!');
        cards[cardsChosenId[0]].setAttribute('src', 'images/blank.png');
    }else if(cardsChosen[0] === cardsChosen[1]){
        alert('you got it!');
        cards[cardsChosenId[0]].setAttribute('src', 'images/white.png');
        cards[cardsChosenId[1]].setAttribute('src', 'images/white.png');
        cards[cardsChosenId[0]].removeEventListener('click', flipCard);
        cards[cardsChosenId[1]].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
        console.log(cardsWon);
    }else{
        cards[cardsChosenId[0]].setAttribute('src', 'images/blank.png');
        cards[cardsChosenId[1]].setAttribute('src', 'images/blank.png');
        alert('Sorry! Try again.')
    }
    cardsChosen = [];
    cardsChosenId = [];

    if(cardsWon.length == (cards.length/2)){
        alert('You won!')
        const h1 = document.createElement('h1');
        h1.textContent = 'CONGRATS!!!'
        document.body.append(h1);
    }

}

function flipCard(){
    let cardId = this.getAttribute('data-id');
    this.src = `${shuffledImages[cardId].img}`;
    cardsChosen.push(shuffledImages[cardId].name);
    cardsChosenId.push(cardId);
    if(cardsChosen.length === 2){
        setTimeout(checkMatch, 300)
    }
}

let cardsChosen = [];


