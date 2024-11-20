import {PROJECT_NAMES} from '../../data/projectNames.ts';
import {ProjectName} from '../../types/projectName.ts';
import {MainTitle} from '../MainTitle/MainTitle.tsx';
import styles from './Projects.module.css';

export const Projects = () => {
    return (
        <div id="projects" className={styles.projectsContainer}>
            <MainTitle label={'My Projects'}/>
            <div className={styles.projectsList}>
                {PROJECT_NAMES.map((project: ProjectName) => {
                    return (
                        <div key={project.id} className={styles.projectCard}>
                            <h1>{project.name}</h1>
                            <p>{project.description}</p>
                            <div className={styles.linksWrapper}>
                                <div className={styles.projectLink}>
                                    <a href="">Demo</a>
                                </div>
                                <div className={styles.projectLink}>
                                    <a href="">Code</a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
