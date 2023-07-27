import "../Styles/Testimonials.scss"
import { useState } from "react"
import testimonialsData from "../Data/testimonialsData"
import TestimonialCard from "./TestimonialCard"

export default function Testimonials() {
    const num = testimonialsData.length;
    const [activeIndex, setActiveIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(num-1)
    const [nextIndex, setNextIndex] = useState(1);
    const [order, setOrder] = useState([prevIndex, activeIndex, nextIndex]);
    const handlePrev = () => {
        setActiveIndex((activeIndex === 0) ? num - 1 : activeIndex - 1);
        setPrevIndex((prevIndex === 0) ? num - 1 : prevIndex - 1);
        setNextIndex((nextIndex === 0) ? num - 1 : nextIndex - 1);
        setOrder([prevIndex, activeIndex, nextIndex]);
    };
    const handleNext = () => {
        setActiveIndex((activeIndex === num - 1) ?  0 : activeIndex + 1);
        setPrevIndex((prevIndex === num - 1) ? 0 : prevIndex + 1);
        setNextIndex((nextIndex === num - 1) ? 0 : nextIndex + 1);
        setOrder([prevIndex, activeIndex, nextIndex]);
    };

    return (
        <div className="testimonials">
            <h1>Hear What Our Customers Say</h1>
            <p>
                We take immense pride in providing exceptional car rental services to our valued customers. Don't just take our word for it; hear what our satisfied clients have to say about their experiences with RentACar. Read their genuine testimonials below and discover why we are the go-to choice for hassle-free car rentals.
            </p>

            <div className="cards">
                <button className="cards_button cards_button_go-left" onClick={handlePrev}>❰</button>
                {order.map((index) => {
                    return (
                            <TestimonialCard 
                            key = {index}
                            text = {testimonialsData[index].text}
                            name = {testimonialsData[index].name}
                            city = {testimonialsData[index].city}
                            img = {testimonialsData[index].img}
                            />
                        )}
                    )
                }
                <button className="cards_button cards_button_go-right" onClick={handleNext}>❱</button>
            </div>
           
        </div>
    )
}