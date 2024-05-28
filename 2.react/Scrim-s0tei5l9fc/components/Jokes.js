import React from "react";

export default function Jokes(props) {
    console.log(props)
    console.log(props.isPun)

return(
    <div>
   {props.Setup && <h3>Jokes baby: {props.Setup}</h3>}
   {/* <h3 style={{display:props.Setup?"block":"none"}}></h3> */}
    <p>Jokes baby: {props.Punchline}</p>
    <hr />
    </div>
)
}

//  export default function Jokes(Setup,Punchline){
//    console.log(Setup,Punchline)
// return(
//     <div>
// {/* 
//     <h3>{Setup}</h3>
//     <p>Jokes baby :{Punchline}</p>  
//      <hr />
//     */}
    
//     </div>
// )

// }

