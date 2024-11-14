import {useRef, useState} from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import underline from '../../assets/underline.svg';
import menuOpen from '../../assets/open_menu.png';
import menuClose from '../../assets/close_menu.png';

const menuItems = [
    {label: 'Home', href: '#home'},
    {label: 'About', href: '#about'},
    {label: 'Projects', href: '#projects'},
    {label: 'Contact', href: '#contact'},
];

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
        <div className="navbar">
            <img src={logo} alt="logo" width="120px"/>
            <img src={menuOpen} alt="image-open" className="navbar-image-open" onClick={toggleMenu}/>
            <ul ref={menuRef} className="navbar-menu">
                <img src={menuClose} alt="image-close" className="navbar-image-close" onClick={toggleMenu}/>
                {menuItems.map(menuItem => (
                    <li key={menuItem.href}>
                        <AnchorLink className="anchor-link" href={menuItem.href} offset={50}>
                            <p onClick={() => setActiveMenu(menuItem.label)}>{menuItem.label}</p>
                            {activeMenu === menuItem.label ?
                                <img src={underline} alt="image-underline" width="60px"/> : null}
                        </AnchorLink>
                    </li>
                ))}
            </ul>
            <div className="navbar-connect">
                <AnchorLink className="anchor-link" offset={10} href="#contact">
                    Connect with me
                </AnchorLink>
            </div>
        </div>
    );
};