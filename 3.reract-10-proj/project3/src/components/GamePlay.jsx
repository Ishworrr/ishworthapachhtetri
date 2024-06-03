import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import { useState } from 'react'
import { Button, OutlineButton } from '../styled/Button'
import Rules from './Rules'


const GamePlay = () => {

  const [selectedNumber, setSelectedNumber] =useState();
  const [currentDice,setCurrentDice] =useState(1)
  const [score,setScore] =useState(0)
  const [error,setError] =useState('')
  const [showRules,setShowRules] =useState(false)

  const generateRandomNumber = (min,max)=>{
    // console.log(Math.floor(Math.random() * (max - min ) + min));
    return Math.floor(Math.random() * (max - min ) + min)
}

const rollDice=()=>{
  // if(!selectedNumber) return;
  if(!selectedNumber) {
    setError('You have not selected any number. Select a number first and roll the dice, if the dice matches you gain point if not ypu loose two p0ints.')
    return;
  }
  // setError('');
    const randomNumber = generateRandomNumber(1,7)
    setCurrentDice((prev)=>randomNumber)

if(selectedNumber===randomNumber){
  setScore((prev)=>prev+randomNumber)
}else{
  setScore((prev)=>prev-2)
}

setSelectedNumber(undefined)
}

const resetScore=()=>{
  setScore(0)
}
  return (
 <MainContainer>
    <div className='top_Section'>
        <TotalScore score={score} />
       
        <NumberSelector 
        setError={setError}
        error={error}
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}/>

    </div>
   
    <RollDice 
    currentDice={currentDice}
    rollDice={rollDice}
    />
    <div className="btns">
      <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
      <Button onClick={()=>setShowRules((prev)=>!prev)}>
        {showRules?'Hide':'Show'} Rules
        </Button>
    </div>
    
    {showRules && <Rules />}

 </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.main`
padding-top: 70px;
.top_Section{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.btns{
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

}

`