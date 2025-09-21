import Garage from "/src/imgs/garage.jpg";
import Cars from "/src/imgs/cars.jpg";
import Team from "/src/imgs/team.jpg";

import Footer from "./Footer";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <div className="image-container">
                <img className="img" src={Team} alt="team-photo" />
                <div className="text">
                    <h1 className="center">Who is M Design?</h1>
                    <button><Link to="/about">Who are we?</Link></button>
                </div>
            </div> 
            <div className="image-container">
                <img className="img" src={Cars} alt="cars" />
                <div className="text">
                    <h1 className="center">Want to contact us?</h1>
                    <button><Link to="/contact">Reach out to us!</Link></button>
                </div>
            </div> 
            <div className="image-container">
                <img className="img" src={Garage} alt="mdesign-garage" />
                <div className="text">
                    <h1>Where are we located?</h1>
                     <button><Link to="https://maps.app.goo.gl/68T5aNX1Zzd5Ps4J8">Find us here!</Link></button>
                </div>
            </div>
        </>
    )
}

export default Home;