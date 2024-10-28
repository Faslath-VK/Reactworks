
// const Conditions =(prop)=>{
//      if(prop.number>0){
//             return <h1>Positive</h1>
//         } else if(prop.number<0){
//             return <h1>Negative</h1>
//         }else{
//             return <h1>Zero</h1>
//         }
//     }
// export default Conditions

const Conditions =(prop)=>{
    return(
        <div>
            {prop.number>0 ? <h1>Positive</h1>:prop.number<0?<h1>Negative</h1>:<h1>Zero</h1>}
            
        </div>
    )
}
export default Conditions

