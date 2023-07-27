import "../Styles/Contact.scss"
import HeadingPages from "../Components/HeadingPages"
import Footer from "../Components/Footer"

export default function Contact() {
    return (
        <div>
            <HeadingPages heading="contact" />
            <div className="contact">
                <div className="contact_text">
                    <h1>Let's Stay Connected</h1>
                    <p>
                        Reach out to us using the contact form on the right.<br/>Whether it's about reserving a vehicle, special requests, or anything else, we're all ears! Our goal is to make sure you have a smooth and memorable journey.
                    </p>
                </div>
                <form className="contact_form" method="POST" target="blank" action="https://formspree.io/f/mbjeekqq" id="">
                    <div className="contact_form_personal-info" data-id="full-name">
                        <label for="full-name">Your Name<span>*</span></label>
                        <input id="full-name" placeholder="Enter your name" type="text" name="name" required="required"/>
                    </div>
                    <div className="contact_form_personal-info" data-id="email">
                        <label for="email">Your Email Adress<span>*</span></label>
                        <input id="full-name" placeholder="Enter your email address" type="email" name="_replyto" required="required"/>
                    </div>
                    <div className="contact_form_message" data-id="message">
                        <label>Your Message<span>*</span></label>
                        <textarea placeholder="Enter your message" id="message" name="message" required="required" rows="7" minlength="30" />
                    </div>
                    <button type="submit" id="submit-button" className="contact_form_button">Send</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}