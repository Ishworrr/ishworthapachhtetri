import React from 'react'
import styled from 'styled-components'

const NumberSelector = () => {

    const arrNumber =[1,2,3,4,5,6]
    const [selectedNumber, setSelectedNumber] =useState(1);
    console.log(selectedNumber,setSelectedNumber) 


  return (
   <div className="">
    {
       arrNumber.map((value,i)=>(
        <Box 
        isSelcted = {value === selectedNumber}
        key={i} onClick={()=>setSelectedNumber(value)}>
             {value}</Box>
    ))    
    } 

    {/* <Box> 2</Box>
    <Box> 3</Box>
    <Box> 4</Box>
    <Box> 5</Box>
    <Box> 6</Box> */}


    </div>
  )
}

export default NumberSelector


const Box = styled.div`
height:72px;
width:72px;
border:1px solid black;
display:grid;
place-items: center;
font-size: 24px;
font-weight: 700px;


`