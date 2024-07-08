import React from "react";
import styles from "./Mobiles.module.css";

import { getImageUrl } from "../../utils";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
export const Mobiles = () => {
    return (
        <section className={styles.container} id="mobiles">
            <h2 className={styles.title}>Mobiles</h2>
            <div className={styles.content}>
                <div className={styles.skills}>{
                    skills.map((skills, id) =>{
                        return(
                            <div key={id} className={styles.skill}>
                            <div className={styles.skillImageContainer}>
                                 <img src={getImageUrl(skills.imageSrc)} alt={skills.title}/>
                            </div>
                            <p>
                               {skills.title} 
                            </p>
                            </div>
                        );
                    })
                    
                    }
                </div>
                <ul className={styles.history}>
                    {
                        history.map((historyItem, id) =>{
                            return(
                                <li key={id} className={styles.historyItem}>
                                    <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organisation} Logo`}/>
                                    <div className={styles.historyItemDetails}>
                                        <h3>{`${historyItem.role}`}</h3>
                                        <p>{`${historyItem.startDate} `}</p>
                                        <ul>
                                        {historyItem.experiences.map((experience, id) => {
                                        return <li key={id}>{experience}</li>;
                                        })}  
                                        </ul>
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>

        </section>
    );
};
export default Mobiles;