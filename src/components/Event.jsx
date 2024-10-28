import { useEffect, useState } from "react"

const Event = ()=>{
    
    const eventHandled=(e)=>{
       
        console.log("button clicked",e.target)
    }
    useEffect(()=>{
        console.log("Running")
    })

    return(
        <div>
           
            <button onClick={eventHandled} >click here</button>
        </div>
        
    )
}
export default Event