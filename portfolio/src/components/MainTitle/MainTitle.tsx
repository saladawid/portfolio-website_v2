import styles from './MainTitle.module.css';
import underline from '../../assets/underline.png';


interface MainTitleProps {
    label: string;
}

export const MainTitle = ({label}: MainTitleProps) => {
    return (
        <div className={styles.title}>
            <h1>{label}</h1>
            <img src={underline} alt="image-underline"/>
        </div>
    );
};