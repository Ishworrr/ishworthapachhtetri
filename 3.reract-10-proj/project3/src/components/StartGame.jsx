import React from 'react'
import styled from 'styled-components'

const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
      <img src="images/dices.png"/>
      </div>
      <div className="one">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div `
display: flex;
height: 100vh;
gap:100px;
margin: 0 auto;
align-items: center;
    max-width: 1180px;
    text-wrap: nowrap;

    .one {
        h1{
        font-size: 96px;
        white-space: nowrap;
    }
    }
    img{
        background-size: contain;
    }
`

const Button = styled.button`
    background-color: #000;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin-top: 20px;
    font-size: 16px;
    font-weight: 600;
    min-width: 220px;
    border: 1px solid transparent;
    transition: 0.6s backgroundColor ease-in-out;
    &:hover{
        background-color:white;
        color:black;
        font-size: 19px;
        border: 1px solid black;
        transition: 0.5s;
        }
`