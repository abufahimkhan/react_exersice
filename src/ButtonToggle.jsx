import { useState } from 'react'

import './App.css'

function ButtonToggle() {
 const [isOn,setIson]=useState(true);
 const handleClick=()=>{
    setIson((ON)=>!ON);
 }
  

  return (
    <div>
        <button
        id='toggle'
        className={isOn? 'on':'off'}//not necessary unless you want to add css
        onClick={handleClick}
        >
            {isOn?'I AM ON':'I AM OFF'}
        </button>

    </div>
  )
}

export default ButtonToggle
