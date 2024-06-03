import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
const RollDice = ({currentDice,rollDice}) => {

//put to gameplay.jsx
    // const generateRandomNumber = (min,max)=>{
    //     // console.log(Math.floor(Math.random() * (max - min ) + min));
    //     return Math.floor(Math.random() * (max - min ) + min)
    // }
    
    // const rollDice=()=>{
    //     const randomNumber = generateRandomNumber(1,7)
    //     setCurrentDice((prev)=>randomNumber)
    // }
  
  return (
    <DiceConatiner>
<div className='dice' onClick={rollDice}>
<img src={`../../public/images/dice/dice_${currentDice}.png`} alt=""  />
</div>
<p>Click on Dice to roll</p>
    </DiceConatiner>
  )
}

export default RollDice

const DiceConatiner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 48px;

    .dice{
        cursor: pointer;
    }

    p{
     font-size: 25px;
     align-items: center;
    }

`
