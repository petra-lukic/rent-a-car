import Hero from "../Components/Hero"
import BookRide from "../Components/BookRide"
import StartJourney from "../Components/StartJourney"
import UnmatchedDeals from "../Components/UnmatchedDeals"
import WhyChooseUs from "../Components/WhyChooseUs"
import Testimonials from "../Components/Testimonials"
import Faq from "../Components/Faq"
import Footer from "../Components/Footer"

export default function Home() {
    return (
        <div className="home">
            <Hero />
            <BookRide />
            <StartJourney />
            <UnmatchedDeals />
            <WhyChooseUs />
            <Testimonials />
            <Faq />
            <Footer />
        </div>
    )
}