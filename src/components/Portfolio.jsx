import '../styles/Portfolio.css'
import { portfolioList } from '../data/dataPortfolio'
import {Link} from 'react-router-dom'

function Portfolio() {
  return (
    <section id="portfolio">
        <div className="wrapper">
            <h3>My Portfolio</h3>
            <div className="grid">
            {
                portfolioList.map((item)=>{
                    return (
                        <div className="item" key={item.id}>
                            <Link to={`/portfolio/${item.id}`}><img src={item.image}/></Link>
                        </div>
                    )
                })
            }    
                
            </div>
        </div>
    </section>
  )
}

export default Portfolio