import '../styles/About.css'
import { FaHtml5 } from "react-icons/fa6";
import { SiAdobeaftereffects } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

function About() {
    return (
        <section id="about">
            <div className="wrapper">
                <h3>About</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, vel!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum modi expedita soluta ducimus, rem excepturi consectetur voluptatibus animi nihil facilis aperiam! Recusandae exercitationem sequi adipisci doloribus a facilis optio ea?</p>
                <h4>Programming Language & Tools</h4>
                <div className="skills">
                    <FaHtml5 /><SiAdobeaftereffects /><VscVscode />

                </div>
            </div>
        </section>
    )
}

export default About