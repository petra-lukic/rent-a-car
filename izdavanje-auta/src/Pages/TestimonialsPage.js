import HeadingPages from "../Components/HeadingPages"
import Testimonials from "../Components/Testimonials"
import UnmatchedDeals from "../Components/UnmatchedDeals"
import Footer from "../Components/Footer"

export default function TestimonialsPage() {
    return (
        <div className="testimonials-page">
            <HeadingPages heading="testimonials"/>
            <Testimonials />
            <UnmatchedDeals />
            <Footer />
        </div>
    )
}