import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import cv from '../../assets/Dawid Salamon__CV.pdf';

export const Hero = () => {
    return (
        <div id="home" className="hero">

            <h1>
                <span>I am Dawid Salamon</span> an aspiring backend developer.
            </h1>

            <div className="hero-action">
                <div className="hero-connect">
                    <AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink>
                </div>
                <div className="hero-resume"><a href={cv} target="_blank" rel="noreferrer">My resume</a></div>
            </div>
        </div>
    );
};


