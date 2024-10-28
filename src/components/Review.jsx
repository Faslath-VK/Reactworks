import { useState } from "react";


const Review =()=>{

    const [input,setInput]= useState('');
    const [lists,setLists]=useState([]);
    
    const handleClick =()=>{
        setLists([...lists,input])
        setInput('')
    }


    return(
        <div>
            <div>
            <input 
              type="text"
              value={input}
              onChange={(e)=>setInput(e.target.value)}/>
              <button onClick={handleClick}>Click</button>
              
             </div>
             <ul>
                {lists.map((item,index)=><li key={index}>{item} </li>)}
             </ul>
         
        </div>
       
    )
}
export default Review