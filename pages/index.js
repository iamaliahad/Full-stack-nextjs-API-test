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

const axios = require("axios").default;
function index({ heros }) {
  return (
    <div>
      <div className="container">
        <h1 className="display-2">Superhero Identity manager</h1>
        <div>
          {heros.map((hero) => {
            return (
              <MDBCol key={hero.id}>
                <MDBCard style={{ width: "22rem" }} className='my-3'>
                  <MDBCardImage
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Others/images/43.webp"
                    waves
                  />
                  <MDBCardBody>
                    <MDBCardTitle>{hero.superHero}</MDBCardTitle>
                    <MDBCardText>
                      Reveal Identity
                    </MDBCardText>
                    <Link href={`/${hero._id}`} passHref>
                    <MDBBtn>View Hero</MDBBtn>
                    </Link>
                    <Link href={`/${hero._id}/edit`} passHref>
                    <MDBBtn className="mx-2">Edit Hero</MDBBtn>
                    </Link>
                    
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await axios.get("http://localhost:3000/api/Hero");
  //console.log(res.data.hero)
  const { hero } = res.data;
  return {
    props: { heros: hero },
  };
}

export default index;
