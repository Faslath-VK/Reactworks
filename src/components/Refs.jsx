//when you want a component to remember some information ,but you
//don't want that information to trigger new renders, you can use refs
//ref is a plain js object with the current property that you can read and modify


// import { useRef, useState } from 'react'
// const Refs =()=>{
//     let ref = useRef(0);
//     const handleClick = ()=>{
//         ref.current = ref.current+1 ;
//         alert('you clicked ' + ref.current + 'times' )
//         }
//     return (
//         <div>
//             <button onClick={ handleClick }>Click</button>
//         </div>
//     )
// }
// export default Refs


// Refs are an escape hatch to hold onto values that aren’t used for rendering. You won’t need them often.
// A ref is a plain JavaScript object with a single property called current, which you can read or set.
// You can ask React to give you a ref by calling the useRef Hook.
// Like state, refs let you retain information between re-renders of a component.
// Unlike state, setting the ref’s current value does not trigger a re-render.
// Don’t read or write ref.current during rendering. This makes your component hard to predict.

// Manipulating DOM with Refs :
// import { useRef } from 'react'
// const Refs = ()=>{
  
//     const inputRef = useRef(null);
//     function handleClick(){
//         inputRef.current.focus();
//     }

//     return (
//         <div>
//             <input ref={inputRef} />
//             <button onClick={handleClick} > 
//                 click
//             </button>
//         </div>
//     )

// }
// export default Refs

import { useRef } from "react";
const Refs = () =>{
   
    const inputRef = useRef(null);
    const handleClick =()=>{
        inputRef.current.placeholder='add text'
    }

    return(
        <div>
            <input ref={inputRef}></input>
            <button onClick={handleClick}>Click</button>

        </div>
    )
 }
export default Refs