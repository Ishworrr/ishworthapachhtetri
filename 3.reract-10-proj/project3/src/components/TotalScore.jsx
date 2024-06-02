import React from 'react'
import styled from 'styled-components'

const TotalScore = () => {
  return (

             <ScoreContainer>
     <h1>0</h1>
     <p>Total Score</p>
     </ScoreContainer>

      

  )
}

export default TotalScore

const ScoreContainer = styled.div`

max-width: 200px;
text-align: center;
margin: 0 auto;
text-align: center;

h1{
    max-width: 200px;
    font-size: 100px;
    line-height: 100px;

}
p{
    font-size: px;
    font-weight: 500;
}
`