import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Contact from "./components/Contact"
import Jokes from "./components/Jokes"
import jokesData from "./components/jokesData"
import Data from "./Data"


export default function App() {

    //for jokesData
    const mapp= jokesData.map((joke)=>{
        return <Jokes Setup = {joke.setups} Punchline={joke.punchlines} />
    })

    const cardData = Data.map((thing)=>{
        return <Card 
        key={thing.id}
        //thing={thing}
        {...thing}  //is same as below id={item.id} title={item.title} description={item.description}
        // after {...thing} remove thing form cards ptops.thing.price,, remove thing

        // img = {thing.coverImg}
        // rating={thing.stats.rating}
        // reviewCount={thing.stats.reviewCount}
        // country={thing.location}
        // title={thing.title}
        // price={thing.price}
        // openSpots={thing.openSpots}
    
        />
    })
    //
            // <Hero />
    return (
        <div>
            <Navbar />
            <Hero />
            {/* <Card /> */}
            {/* <Contact />
            <Contact />
            <Contact />
            <Contact />  
              */}
               <div className="card-list">
                {cardData}
               </div>

                    {/*  instead cardData
                    <div className="cards">
                        <Card 
                    img="katie-zaferes.png"
                        rating="5.0"
                        reviewCount={6}
                        country='AUstralia'
                        title="Life Lessons with Katie Zaferes"
                        price={136}
                    
                    />
                    <Card 
                    img="katie-zaferes.png"
                    rating="5.0"
                    reviewCount={6}
                    country='AUstralia'
                    title="Life Lessons with Katie Zaferes"
                    price={136}
                    />
                    <Card 
                img="katie-zaferes.png"
                rating="5.0"
                reviewCount={6}
                country='AUstralia'
                title="Life Lessons with Katie Zaferes"
                price={136}
                    />
                    <Card 
                    img="katie-zaferes.png"
                    rating="5.0"
                    reviewCount={6}
                    country='AUstralia'
                    title="Life Lessons with Katie Zaferes"
                    price={136}
                    />

        </div> */}
      

<div className="contacts">
                <Contact 
                img="./images/mr-whiskerson.png"
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact 
                img="./images/fluffykins.png"
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact 
                img="./images/felix.png" 
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                img="./images/pumpkin.png"
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />

</div>
<div className="jokes">
    {mapp}
    </div>


        {/* instead mapp
        <div className="jokes">
                    <Jokes 
                    Punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
                    isPun={false}
                    upvotes={10}
                        downvotes={2}
                        // comments={[{author: "", body: "", title: ""}, {...}]}
                        comments={[{author: "", body: "", title: ""}]}
                />
                    <Jokes 
                    Setup="I got my daughter a fridge for her birthday."
                    Punchline="I can't wait to see her face light up when she opens it."
                    isPun={false}
                    />
                    <Jokes 
                    Setup="How did the hacker escape the police?"
                    Punchline=" He just ransomware!"
                    isPun={true}  
                    />
                    <Jokes 
                    Setup="Why don't pirates travel on mountain roads?"
                    Punchline="Scurvy."
                    isPun={true}  
                    />
                    <Jokes 
                    Setup=" Why do bees stay in the hive in the winter?"
                    Punchline="Swarm."
                    isPun={true}  
                    />
                    <Jokes 
                    Setup=" What's the best thing about Switzerland?"
                    Punchline="I don't know, but the flag is a big plus!"
                    isPun={true}  
                    />

            
                    
                    
        </div> */}

</div>
    )
}