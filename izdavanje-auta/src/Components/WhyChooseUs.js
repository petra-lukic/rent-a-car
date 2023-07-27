import "../Styles/WhyChooseUs.scss"
import cars from "../images/groupofcars.png"
import car from "../images/car-whychooseus.png"
import coin from "../images/coin-whyychooseus.png"
import coinInHand from "../images/coin-in-hand-whyychoseus.png"

export default function WhyChooseUs () {
    const bookBtn = () => {
        document
          .querySelector("#book-ride")
          .scrollIntoView({ behavior: "smooth" });
      };
    return (
        <div className="why-choose-us">
            <img src={cars} alt="" className="cars"/>
            <div className="why-choose-us_details">
                <div className="why-choose-us_details_left">
                    <h2>Why choose us?</h2>
                    <h1>Best valued deals you will ever find</h1>
                    <p><br/>Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.</p>
                    <button onClick={bookBtn}>Book a car</button>    
                </div>
                <div className="why-choose-us_details_right">
                    <div className="why-choose-us_details_right_container">
                        <img src={car} alt=""/>
                        <div className="why-choose-us_details_right_container_text">
                            <h1>Cross Country Drive</h1>
                            <p>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p>
                        </div>
                    </div>
                    <div className="why-choose-us_details_right_container">
                        <img src={coin} alt="" />
                        <div className="why-choose-us_details_right_container_text">
                            <h1>All Inclusive Pricing</h1>
                            <p>Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</p>
                        </div>
                    </div>
                    <div className="why-choose-us_details_right_container">
                        <img src={coinInHand} alt="" />
                        <div className="why-choose-us_details_right_container_text">
                            <h1>No Hidden Charges</h1>
                            <p>Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}