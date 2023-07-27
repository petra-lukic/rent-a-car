import "../Styles/Hero.scss"

import krug from "../images/krug.png"
import autoHome from "../images/bmw-home.png"

export default function Hero() {
    const bookBtn = () => {
        document
          .querySelector("#book-ride")
          .scrollIntoView({ behavior: "smooth" });
      };
    const learnMoreBtn = () => {
        document
          .querySelector("#start-journey")
          .scrollIntoView({ behavior: "smooth" });
      };
    
    return (
        <section className="hero">
            <img src={krug} alt="" className="krug1"/>
            <img src={krug} alt="" className="krug2"/>
            <img src={autoHome} alt="" className="auto-home" />
            <div className="hero-text">
                <h1>Why settle for ordinary</h1>
                <h1>when you can drive <span>extraordinary?</span></h1>
                <p>Rent the car of your dreams and turn heads wherever you go. </p>
                <div className="buttons">
                    <button className="button-home" onClick={bookBtn}>Book a ride</button>
                    <button className="button-home" onClick={learnMoreBtn}>Learn more</button>
                </div>
            </div>
        </section>
    )
}