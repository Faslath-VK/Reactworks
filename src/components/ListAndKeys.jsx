
const ListAndKeys = ()=>{

    const models =[
        "React",
        "Bootstrap",
        "JavaScript",
        "Html"
     ];
     const obj = [
        {name:"Fasla",age:26},
        {name:"Rana",age:7}
        ]
     const listItems = models.map((item,index)=><li key={index}>{item}</li>)
     const listItems2 = obj.map(item=>(
        <div key={item.name}>
           <ul >{item.name} </ul> 
        </div>
    ) )
    return (
        <div>
            <li>{listItems} </li>
            <li>{listItems2} </li>
        </div>   
    )
}
export default ListAndKeys
