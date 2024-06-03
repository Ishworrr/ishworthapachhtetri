import { useState } from 'react'
import styled from 'styled-components'

import './App.css'
import StartGame from './components/StartGame'
import GamePlay from './components/GamePlay'

// const Button = styled.button `
// background-color:black;
// color:white;
// padding:10px;
// `;
{/* <Button>This is a styled button</Button> */}

function App() {
 
const [isGameStarted, setIsGameStarted] = useState(false)
const toggleGamePlay=()=>{
  // setIsGameStarted((prev)=>!prev)
  setIsGameStarted(!isGameStarted)
}

  return (
    <main>

      {
        isGameStarted ? <GamePlay />: <StartGame 
        toggle ={toggleGamePlay}
        />
      }
    
    </main>
  )
}

export default App
