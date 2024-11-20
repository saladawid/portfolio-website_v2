import React from 'react';
import styles from './Contact.module.css';
import {FaLinkedin} from 'react-icons/fa';
import {IoMailOutline} from 'react-icons/io5';
import {MainTitle} from '../MainTitle/MainTitle.tsx';
import {IoLogoGithub} from 'react-icons/io';

export const Contact = () => {

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
    };

    return (
        <div id="contact" className={styles.contactContainer}>
            <MainTitle label="Contact"/>
            <div className={styles.contactSections}>
                <div className={styles.contactInfo}>
                    <h1>Let's talk</h1>
                    <p>I'm currently available to take on new job.</p>
                    <div className={styles.contactDetails}>
                        <div className={styles.contactDetail}>
                            <IoMailOutline className={styles.contactIcon}/>
                            <a href="mailto:dawidsalamon@gmail.com">Email</a>
                        </div>
                        <div className={styles.contactDetail}>
                            <FaLinkedin className={styles.contactIcon}/>
                            <a href="https://www.linkedin.com/in/dawid-salamon89/" target="_blank"
                               rel="noreferrer">Linkedin</a>
                        </div>
                        <div className={styles.contactDetail}>
                            <IoLogoGithub className={styles.contactIcon}/>
                            <a href="https://github.com/saladawid" target="_blank" rel="noreferrer">Github</a>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className={styles.contactForm}>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" placeholder="Enter your name" name="name" id="name"/>
                    <label htmlFor="email">Your Email</label>
                    <input type="text" placeholder="Enter your email" name="email" id="email"/>
                    <label htmlFor="message">Write your message here</label>
                    <textarea
                        name="message"
                        rows={6}
                        placeholder="Enter your message"
                        id="message"
                    />
                    <button type="submit" className={styles.contactSubmit}>
                        Submit now
                    </button>
                </form>
            </div>
        </div>
    );
};