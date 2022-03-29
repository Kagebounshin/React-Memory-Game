import { useState } from 'react'
import './App.css';

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

  // Shuffle Cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

      setCards(shuffledCards)
      setTurns(0)
  }

  console.log(cards, turns)


  return (
    <div className="App">
      <h1>Memory Game</h1> 
      <button onClick={shuffleCards}>New Game</button>
    </div>
  );
}

export default App;
