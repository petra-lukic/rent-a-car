import "../Styles/BookRide.scss";
import { useState } from "react";
import carData from "../Data/carData";


export default function BookRide () {

    const [car, setCar] = useState(carData[0]);
    const [pickUp, setPickUp] = useState("");
    const [dropOff, setDropOff] = useState("");
    const [pickTime, setPickTime] = useState("");
    const [dropTime, setDropTime] = useState("");

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [zipcode, setZipCode] = useState("");

    const handleCar = (e) => {
        const carName = e.target.value;
        const carItem = carData.find((carItem) => carItem.name === carName);
        setCar(carItem);
    };

    const handlePick = (e) => {
        setPickUp(e.target.value);
    };

    const handleDrop = (e) => {
        setDropOff(e.target.value);
    };

    const handlePickTime = (e) => {
        setPickTime(e.target.value);
    };

    const handleDropTime = (e) => {
        setDropTime(e.target.value);
    };
    
    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleLastName = (e) => {
        setLastName(e.target.value);
    };

    const handlePhone = (e) => {
        setPhone(e.target.value);
    };

    const handleAge = (e) => {
        setAge(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleAddress = (e) => {
        setAddress(e.target.value);
    };

    const handleCity = (e) => {
        setCity(e.target.value);
    };

    const handleZip = (e) => {
        setZipCode(e.target.value);
    };


    return (
        <div id="book-ride" className="book-ride">

            <form >
                <h1>Book a car</h1>
                <div className="book">
                    <div className="book_info">
                        <div className="info-container">
                            <label>Car Type: <span>*</span></label>
                            <select value={car.name} onChange={handleCar} required>
                                {carData.map((carItem) => (
                                    <option value={carItem.name}>{carItem.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className="info-container">
                            <label>Pick-up location: <span>*</span></label>
                            <select value={pickUp} onChange={handlePick} required>
                                <option>Belgrade</option>
                                <option>Novi Sad</option>
                                <option>Bijeljina</option>
                                <option>Banja Luka</option>
                                <option>Zagreb</option>
                                <option>Ljubljana</option>
                            </select>
                        </div>

                        <div className="info-container">
                            <label>Pick-up date: <span>*</span></label>
                            <input
                                id="picktime"
                                value={pickTime}
                                onChange={handlePickTime}
                                type="date"
                                required
                            ></input>
                        </div>

                        <div className="info-container">
                            <label>Drop-off location: <span>*</span></label>
                            <select value={dropOff} onChange={handleDrop} required> 
                                <option>Belgrade</option>
                                <option>Novi Sad</option>
                                <option>Bijeljina</option>
                                <option>Banja Luka</option>
                                <option>Zagreb</option>
                                <option>Ljubljana</option>
                            </select>
                        </div>

                        <div className="info-container">
                            <label>Drop-off date: <span>*</span></label>
                            <input
                                id="droptime"
                                value={dropTime}
                                onChange={handleDropTime}
                                type="date"
                                required
                            ></input>
                        </div>
                    </div>

                    <div className="car-image-table">
                        <img src={`../images/car-models/${car.img}`} alt="" className="car-image-table_image" />
                        <div className="car-image-table_table">
                            <div className="price">
                                <h1>&euro;{car.price}</h1>
                                <p>per day</p>
                            </div>
                            <table>
                                <tr>
                                    {Object.keys(car).slice(2).map((key) =>(
                                        <th>{key}</th>
                                    ))}
                                </tr>
                                <tr>
                                {Object.values(car).slice(2).map((value) => (
                                    <td>{value}</td>
                                ))}
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>

                <h1>Personal informations</h1>

                <div className="personal-info">
                    <div className="info-container">
                        <label>First Name <span>*</span></label>
                        <input
                        value={name}
                        onChange={handleName}
                        type="text"
                        placeholder="Enter your first name"
                        required
                        ></input>
                    </div>

                    <div className="info-container">
                        <label>Last Name <span>*</span></label>
                        <input
                        value={lastName}
                        onChange={handleLastName}
                        type="text"
                        placeholder="Enter your last name"
                        required
                        ></input>
                    </div>

                    <div className="info-container">
                        <label>Phone Number <span>*</span></label>
                        <input
                        value={phone}
                        onChange={handlePhone}
                        type="tel"
                        placeholder="Enter your phone number"
                        required
                        ></input>
                    </div>

                    <div className="info-container">
                        <label>Age <span>*</span></label>
                        <input
                        value={age}
                        onChange={handleAge}
                        type="number"
                        placeholder="18"
                        required
                        ></input>
                    </div>

                    <div className="info-container">
                        <label>Email <span>*</span></label>
                        <input
                        value={email}
                        onChange={handleEmail}
                        type="email"
                        placeholder="Enter your email adress"
                        required
                        ></input>
                    </div>

                    <div className="info-container">
                        <label>Address <span>*</span></label>
                        <input
                        value={address}
                        onChange={handleAddress}
                        type="text"
                        placeholder="Enter your street address"
                        required
                        ></input>
                    </div>

                    <div className="info-container">
                        <label>City <span>*</span></label>
                        <input
                        value={city}
                        onChange={handleCity}
                        type="text"
                        placeholder="Enter your city"
                        required
                        ></input>
                    </div>

                    <div className="info-container">
                        <label>Zip code <span>*</span></label>
                        <input
                        value={zipcode}
                        onChange={handleZip}
                        type="text"
                        placeholder="Enter your zip code"
                        required
                        ></input>
                    </div>

                </div>

                <button type="submit" id="submit-button" className="book-button">Reserve now</button>

            </form>

        </div>
    )
}