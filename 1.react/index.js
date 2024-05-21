/////lesson 1
// ReactDOM.render(<h1>Hey, MY first rwact Code</h1>, document.getElementById('root'))


// ReactDOM.render(
// <ul><li>h1.</li><li>h2.</li></ul>
// ,document.getElementById('root'))


/////lesson 2
// function Mainn(){
//     return(
//         <h1>Learning React</h1>
//     )
// }

// ReactDOM.render(
// <div>
// <Mainn/>
// </div>,document.getElementById('root'))


/////lesson2.1
// function Navbar() {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <a className="navbar-brand" href="#">Navbar</a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav mr-auto">
//                 <li className="nav-item active">
//                     <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#">Link</a>
//                 </li>
//                 <li className="nav-item dropdown">
//                     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                     Dropdown
//                     </a>
//                     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                     <a className="dropdown-item" href="#">Action</a>
//                     <a className="dropdown-item" href="#">Another action</a>
//                     <div className="dropdown-divider"></div>
//                     <a className="dropdown-item" href="#">Something else here</a>
//                     </div>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link disabled" href="#">Disabled</a>
//                 </li>
//                 </ul>
//                 <form className="form-inline my-2 my-lg-0">
//                     <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//                     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//                 </form>
//             </div>
//         </nav>
//     )
// }

// // Challenge: Create your own custom React component!
// // Call it "MainContent", and have it return a simple
// // h1 element that says "I'm learning React!"

// // Afterward, render it below the Navbar (which
// // you can do inside the ReactDOM.render call below)

// function MainContent() {
//     return (
//         <h1>I'm learning React!</h1>
//     )
// }

// ReactDOM.render(
//     <div>
//         <Navbar />
//         <MainContent />
//     </div>,
//     document.getElementById("root")
// )




/////lesson3
// const h1 = document.createElement('h1');
// h1.textContent = 'I am a h1 element';
//      // h1.classList.add('header')
// h1.classList='header'
// document.getElementById('root').appendChild(h1)
//        // document.body.appendChild(h1);
// console.log(h1);

// const element = (
//     // one parentcan have any sibling number 
// <div> 
// <h1 className="header">This is JSX</h1>
// <p>a okay</p>
// </div>) 
// console.log(element)

// ReactDOM.render(element,document.getElementById('root') ) 



// const navbar =(
//     <nav>
//         <h1>Lets see</h1>
//         <ul>
//         <li>Menu</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )
// ReactDOM.render(navbar,document.getElementById('root'))



// lesson4
    // import React from  'react'
    // import ReactDOM from 'react-dom/client'
    // const navbar =(
    //         <nav>
    //             <h1>Lets see</h1>
    //             <ul>
    //             <li>Menu</li>
    //                 <li>About</li>
    //                 <li>Contact</li>
    //             </ul>
    //         </nav>
    //     )
    //     ReactDOM.render(navbar,document.getElementById('root'))

    //     ///// react18
    //     ReactDOM.createRoot(document.getElementById('root')).render(navbar)
        
    // ///or
    //     const root = ReactDOM.createRoot(document.getElementById('root'));
    //     root.render(navbar);


    // lesson5
        //     import React from "react"
        // import ReactDOM from "react-dom"
        //     const page = (
        //         <div>
        //             <h1>My awesome website in React</h1>
        //             <h3>Reasons I love React</h3>
        //             <ol>
        //                 <li>It's composable</li>
        //                 <li>It's declarative</li>
        //                 <li>It's a hireable skill</li>
        //                 <li>It's actively maintained by skilled people</li>
        //             </ol>
        //         </div>
        //     )
        
        //     ReactDOM.render(page, document.getElementById("root"))
    //    document.getElementById("root").append(JSON.stringify(page))


    //lesson6
        // import React from "react"
        // import ReactDOM from "react-dom"
        
        // const page = (
        //     <div>
        //         <img src="./react-logo.png" width="40px" alt="React Logo" />
        //         <h1>Fun facts about React</h1>
        //         <ul>
        //             <li>Was first released in 2013</li>
        //             <li>Was originally created by Jordan Walke</li>
        //             <li>Has well over 100K stars on GitHub</li>
        //             <li>Is maintained by Facebook</li>
        //             <li>Powers thousands of enterprise apps, including mobile apps</li>
        //         </ul>
        //     </div>
        // )

        // console.log(page)
        
        // ReactDOM.render(page, document.getElementById("root"))


    //lesson7

    import React from "react"
    import ReactDOM from "react-dom"


///or  ( <ul className="nav-item">)
    //     const ul = document.createElement("ul")
// ul.className = ""
    function Header() {
        return (
            <header>
                <nav className="nav">
                    {/* <img src="./react-logo.png" width="40px" /> */}
                    <img src="./react-logo.png" className="nav-logo" />

                    <ul className="nav-item">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                    </ul>
                </nav>
            </header>
        )
    }

    function MainContent() {
        <div>
          
                 <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
          
                </div>
    }
    
    function Footer(){
        <footer>
                <small>© 2021 Ziroll development. All rights reserved.</small>
            </footer>
    } 

    function Page(){
        return(
            <div>
            <Header />
              <MainContent />
            <Footer />
                </div>
        )
    }

    

    ReactDOM.render(<Page />,document.getElementById('root'))
