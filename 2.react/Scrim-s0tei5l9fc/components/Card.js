import React from "react"

export default function Card(props) {
    console.log(props)
    console.log(props.openSpots)
    let topBdge
    if(props.openSpots===0){
         topBdge='Sold Out'
    }else if(props.location ==='Online'){
         topBdge='Online'
    }


    return (
         <div className="card">
            {/* {props.openSpots===0 && <div className="card--badge">SOLD OUT or {topBdge}</div>} */}
            {topBdge && <div className="card--badge">{topBdge}</div>}
            <img src={`../images/${props.CoverImg}`} className="card--image" />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>

            <p className="card--price"> 
            <span className="bold">From ${props.price}</span> / person
            </p>       
             </div>


                // <div className="card">
                //     {/* {props.openSpots===0 && <div className="card--badge">SOLD OUT or {topBdge}</div>} */}
                //     {topBdge && <div className="card--badge">{topBdge}</div>}
                //     <img src={`../images/${props.img}`} className="card--image" />
                //     <div className="card--stats">
                //         <img src="../images/star.png" className="card--star" />
                //         <span>{props.rating}</span>
                //         <span className="gray">({props.reviewCount}) • </span>
                //         <span className="gray">{props.country}</span>
                //     </div>
                //     <p className="card--title">{props.title}</p>

                //     <p className="card--price"> 
                //     <span className="bold">From ${props.price}</span> / person
                //     </p>       
                //      </div>
    )
}

//lesson
const names = ["alice", "bob", "charlie", "danielle"]
const capitalized = names.map((name) => {
    return name[0].toUpperCase() + name.slice(1)
})
console.log(capitalized)

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here

const aa = pokemon.map((every)=>{
   return `<p>${every}</p>`
})