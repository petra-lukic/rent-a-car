import "../Styles/Navbar.scss"
import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../images/logo.png"
import burger from "../images/burger-menu.png"

export default function Navbar() {
    const [showLinks, setShowLinks] = useState(false)
    const toggleMenu = () => setShowLinks(!showLinks)
    const closeMenu = () => setShowLinks(false)
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };  
    return (
        <div>
            <nav className="navbar">
                <Link to="/" onClick={scrollToTop}><img src={logo} alt="logo" id="logo" /></Link>
                <ul>
                    <Link to="/" onClick={scrollToTop}><li>home</li></Link>
                    <Link to="/about" onClick={scrollToTop}><li>about</li></Link>
                    <Link to="/models" onClick={scrollToTop}><li>vehicle models</li></Link>
                    <Link to="/testimonials" onClick={scrollToTop}><li>testimonials</li></Link>
                    <Link to="/contact" onClick={scrollToTop}><li>contact</li></Link>
                </ul>
                <button className="burger" onClick={toggleMenu}>
                    <img src={burger} alt="" />
                </button>
            </nav>
            <div id={showLinks ? "burger-menu-active" : "burger-menu"}>
                <ul>
                    <Link to="/"><li onClick={closeMenu}>home</li></Link>
                    <Link to="/about"><li onClick={closeMenu}>about</li></Link>
                    <Link to="/models"><li onClick={closeMenu}>vehicle models</li></Link>
                    <Link to="/testimonials"><li onClick={closeMenu}>testimonials</li></Link>
                    <Link to="/contact"><li onClick={closeMenu}>contact</li></Link>
                </ul>
            </div>
        </div>
    )
}