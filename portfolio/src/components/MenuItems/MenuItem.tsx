import styles from './MenuItem.module.css';
import line from '../../assets/line.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';


interface MenuItemProps {
    href: string;
    label: string;
    activeMenu: string;
    setActiveMenu: (menu: string) => void;
}


export const MenuItem = ({href, label, activeMenu, setActiveMenu}: MenuItemProps) => {
    return (
        <AnchorLink className={styles.anchor} href={href} offset={50}>
            <p onClick={() => setActiveMenu(label)}>{label}</p>
            {activeMenu === label ?
                <img src={line} alt="image-underline" className={styles['image-underline']}/> : null}
        </AnchorLink>
    );
};