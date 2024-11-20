import styles from './About.module.css';
import {FaNode, FaReact, FaJsSquare} from 'react-icons/fa';
import {SiTypescript, SiNestjs, SiExpress} from 'react-icons/si';
import {MainTitle} from '../MainTitle/MainTitle.tsx';


export const About = () => {
    return (
        <div id="about" className={styles.aboutContainer}>
            <MainTitle label={'About me'}/>

            <div className={styles.aboutSections}>
                <div className={styles.aboutDescription}>
                    <p>
                        I’m Dawid Salamon, an aspiring backend developer with several years of experience in
                        JavaScript. I work primarily with backend technologies like Node.js, NestJS, and Express.js,
                        and I also use React to build dynamic web interfaces. I’m passionate about server-side
                        development and focused on creating scalable applications while constantly expanding my
                        knowledge of modern JavaScript frameworks.
                    </p>
                </div>
                <div className={styles.aboutSkills}>
                    <div className={styles.aboutSkill}>
                        <p>Node.js</p>
                        <FaNode className={styles.aboutIcon}/>
                    </div>
                    <div className={styles.aboutSkill}>
                        <p>JavaScript</p>
                        <FaJsSquare className={styles.aboutIcon}/>
                    </div>
                    <div className={styles.aboutSkill}>
                        <p>TypeScript</p>
                        <SiTypescript className={styles.aboutIcon}/>
                    </div>
                    <div className={styles.aboutSkill}>
                        <p>NestJS</p>
                        <SiNestjs className={styles.aboutIcon}/>
                    </div>
                    <div className={styles.aboutSkill}>
                        <p>Express.js</p>
                        <SiExpress className={styles.aboutIcon}/>
                    </div>
                    <div className={styles.aboutSkill}>
                        <p>React</p>
                        <FaReact className={styles.aboutIcon}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
