

const List =()=>{

    
     const lists = ["h","k"]
    return(

        <div >{lists.map((item,index)=><li key={index}>{item}</li>)}</div>
    )
}
export default List