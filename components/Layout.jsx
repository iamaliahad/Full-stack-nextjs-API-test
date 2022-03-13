import Navbar from "./Navbar"
import 'mdb-react-ui-kit/dist/css/mdb.min.css'


function Layout({children}) {
  return (
    <>
    <Navbar />
    {children}
   
    
    </>
  )
}

export default Layout