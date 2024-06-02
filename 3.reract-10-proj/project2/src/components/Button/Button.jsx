

import {MdMessage} from 'react-icons/md'
import styles from './Button.module.css'

const Button = ({isOutline,icon,text,onclick,...rest}) => {
//onclick={props.onClick} or onclick={onClick} or...rest 
  // const {isOutline,icon,text}=props; afterthis no props.isoutline, just isOutline
  return (

<button {...rest}  className={ isOutline ? styles.outline_btn : styles.btn} >
  {/* <MdMessage fontSize="24px"/> 
  VIA SUPPORT CHAT*/}
    {icon}
    {text}
  </button>
);
};

export default Button
