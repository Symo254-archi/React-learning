import React, {useState } from "react";

const Login = ()=>{
    const [values, setValues] = useState({
      name: "",
      age: "",
      description: "",
    })
    
    const handleChange = (event) =>{
      setValues({
          ...values,
          [event.target.name]:event.target.value,
      });
    };
    return (
      <div className= "Login">
          <div>
              <form>
                  <label>Name :
                      <input type="text" name="name" value ={values.name} 
                      onChange={handleChange} autoComplete= "off"></input>
                  </label>
                  <label>Age :
                      <input type="number" name="age" value={values.age} 
                      onChange={handleChange}></input>
                  </label>
                  <label>Description :
                      <textarea name="description" value={values.description} 
                      onChange={handleChange}></textarea>
                  </label>
              </form>
          </div>
          
          <div className="values">
              <p>{values.name}</p>
              <p>{values.age}</p>
              <p>{values.description}</p>
          </div>
          <div>
            <button>Submit</button>
          </div>
      </div>
      
    );
    };
export default Login;