import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
export const About = () => {
    return(
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutimg.png")} 
                alt= "Comet Busters Logo" 
                className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/phone.png")} alt="phone icon"/>
            <div className={styles.aboutItemText}>
                <h3>Mobiles</h3>
                <p><br></br>Comet Busters, founded in 2016, began its journey by offering mobiles, tablets, laptops and electronic accessories. Since then, we’ve experienced remarkable growth, earning a commendable rating of 4.5+ stars on Amazon and 4.6 stars on Google.</p>
            </div>
            </li>
            
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/beauty.png")} alt="beauty icon"/>
            <div className={styles.aboutItemText}>
                <h3>Beauty</h3>
                <p><br></br>In 2018, we embarked on a journey to offer exquisite handcrafted bindis, earstuds, and nosestuds. Our products are designed for temporary beauty enhancement, featuring skin-friendly glue. With a diverse range of over 2500+ items, we take pride in providing unique adornments that resonate with our customers.</p>
            </div>
            </li>
            
            </ul>
            </div>
        </section>
    );
};
export default About;