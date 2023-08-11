
import React, { useState } from "react";
import "./style.css"

const Form = () => {
    const [name, updateName] = useState("");
    const [email, updateEmail] = useState("");
    const [allusers,updateUsers] = useState([])
    function submit(event) {
        event.preventDefault();
       updateUsers([...allusers,{name:name,email:email}])
       console.log(allusers)
    }
    return (
        <div className="form-container">
            <form onSubmit={submit}>
                <input type="text" placeholder="enter name" name="name" value={name} onChange={(e) => updateName(e.target.value)} required />
                <input type="email" placeholder="enter email" value={email} onChange={(e) => updateEmail(e.target.value)} required />
                <button>Submit</button>
            </form>
            <div>{
                allusers.map((value)=>{
                    return(
                        <p className="user-data">{value.name} {value.email}</p>
                    )
                })
            }</div>
        </div>
    )
}

export default Form;