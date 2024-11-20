import {useRef, useState} from 'react';
import {ButtonConnect} from '../ButtonConnect/ButtonConnect.tsx';
import styles from './Navbar.module.css';
import logo from '../../assets/logo.png';
import {CiMenuBurger as OpenMenu} from 'react-icons/ci';
import {AiOutlineClose as CloseMenu} from 'react-icons/ai';
import {MENU_LABELS} from '../../data/menuLabels.ts';
import {MenuItem} from '../MenuItems/MenuItem.tsx';

export const Navbar = () => {

    const [activeMenu, setActiveMenu] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuRef = useRef<HTMLUListElement>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (menuRef.current) {
            menuRef.current.style.right = isMenuOpen ? '-350px' : '0';
        }
    };

    return (
        <div className={styles.navbarContainer}>
            <img src={logo} alt="logo" className={styles.logoImage}/>
            <OpenMenu className={styles.menuOpenIcon} onClick={toggleMenu}/>
            <ul ref={menuRef} className={styles.menuList}>
                <CloseMenu className={styles.menuCloseIcon} onClick={toggleMenu}/>
                {MENU_LABELS.map((menuLabel) => (
                    <li key={menuLabel.href}>
                        <MenuItem
                            href={menuLabel.href}
                            label={menuLabel.label}
                            activeMenu={activeMenu}
                            setActiveMenu={setActiveMenu}/>
                    </li>
                ))}
            </ul>
            <ButtonConnect href={'#contact'} label={'Contact with me'}/>
        </div>
    );
};