import { useState , useEffect } from "react";

const FetchQutoes = () =>{
    const [quotes , setQuotes] = useState([]);

    useEffect(()=>{
       fetch('https://jsonplaceholder.typicode.com/posts')
       .then((response)=>response.json())
       .then((quotes)=>setQuotes(quotes.splice(0,10)));
        
    },[])

    return (
        <div>
            <h1>Fetch API data</h1>
            {quotes.map((item)=>(
                <div key={item.id}>

                <h1 >{item.title}</h1>
                <p  >{item.body} </p>
                </div>
            ))}
        </div>
    )
}
export default FetchQutoes