

import styles from './Contact.module.css'
import Button from "../Button/Button"
import { MdMessage } from "react-icons/md"
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from 'react';


const ContactForm = () => {

  const [name, setName]=useState('q')
  const [email, setEmail]=useState('aa')
  const [text, setText]=useState('bb')

  // let name="q";
  // let email="aa@aa";
  // let text="bb";

  // const onCall=()=>{
  //   window.open("tel: +380 67 000 00 00")
  //   console.log('I am groot')
  // }
  const onSubmit=(eve)=>{
  
    eve.preventDefault()
    setName(eve.target[0].value)
    setEmail(eve.target[1].value)
    setText(eve.target[2].value)
    //  console.log("name",eve.target[0].value); 
    //  console.log("email",eve.target[1].value); 
    //  console.log("text",eve.target[2].value); 
    console.log({name,email,text}); 
  }
  return (
  <section className={styles.container}> 
    <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button text='VIA SUPPORT CHAT' icon={<MdMessage fontSize="24px"/>} />
          <Button text='VIA CALL' icon={<FaPhoneAlt fontSize="24px" />}/>
      </div>
     <Button isOutline={true} onClick={onSubmit}
     text="VIA EMAIL FORM" icon={<HiMail fontSize="24px"/>} />

     <form action="" onSubmit={onSubmit}>
        <div className={styles.form_control}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className={styles.form_control}>
          <label htmlFor="Email">Email</label>
          <input type="email" name="Email" id="Email" />
        </div>
      
        <div className={styles.form_control}>
          <label htmlFor="textarea">Text</label>
          <textarea name="textarea" id="textarea" rows={10}/>
          {/* rows="10" */}
        </div>
        {/* <div className={styles.submit}> */}
        <div style={
          {
            display: "flex",
            justifyContent:'end'
          }
        }>
        <Button text= "SUBMIT" />
        </div>
        <div className="">
          {
            name + ' ' + email + ' ' + text + ' '
          }
        </div>
     </form>
    </div>
  <div className={styles.contact_image}>
<img src="../../images/Service 24_7.svg" alt="" />
  </div>
  </section>
  
  );
};

export default ContactForm
{/* <section className={`${styles.container} container`}>  */}