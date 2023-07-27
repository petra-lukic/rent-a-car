import "../Styles/About.scss"
import HeadingPages from "../Components/HeadingPages"
import StartJourney from "../Components/StartJourney"
import Footer from "../Components/Footer"

export default function About() {
    return (
        <div className="about">
            <HeadingPages heading="about us"/>
            <div className="about_text">
                <h1>Welcome to RentACar!</h1>
                <p>
                    At RentACar we are dedicated to providing you with the best and most convenient car rental experience. Whether you're a local resident or a traveler exploring new destinations, we've got you covered.
                </p>
                <h2>Our mission:</h2>
                <p>
                    To simplify your travel and transportation needs by offering a wide range of high-quality vehicles at affordable prices. We aim to exceed your expectations and ensure your journey is comfortable, safe, and stress-free.
                </p>
            </div>
            <StartJourney />
            <Footer />
        </div>
    )
}