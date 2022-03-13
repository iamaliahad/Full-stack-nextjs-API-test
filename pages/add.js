import {
    MDBBtn,
    MDBInput,
  } from "mdb-react-ui-kit";
  import Link from 'next/link';
  import {useRouter} from 'next/router'
  import React, { useState } from "react";
  
  const axios = require("axios").default;

function AddNewHero() {
    const [form, setForm] = useState({
        superHero: "",
        realName: ""

    })
    const handleChange=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })


    }
    const handleForm = async(e) => {
        e.preventDefault();
        try {
            const res = await axios("http://localhost:3000/api/Hero",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                data:JSON.stringify(form)
            });
            
            Router.push('/')
        } catch (error) {
            console.log(error)
        }

    }


  return (
    <div className='container'>
        <h1 className="display-3">
            Add a new hero Identity
        </h1>
        <form onSubmit={handleForm}>
            <MDBInput
            onChange={handleChange}
            label="Superhero"
            name="superHero"
            type="text"
            />
            <MDBInput
            className="mt-3"
            onChange={handleChange}
            label="realName"
            name="realName"
            type="text"
            />
            <MDBBtn className="mt-3"  type="submit">Add New Hero</MDBBtn>
        </form>
    </div>
  )
}

export default AddNewHero