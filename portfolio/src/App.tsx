import {Navbar} from './components/Navbar/Navbar.tsx';
import {Hero} from './components/Hero/Hero.tsx';
import {About} from './components/About/About.tsx';
import {Projects} from './components/Projects/Projects.tsx';
import {Contact} from './components/Contact/Contact.tsx';

export const App = () => {

    return (
        <>
            <Navbar/>
            <Hero/>
            <About/>
            <Projects/>
            <Contact/>
        </>
    );
};


