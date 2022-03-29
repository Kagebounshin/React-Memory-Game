import { useState } from 'react'
import './App.css';
import SingleCard from './components/SingleCard';

const cardImages = [
  { "src": "/img/animal.png"},
  { "src": "/img/animal01.png"},
  { "src": "/img/animal02.png"},
  { "src": "/img/animal03.png"},
  { "src": "/img/animal04.png"},
  { "src": "/img/zebra.png"}
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null) 
  const [choiceTwo, setChoiceTwo] = useState(null) 

  // Shuffle Cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

      setCards(shuffledCards)
      setTurns(0)
  }

  // handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  return (
    <div className="App">
      <h1 className='header'>Animals</h1> 
      <button onClick={shuffleCards}>New Game</button>

      <div className='card-grid'>
        {cards.map(card => (
          <SingleCard 
            key={card.id} 
            card={card} 
            handleChoice={handleChoice}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
