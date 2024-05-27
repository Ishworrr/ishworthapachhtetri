import React from "react"

export default function Navbar() {
    const date = new Date()
    const hours = date.getHours();
    console.log(hours)

    let timeOfDay

    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }

    return (
        <nav>
            <img src="../images/airbnb-logo.png" className="nav--logo" />
            <h3>It is now {date.getHours()%12} o'clock!</h3>
            <h3>It is now {timeOfDay}</h3>

        </nav>
    )
}