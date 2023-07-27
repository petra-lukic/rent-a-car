import "../Styles/StartJourney.scss"
import chooseCar from "../images/choose-car.png"
import bookOnline from "../images/book-online.png"
import drive from "../images/drive.png"

export default function StartJourney () {
    return (
        <div id="start-journey" className="start-journey">
            <h2>Start your journey today</h2>
            <h1>Effortless car rental solutions</h1>
            <div className="start-journey-boxes">
                <div className="start-journey-boxes_box">
                    <img src={chooseCar} alt="" />
                    <h1>Plan Your Trip</h1>
                    <p>Get ready for your adventure by choosing the perfect car from our extensive range of options.</p>
                </div>
                <div className="start-journey-boxes_box">
                    <img src={bookOnline} alt="" />
                    <h1>Book Online</h1>
                    <p>Experience a seamless rental process with our user-friendly online platform - book your car in just a few simple steps.</p>
                </div>
                <div className="start-journey-boxes_box">
                    <img src={drive} alt="" />
                    <h1>Hit the Road</h1>
                    <p>Take the driver's seat and embark on a memorable journey with confidence and convenience.</p>
                </div>
            </div>
        </div>
    )
}