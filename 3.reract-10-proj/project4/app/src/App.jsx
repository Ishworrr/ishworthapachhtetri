import styled from 'styled-components'
const App =()=>{
  return(
<MainContainer className="">
    <TopContainer>
      
      <div className='logo'>
        <img src="../public/logo.svg" alt=""  />
      </div>

      <div className='search'>
      <input type="text" placeholder="Search Food" id="" />
      </div>

      </TopContainer> 

<FilterContainer>
  <Button>All</Button>
  <Button>Breakfast</Button>
  <Button>Lunch</Button>
  <Button>Dinner</Button>
</FilterContainer>

<FoodCardContainer>
  <FoodCard></FoodCard>
</FoodCardContainer>

</MainContainer>
  )
}
export default App;

const MainContainer = styled.div`
max-width: 1440px;
margin: 0 auto;
`

const TopContainer = styled.div`
min-height: 140px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 16px;
background-color: black;

.search{
  input{
    background-color: transparent; 
    border: 1px solid red;
    padding: 10px 20px;
    border-radius:5px;
    height: 40px;
    font-size: 19px;
    color: white;
  }
}
`

const FilterContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
`
const Button = styled.div`
background-color:#ff4343;
border-radius: 5px;
padding: 6px 12px;
`
const FoodCardContainer = styled.section`
background-image: url('/bg.png');
height: calc(100vh-170px);
/* height: 100vh; */
background-size: cover;
`
const FoodCard = styled.div`
`