import React from 'react'
import styles from "./Navigation.module.css"

const Navigation = () => {

console.log(styles)

  return (
   <nav className={`${styles.navigation} container`}>
    <div className='logo'>
        <img src="../public/images/logo.png" alt="" />
    </div>
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Portfolio</li>

    </ul>
   </nav>
  )
}
 
export default Navigation
