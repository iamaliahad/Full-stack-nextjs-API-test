import Link from 'next/link'
import {MDBBtn} from 'mdb-react-ui-kit'
import React from 'react'

function Navbar() {
  return (
    <nav className='navbar container'>
        <Link href="/">
        <a className='navbar-brand'> Superhero identity</a>
        </Link>
        <Link href="/add" passHref>
        <MDBBtn color="primary">New Identity</MDBBtn>
        </Link>

    </nav>
  )
}

export default Navbar