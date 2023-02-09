import React from 'react'

const QuoteBox = ({quoteRandom, handleClick, colorsRandom}) => {

    console.log(quoteRandom)

    const objStyle = {
        color: colorsRandom
    }
    const objStyleBtn = {
        backgroundColor: colorsRandom
    }

  return (
    
        <article className='card' style={objStyle}>
            <i className="card__icon fa-solid fa-quote-left"></i>
            <p className='card__quote'>{quoteRandom.quote}</p>
                <h2 className='card__author'>{quoteRandom.author}.</h2>
                <button style={objStyleBtn} className='card__btn' onClick={handleClick}><i className="fa-solid fa-retweet"></i></button>
        </article>
    
  )
}

export default QuoteBox