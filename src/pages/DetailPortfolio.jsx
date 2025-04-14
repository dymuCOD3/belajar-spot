import React from 'react'
import { Navigate, useParams } from "react-router-dom"
import '../styles/detailPortfolio.css'
import { portfolioList } from '../data/dataPortfolio'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'  

function DetailPortfolio() {
    const { id } = useParams();
    const data = portfolioList.find((item) => item.id === id) 
    if (data == undefined) {
      return <Navigate to='/page-not-found'/>
    }
    
    return (
      <>
        <Navbar />
        <section id='detail-portfolio'>
          <div className='wrapper'>
            <h1>{data.title}</h1>
            <img src={data.image}></img>
            <p className='skill'><b>Skills:</b> {data.skills}</p>
          </div>
        </section>
        <Footer />
        <ScrollToTop />
      </>
  )
}

export default DetailPortfolio