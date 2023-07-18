const cardArray = [ 
    {
        name: 'fries', 
        img: 'Images/fries.png'
    },
    {
        name: 'cheeseburger', 
        img: 'Images/cheeseburger.png'
    },
    {
        name: 'hotdog', 
        img: 'Images/hotdog.png'
    },
    {
        name: 'ice-cream', 
        img: 'Images/ice-cream.png'
    },
    {
        name: 'pizza', 
        img: 'Images/pizza.png'
    },
    {
        name: 'milkshake', 
        img: 'Images/milkshake.png'
    },
    {
        name: 'fries', 
        img: 'Images/fries.png'
    },
    {
        name: 'cheeseburger', 
        img: 'Images/cheeseburger.png'
    },
    {
        name: 'hotdog', 
        img: 'Images/hotdog.png'
    },
    {
        name: 'ice-cream', 
        img: 'Images/ice-cream.png'
    },
    {
        name: 'pizza', 
        img: 'Images/pizza.png'
    },
    {
        name: 'milkshake', 
        img: 'Images/milkshake.png'
    }
] 

cardArray.sort(()=> 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenId = [];
const cardsWon = [];


function crateBoard()
{
    for(let i = 0;i<cardArray.length;i++)
    {
        const card = document.createElement('img');
        card.setAttribute('src','Images/blank.png');
        card.setAttribute('card-id',i);
        card.addEventListener('click', flipcard)
        gridDisplay.appendChild(card);
    }
}

crateBoard();

function checkMatch()
{
    const cards = document.querySelectorAll('img'); 
    const card1 = cardsChosenId[0];
    const card2 = cardsChosenId[1];

    console.log("Check-for-a-match");

    if(cardsChosenId[0] == cardsChosenId[1])
    {
        cards[card1].setAttribute('src','Images/blank.png');
        cards[card2].setAttribute('src','Images/blank.png');
        alert("You have clicked the same Image!");
    }

    else if(cardsChosen[0] == cardsChosen[1])
    {
        alert("Its a match!");
        cards[card1].setAttribute('src','Images/white.png');
        cards[card2].setAttribute('src','Images/white.png');
        cards[card1].removeEventListener('click',flipcard);
        cards[card2].removeEventListener('click',flipcard); 
        cardsWon.push(cardsChosen);
        console.log(cardsWon);
    }
    else
    {
        cards[card1].setAttribute('src','Images/blank.png');
        cards[card2].setAttribute('src','Images/blank.png');
        alert("Wrong card");
    }

    resultDisplay.textContent = cardsWon.length;
    cardsChosen = [];
    cardsChosenId = [];

    if(cardsWon.length == cardArray.length/2)
    {
        resultDisplay.innerHTML = 'Congrats you won!';
    }


}

function flipcard()
{
    let cardId = this.getAttribute('card-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);

    //console.log(cardsChosen);
    console.log(cardsChosenId);
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2)
    {
        setTimeout( checkMatch,100)
    }
}

