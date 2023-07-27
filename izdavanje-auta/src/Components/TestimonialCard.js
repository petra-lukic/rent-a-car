import "../Styles/TestimonialCard.scss"
import testimonialsData from "../Data/testimonialsData"
import leftQM from "../images/left-quotes-sign.png"
import rightQM from "../images/right-quotes-sign.png"

export default function TestimonialCard (props) {

    

    return (
        <div className="testimonial-card">
            <div className="testimonial-card_section1">
                <img src={leftQM} alt="" className="qmark left"/>
                <p>{props.text}</p>
                <img src={rightQM} alt="" className="qmark right"/>
            </div>
            <div className="testimonial-card_section2">
                <div style={{backgroundImage: `url(../images/testimonials/${props.img})`}} className="profile-picture">
                </div>
                <div>
                    <h1>{props.name}</h1>
                    <h2>{props.city}</h2>
                </div>
            </div>
        </div>
    )
}