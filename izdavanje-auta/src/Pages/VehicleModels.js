import "../Styles/VehicleModels.scss"
import HeadingPages from "../Components/HeadingPages"
import carData from "../Data/carData"
import VehicleModelsCard from "../Components/VehicleModelsCard"
import Footer from "../Components/Footer"

export default function VehicleModels() {
    const vmCard = carData.map((car, index) => {
        return (
            <VehicleModelsCard
                key = {index}
                img = {car.img}
                name = {car.name}
                price = {car.price}
                mark = {car.mark}
                doors = {car.doors}
                transmission = {car.transmission}
                fuel = {car.fuel}
            />
        )
    });
    return (
        <div className="vehicle-models">
            <HeadingPages heading="vehicle models"/>
            <div className="vehicle-models_cards">
                {vmCard}
            </div>
            <Footer />
        </div>
    )
}