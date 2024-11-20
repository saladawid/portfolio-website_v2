import {ButtonConnect} from '../ButtonConnect/ButtonConnect.tsx';
import {ButtonResume} from '../ButtonResume/ButtonResume.tsx';
import styles from './Hero.module.css';

export const Hero = () => {
    return (
        <div id="home" className={styles.heroContainer}>
            <h1><span>I am Dawid Salamon</span> an aspiring backend developer.</h1>
            <div className={styles.heroButtonsContainer}>
                <ButtonConnect href={'#contact'} label={'Contact with me'} isDisplayed={true}/>
                <ButtonResume label={'Download my CV'}/>
            </div>
        </div>
    );
};
