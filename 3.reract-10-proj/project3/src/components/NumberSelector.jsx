import React from 'react'
import styled from 'styled-components'
import { useState } from "react";


const NumberSelector = ({setError, error, selectedNumber,setSelectedNumber}) => {

    const arrNumber =[1,2,3,4,5,6] 
    // console.log(selectedNumber) 

const numberSelectorHAndler=(value)=>{
  setSelectedNumber(value)
  setError('')
}
  return (
   <NumberSelectorContainer className="">
    <p className='error'>{error}</p>
 <div className='flex'>
 {
       arrNumber.map((value,i)=>(
        <Box 
        isSelected = {value === selectedNumber}
        // key={i} onClick={()=>setSelectedNumber(value)}>
        key={i} onClick={()=>numberSelectorHAndler(value)}>
             {value}</Box>
             
    ))    
    } 
 </div>

    {/* <Box> 2</Box>
    <Box> 3</Box>
    <Box> 4</Box>
    <Box> 5</Box>
    <Box> 6</Box> */}

<p className='dig'>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector

const NumberSelectorContainer = styled.div`
display: flex;
  flex-direction: column;
  align-items: end;
  
.flex{
  display: flex;
gap:24px; 
}
.dig{
  font-size: 24px;
font-weight: 700px;
}
.error{
  color: red;
}

`

const Box = styled.div`
height:72px;
width:72px;
border:1px solid black;
display:grid;
place-items: center;
font-size: 24px;
font-weight: 700px;
background-color: ${(props)=>(props.isSelected? "black":"white")};
color: ${(props)=>(!props.isSelected? "black":"white")};

` 