import { useState } from "react";


const Counter = () =>{

    const [count,setCount] =useState(0);

    const incHandle =()=>{
        setCount(count+1)
        
    }
    const resetHandle =()=>{
        setCount(0)
    }
    const decHandle =()=>{
        setCount(count-1)
    }
    const inc5Handle =()=>{
        setCount(count+5)
    }
   
    return (
        <div className="container">
            <h4>Count: {count}</h4>
            <button className="btn btn-success m-2" onClick ={incHandle}>Increment</button>
            <button className="btn btn-primary m-2" onClick ={resetHandle} >Reset</button>
            <button className="btn btn-danger m-2"  onClick ={decHandle}>Decrement</button>
            <button className="btn btn-warning m-2 text-white" onClick={inc5Handle}>Increment5</button>
        </div>
    )
}
export default Counter; 