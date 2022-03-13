import React from 'react'
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBCardText,
    MDBCol,
  } from "mdb-react-ui-kit";
  import Link from 'next/link';
    import { useRouter } from 'next/router';
  const axios = require("axios").default;

function EachHero(heros) {
  return (
    <div className='container'>
        <h1 className="display-3"> Identity of Hero</h1>
        <MDBCol>
                <MDBCard style={{ width: "22rem" }} className='my-3'>
                  <MDBCardImage
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Others/images/43.webp"
                    waves
                  />
                  <MDBCardBody>
                    <MDBCardTitle>{heros.superHero}</MDBCardTitle>
                    <MDBCardText>
                      Reveal Identity
                    </MDBCardText>
                   
                    <MDBBtn className="btn btn-danger">Delete Hero</MDBBtn>
                   
                    
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

    </div> 
  )
}
export async function getServerSideProps(params) {
    const id = params.id
    const res = await axios.get(`http://localhost:3000/api/Hero/${id}`);
    
    const { hero } = res.data;
    //console.log(res.data.hero)
    return {
      props: { heros: hero },
    };
  }

export default EachHero