import { useState } from "react"


const Form = () =>{
    const initialValue = {
        username :"",
        email: "",
        password :""
    }
    const [formValues , setFormValues] = useState(initialValue);

    const handleChange = (e) => {
        const { name , value} =e.target;
        setFormValues({...formValues , [name]: value})
    }

    const handleSubmit = (e)=>{
       e.preventDefault();
    }

    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Login Form</h1>
                <div > 
                <div >
                    <label>Username</label>
                    <input 
                     type='text'
                     name ='username' 
                     value={formValues.username}
                     onChange={handleChange}/>
                </div>
                <div>
                    <label>Email</label>
                    <input 
                     type='text'
                     name ='email' 
                     value={formValues.email}
                     onChange={handleChange} /> 
                </div>
                <div>
                    <label>Password</label>
                    <input 
                      type='text' 
                      name ='password' 
                      value={formValues.password}
                      onChange={handleChange}/> 
                </div>
                <button className="btn btn-primary">Submit</button>
                </div>
                

            </form>
        </div>
    )
}
export default Form