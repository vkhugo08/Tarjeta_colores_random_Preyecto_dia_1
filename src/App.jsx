import colors from './json/colors.json'
import quotes from './json/quotes.json'
import './App.css'
import QuoteBox from './components/QuoteBox'
import { useState } from 'react'

function App() {
 
const getElementRandom = (arr) => {
  const indexRandom = Math.floor(arr.length * Math.random())
  return arr[indexRandom]
}

 const [quoteRandom, setQuoteRandom] = useState(getElementRandom(quotes))
 const [colorsRandom, setColorsRandom] = useState(getElementRandom(colors))

 console.log(colorsRandom)
  const handleClick = () => {
    setQuoteRandom(getElementRandom(quotes))
    setColorsRandom(getElementRandom(colors))
  }

  const objStyle = {
    backgroundColor: colorsRandom
  }

  return (
    <div className="App" style={objStyle}>
      <QuoteBox 
      quoteRandom={quoteRandom}
      handleClick={handleClick}
      colorsRandom={colorsRandom}
      />
    </div>
  )
}

export default App
