import React from 'react';
import styles from "./BeautyCard.module.css";
import { getImageUrl } from '../../utils';
export const BeautyCard = ({project: {title, imageSrc, description, skills, demo, source }}) => {
    return(
        <div className={styles.cardContainer}>
        <div className={styles.container}>
                    <img src={getImageUrl(imageSrc)} alt={'Image of ${project.title}'} className={styles.image}/>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.description}>{description}</p>
                    
                    <div className={styles.links}>
                       
                        <a href={source} className={styles.link}>Visit Online Store</a>
                    </div>
                    </div>
                    </div>
    );
};