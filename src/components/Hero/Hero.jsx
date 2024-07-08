import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container} id="hero">
            <div className={styles.content}>
                <h1 className={styles.title}><span  className={styles.typingAnimation}>🌟 Unleash Your Cosmic Style! 🌟</span></h1>
                <p className={styles.description}>
                Whether you’re shopping for the latest mobile tech or enhancing your beauty routine, Comet Busters has you covered. Explore with us! 
                </p>
                <div className={styles.button}>
                
                <a href="https://www.cometbusters.in/" className={styles.contactBtn} target="_blank" > Beauty</a>
                <a href="https://bookaphone.com/" className={styles.contactBtn} target="_blank" > Mobiles</a>
                </div>
                
                </div>
                <img src={getImageUrl("hero/logos.png")} alt="image of logos" className={styles.heroImg} />
                <div className={styles.topBlur}/>
                <div className={styles.bottomBlur}/>
        </section>
    );
};
export default Hero;