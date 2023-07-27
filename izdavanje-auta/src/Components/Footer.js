import "../Styles/Footer.scss";
import phone from "../images/phone.png"
import email from "../images/email.png"

export default function Footer() {
    return (
        <footer>
            <div className="footer_container">
                <div className="footer_container_contact">
                    <img src={phone} alt=""/>
                    <p>(+381) 065 886 48 24</p>
                </div>
                <div className="footer_container_contact">
                    <img src={email} alt="" />
                    <p>rentacar@gmail.com</p>
                </div>
            </div>
            <div className="footer_container">
                <h1>Rent a car</h1>
                <p>Experience the perfect blend of value and quality with our exclusive deals. At <span>RentACar</span>, we're committed to making your journey exceptional and your budget happy.</p>
            </div>
            <div className="footer_container">
                <h1>Locations</h1>
                <h2>Belgrade</h2>
                <h2>Novi Sad</h2>
                <h2>Bijeljina</h2>
                <h2>Banja Luka</h2>
                <h2>Zagreb</h2>
                <h2>Ljubljana</h2>
            </div>
            <div className="footer_container">
                <h1>Working hours</h1>
                <p>Mon - Fri: 9:00 - 21:00</p>
                <p>Sat: 9:00 - 19:00</p>
                <p>Sun: Closed</p>
            </div>
        </footer>
    )
}