import "../Styles/FaqCard.scss"
import topToBottom from "../images/top-bottom.png"
import bottomToTop from "../images/bottom-top.png"
import { useState } from "react"

export default function FaqCard(props) {
    const [active, setActive] = useState("");

    const open = (id) => {
        setActive(active === id ? "" : id);
    }


    return (
        <div className="faq-card">
            <div className={active === props.id ? "faq-card_question active-question" : "faq-card_question"} onClick = {() => open(props.id)}>
                <h1>{props.question}</h1>
                <img src={topToBottom} alt="" className={active !== props.id ? "faq-card_question_image active-image" : "faq-card_question_image"}/>
                <img src={bottomToTop} alt="" className={active === props.id ? "faq-card_question_image active-image" : "faq-card_question_image"}/>
            </div>
            <p className={active === props.id ? "faq-card_answer active-answer" : "faq-card_answer"} >{props.answer}</p>
        </div>
    )
}