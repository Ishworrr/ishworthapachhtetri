import React from 'react'
import styled from 'styled-components'
import { Button } from '../styled/Button'


const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
      <img src="images/dices.png"/>
      </div>
      <div className="one">
        <h1>Dice Game</h1>
        {/* <Button onClick={toggle}>Play Now</Button> */}
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
