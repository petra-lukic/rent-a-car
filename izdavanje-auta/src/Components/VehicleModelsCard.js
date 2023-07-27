import "../Styles/VehicleModelsCard.scss"
import { Link } from "react-router-dom"

export default function VehicleModelsCard(props) {
    return (
        <div className="vm-card">
            <img src={`../images/car-models/${props.img}`} alt=""/>
            <div className="vm-card_text">
                <div className="vm-card_text_container">
                    <h1>{props.name}</h1>
                    <h1>&#8364;{props.price}<span>/day</span></h1>
                </div>
                <div className="vm-card_text_container">
                    <p>{props.mark}</p>
                    <p>{props.doors}</p>
                </div>
                <div className="vm-card_text_container">
                    <p>{props.transmission}</p>
                    <p>{props.fuel}</p>
                </div>
            </div>
            <Link to="/"><button>book now</button></Link>
        </div>
    )
}