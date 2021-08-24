document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: 'gwiazda',
      img: 'images/gwiazda.png'
    },
    {
      name: 'konik',
      img: 'images/konik.png'
    },
    {
      name: 'krab',
      img: 'images/krab.png'
    },
    {
      name: 'krewetka',
      img: 'images/krewetka.png'
    },
    {
      name: 'meduza',
      img: 'images/meduza.png'
    },
    {
      name: 'osmiornica',
      img: 'images/osmiornica.png'
    },
    {
      name: 'gwiazda',
      img: 'images/gwiazda.png'
    },
    {
      name: 'konik',
      img: 'images/konik.png'
    },
    {
      name: 'krab',
      img: 'images/krab.png'
    },
    {
      name: 'krewetka',
      img: 'images/krewetka.png'
    },
    {
      name: 'meduza',
      img: 'images/meduza.png'
    },
    {
      name: 'osmiornica',
      img: 'images/osmiornica.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/trafiony.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/trafiony.png')
      cards[optionTwoId].setAttribute('src', 'images/trafiony.png')
      alert('Te same obrazki')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('Trafione')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/trafiony.png')
      cards[optionTwoId].setAttribute('src', 'images/trafiony.png')
      alert('Spróbuj ponownie')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Gratulacje! Znalazione wszystkie!'
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})