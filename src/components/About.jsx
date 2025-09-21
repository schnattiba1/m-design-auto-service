import team from "/src/imgs/team.jpg";

function About() {
    return (
        <>
        <div className="team-container">
            <div className="team-heading">
            <h1>Our Team</h1>
            </div>
            <br/>
            <img src={team} alt="m-design-team-photo" className="team" />
            <div className="about-us">
                <h1 className="heading">Who are we?</h1>
                <h3 className="context">
                    M Design Auto Service, is an automobile repair shop that has been established since 2017. <br/>
                    We provide maintenance and repair services for all types of motor vehicles.               
                </h3>
                </div>
            <div className="provide-container">
                <h1>What do we offer?</h1>
                <div className="provide">
                    <ul>
                        <li>Computer Diagnostics</li>
                        <li>Turbocharger repair</li>
                        <li>Batteries and Tyres</li>
                        <li>Engine Rebuilds</li>
                        <li>Car Service</li>
                        <li>Exhausts</li>
                    </ul>
                </div>
            </div>
            <div className="opening-hours">
                <h1>Opening hours</h1>
                <h3><b>Monday-Friday:</b> 9am-1pm, 2pm-6pm</h3>
                <h3><b>Saturday:</b> 9am-1pm</h3>
                <h3><b>Sunday:</b> <span>closed</span></h3>
            </div>
        </div>
        </>
    )
}

export default About;