import { useState } from "react";
import './Color.css'

const Color = () =>{
 const [color , setColor] = useState(false);
   return (
        <div>
            <div className="container" style={{background:color}} >
                <button className="btn" onClick={()=>{setColor("green")}}>Click</button>
            </div>
        </div>
    )
}
export default Color

