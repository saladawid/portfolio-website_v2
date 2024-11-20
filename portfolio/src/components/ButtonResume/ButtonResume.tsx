import cv from '../../assets/Dawid Salamon__CV.pdf';
import styles from './ButtonResume.module.css';

interface ButtonResumeProps {
    label: string;
    href?: string;
}

export const ButtonResume = ({label}: ButtonResumeProps) => {
    return (
        <div className={styles.button}><a href={cv} target="_blank" rel="noreferrer">{label}</a></div>
    );
};