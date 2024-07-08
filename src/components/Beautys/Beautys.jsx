import React from 'react';
import styles from './Beautys.module.css';

import projects from '../../data/projects.json';
import { BeautyCard } from "./BeautyCard";


export const Beautys = () => {
  return (
    <section id="projects" className={styles.container}>
        <h2 className={styles.title}>Beauty</h2>
        <div className={styles.projects}>{
            projects.map((project,id)=>{
                return(
                   <BeautyCard key={id} project={project} /> 
                )
            })
            }

        </div>

    </section>
    
  );
}

export default Beautys;