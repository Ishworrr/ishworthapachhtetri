// import { useState } from 'react'
 import Navigation from './components/Navigation/Navigation'
import './App.css'
import ContactHeader from './components/ContactHeader/ContactHeader'
import ContactForm from './components/ContactForm/ContactForm'
import Button from './components/Button/Button'

function App() {
  // const [count, setCount] = useState(0)

  return (
<div>
<Navigation />
<ContactHeader />
<ContactForm />
<Button />
</div>
  

  
  )
}

export default App
