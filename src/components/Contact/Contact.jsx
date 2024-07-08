import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
export const Contact = () => {
    return (
        <footer className={styles.container} id="contact">
            <div className={styles.text}>
                <h2>Contact</h2>
                <p><span className={styles.typingAnimation}>Feel free to reach out</span></p>
            </div>

            <div className={styles.content}>
                <img src={getImageUrl("contact/contactUs.png")} 
                alt= "picture sitting with a laptop" 
                className={styles.contactImage}/>

                <div className={styles.parent}>
                 <div className={styles.exp}>
                <p>Connect with us! Follow our journey on Instagram, chat with us on WhatsApp, or drop us an email. We’re also on LinkedIn, and you can always give us a call. Plus, we deliver our products across India!<br></br><br/>You can connect with us on:</p>
                </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="email icon"/>
                    <a href="mailto: cometbusters.cb@gmail.com">cometbusters.cb@gmail.com</a>
                </li>

                <li className={styles.link}>
                    <img src={getImageUrl("contact/insta.png")} alt="insta icon"/>
                    <a href="https://www.instagram.com/cometbusters_india/">cometbusters_india</a>
                </li>

                <li className={styles.link}>
                    <img src={getImageUrl("contact/call.png")} alt="call icon"/>
                    <a href="tel:+919826031626">+91 9826031626</a>
                </li>

                <li className={styles.link}>
                    <img src={getImageUrl("contact/location.png")} alt="maps icon"/>
                    <a href="https://maps.app.goo.gl/EohZYBbvjVANWQU88">Tap for Maps</a>
                </li>

            
            </ul>
            </div>
            </div>
        
        
    </footer>
    );
};
export default Contact;