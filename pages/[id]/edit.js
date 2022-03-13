import {
    MDBBtn,
    MDBInput,
  } from "mdb-react-ui-kit";
  import Link from 'next/link';
  import Router, {useRouter} from 'next/router'
  import React, { useState } from "react";
  
  const axios = require("axios").default;

function EditHero({heros}) {
    const router = useRouter()
    const heroId = router.query.id
    const [form, setForm] = useState({
        superHero: heros.superHero,
        realName: heros.realName,

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
            const res = await axios(`http://localhost:3000/api/Hero/${heroId}`,{
                method:"PUT",
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
        Edit a new hero Identity
        </h1>
        <form onSubmit={handleForm}>
            <MDBInput
            onChange={handleChange}
            label="Superhero"
            name="superHero"
            type="text"
            value={form.superHero}
            />
            <MDBInput
            className="mt-3"
            onChange={handleChange}
            label="realName"
            name="realName"
            type="text"
            value={form.realName}
            />
            <MDBBtn className="mt-3"  type="submit">Add New Hero</MDBBtn>
        </form>
    </div>
  )
}
export async function getServerSideProps({params}) {
    const id = params.id
    const res = await axios.get(`http://localhost:3000/api/Hero/${id}`);
    
    const { hero } = res.data;
    //console.log(res.data.hero)
    return {
      props: { heros: hero },
    };
  }

export default EditHero