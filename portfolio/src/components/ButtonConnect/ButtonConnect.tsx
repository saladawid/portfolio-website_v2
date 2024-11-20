import styles from './ButtonConnect.module.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

interface ButtonConnectProps {
    label: string;
    href: string;
    isDisplayed?: boolean;
}

export const ButtonConnect = ({label, href, isDisplayed}: ButtonConnectProps) => {
    return (
        <div className={`${styles.button} ${isDisplayed ? null : styles.IsDisplay} `}>
            <AnchorLink className={styles.anchor} offset={10} href={href}>
                {label}
            </AnchorLink>
        </div>
    );
};
