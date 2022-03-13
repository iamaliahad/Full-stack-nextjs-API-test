
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdb-react-ui-kit";
const axios = require("axios").default;
import Link from "next/link";
import {useRouter} from "next/router"


function EachHero({heros}) {
  const router = useRouter();
  const heroId = router.query.id;
  const deleteHero = async () => {
    try {
      const deleteHero = await axios(
        `http://localhost:3000/api/Hero/${heroId}`,
        {
          method: "DELETE"
        }
      );
      router.push('/')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1 className="display-3"> Identity of Hero</h1>
      <MDBCol>
        <MDBCard style={{ width: "22rem" }} className="my-3">
          <MDBCardImage
            className="img-fluid"
            src="https://mdbootstrap.com/img/Photos/Others/images/43.webp"
            waves
          />
          <MDBCardBody>
            <MDBCardTitle>{heros.superHero}</MDBCardTitle>
            <MDBCardText>Reveal Identity</MDBCardText>

            <MDBBtn onClick={deleteHero} className="btn btn-danger">
              Delete Hero
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </div>
  )
}
export async function getServerSideProps({params}) {
  const id = params.id;
  const res = await axios.get(`http://localhost:3000/api/Hero/${id}`);

  const { hero } = res.data;
  //console.log(res.data.hero)
  return {
    props: { heros: hero },
  }
}

export default EachHero;
