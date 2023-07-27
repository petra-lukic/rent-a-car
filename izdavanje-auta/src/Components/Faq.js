import "../Styles/Faq.scss"
import faqData from "../Data/faqData"
import FaqCard from "../Components/FaqCard"

export default function Faq() {

    return (
        <div className="faq">
            <h1>Frequently Asked Questions</h1>
            <h2>FAQ</h2>
            <p className="faq_text">Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.<br/>If you have any specific concerns not covered here, feel free to reach out to our support team for further assistance.</p>
            {faqData.map((q, index) => {
                return (
                    <FaqCard 
                        key = {index}
                        id = {q.id}
                        question = {q.question}
                        answer = {q.answer}
                    />
                )
            })}
        </div>
    )
}