import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function PageNotFound () {
  return (
    <>
        <navbar/>
        <div className="wrapper">
            <h3>Oooops...</h3>
            <p>Halaman tidak tersedia</p>
        </div>
        <Footer/>
    </>
  )
}

export default PageNotFound