import { useEffect, useState } from 'react';
import styled from 'styled-components'
import SearchResult from './components/SearchResult/SearchResult';


export const BASE_URL = 'http://localhost:9000'
const App =()=>{
const [data, setData] = useState(null);
const [filteredData, setFilteredData] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null)
const [selectedBtn, setSelectedBtn] = useState('all')

useEffect(()=>{
  const FetchFoodData=async()=>{
    setLoading(true);
   try {
     const response = await fetch(BASE_URL)
     const json = await response.json();
     //console.log(json);
     setData(json)
     setFilteredData(json)
     setLoading(true);
   
   } catch (error) {
    setError('Unable to get Data') 
   }
  }
  FetchFoodData()

},[])
console.log(data);
// FetchFoodData()

// const temp=[{
//   [
//     {
//         "name": "Boilded Egg",
//         "price": 10,
//         "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//         "image": "/images/egg.png",
//         "type": "breakfast"
//     },
//     {
//         "name": "RAMEN",
//         "price": 25,
//         "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//         "image": "/images/ramen.png",
//         "type": "lunch"
//     },
//     {
//         "name": "GRILLED CHICKEN",
//         "price": 45,
//         "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//         "image": "/images/chicken.png",
//         "type": "dinner"
//     },
//     {
//         "name": "CAKE",
//         "price": 18,
//         "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//         "image": "/images/cake.png",
//         "type": "breakfast"
//     },
//     {
//         "name": "BURGER",
//         "price": 23,
//         "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//         "image": "/images/burger.png",
//         "type": "lunch"
//     },
//     {
//         "name": "PANCAKE",
//         "price": 25,
//         "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//         "image": "/images/pancake.png",
//         "type": "dinner"
//     }
// ]
// }]

const searchFood = (e)=>{
  const searchValue = e.target.value;
  console.log(searchValue);

  if(searchValue===''){
    setFilteredData(null)
  }
  const filter = data?.filter((food)=>food.name.toLowerCase().includes(searchValue.toLowerCase()))

  setFilteredData(filter)

}

const filteredFood=(type)=>{
if(type==='all'){
  setFilteredData(data);
  setSelectedBtn('all')
  return;
}
  const filter = data?.filter((food)=>food.type.toLowerCase().includes(type.toLowerCase()))

  setFilteredData(filter)
  setSelectedBtn(type)
 
};

const filterBTNs=[
  {
    name:'All',
    type:'all',
  },
  {
    name:'Breakfast',
    type:'breakfast',
  },
  {
    name:'Lunch',
    type:'lunch',
  },
  {
    name:'Dinner',
    type:'dinner',
  },
  {
    name:'goo',
    type:'goo',
  }
]
if(error) return <div>{error}</div>
//if(loading) return <div>loading...</div>
  return(
<>
<MainContainer className="">
    <TopContainer>
      
      <div className='logo'>
        <img src="../public/logo.svg" alt=""  />
      </div>

      <div className='search'>
      <input type="text" placeholder="Search Food" id="" onChange={searchFood} />
      </div>

      </TopContainer> 

<FilterContainer>
  {/* <Button onClick={()=>filteredFood('all')}>All</Button>
  <Button onClick={()=>filteredFood('breakfast')}>Breakfast</Button>
  <Button onClick={()=>filteredFood('lunch')}>Lunch</Button>
  <Button onClick={()=>filteredFood('dinner')}>Dinner</Button> */}
{filterBTNs.map((value)=>(
    <Button 
    isSelected={selectedBtn===value.type}
    key={value.name} onClick={()=>filteredFood(value.type)}>
      {value.name}
      </Button>
  ))}

</FilterContainer>



</MainContainer>

<SearchResult data={filteredData}/></>
  )
}
export default App;

export const MainContainer = styled.div`
max-width: 1200px;
margin: 0 auto;
`

const TopContainer = styled.div`
height: 140px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 16px;
/* background-color: #323334; */

.search{
  input{
    background-color: transparent; 
    border: 1px solid red;
    padding: 10px 20px;
    border-radius:5px;
    height: 40px;
    font-size: 19px;
    color: white;
    &::placeholder{
      color: white;
    }
  }
}
@media (0<width<600px) {
    flex-direction: column;
    height: 140px;
    /* background-color: red; */
    
  }
`

const FilterContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
padding-bottom: 40px;
background-color: #342d2d;
`
export const Button = styled.div`
background-color:${({isSelected})=>(isSelected ?'#f22f2f':'#ff4343')};
outline: 1px solid ${({isSelected})=>(isSelected ?'white':'#ff4343')};
border-radius: 5px;
padding: 6px 12px;
cursor: pointer;
&:hover{
  background-color: #f22f2f;
}
`
