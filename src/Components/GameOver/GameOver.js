import React, { useContext } from 'react'
import { AppContext } from '../../App'

export default function GameOver() {

  const {currentAttempt,gameOver,correctWord} = useContext(AppContext)



  return (
    <div className='gameOver'>
      
      <h3>{gameOver.guessedWord ? "Your Guess is Correct" : "Incorrect Guess, Try Next time"}</h3>
      <h3>Correct word: {correctWord.toUpperCase()}</h3>
      {gameOver.guessedWord && (<h3>You have guessed in {currentAttempt.attempt} {currentAttempt.attempt > 2 ? 'attempts' : 'attempt'}</h3>)}
      <span>Refresh page for next wordle</span>
    </div>
  ) 
}
