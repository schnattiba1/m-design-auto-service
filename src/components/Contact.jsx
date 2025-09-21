import {Link} from "react-router-dom";

function Contact() {
    /**
     * Clickable telephone link that directs the user to their default phone app
     * with the recipient's phone number already filled in
     */
    const Callto = ({ phone, children }) => {
        return <a href={`tel:${phone}`}>{children}</a>;
    };

    const email = "mdesignauto@gmail.com";

    return (
        <>
        <div className="contact-container">
            <h1>Contact Us</h1>
            <div className="contact-us">
               <h3><b>Phone number:</b> <Callto phone="+353 87 669 5897">087 669 5897</Callto></h3>
                <h3><b>Email address:</b> <a href={`mailto:${email}`} target="_blank">{email}</a></h3>
            </div>
        </div>
            <div className="location-container">
                <h1>Our Location</h1>
                <div className="location">
                    <iframe className="location-mdesign" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9487.472277332745!2d-6.178369678875159!3d53.52441303574269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486719b0a6fe528b%3A0x35ab0c90e2775070!2sM%20Design%20Auto%20Service!5e0!3m2!1sen!2sie!4v1756135611896!5m2!1sen!2sie" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>            
            </div>
        </>
    )
}

export default Contact;