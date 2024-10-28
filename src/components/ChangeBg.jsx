import { useState } from "react"
import './ChangeBg.css'

const ChangeBg = ()=>{
    const [dark ,setDark ] = useState(false);
    const bgHandler = ()=>{
        setDark(prev=>!prev)
    }
    
  return (
      <div className={ !dark  ?'container dark'  : 'container'} >

        <button onClick={bgHandler}>Switch Theme</button>
      </div>
  )
}
export default ChangeBg