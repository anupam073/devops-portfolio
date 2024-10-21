import React from 'react';
import './About.css';
import Image from '../../assets/avatar-2.svg';
import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="About">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            <br />Hello! I'm Anupam, a passionate engineer from India. I'm enthusiastic about optimizing software processes, exploring new technologies, and specializing in quality assurance and process automation to ensure smooth and efficient workflows.<br />
                            
                            <br/>Here are a few technologies I’ve been working with recently: <br/>
                        </p>
                        <ul className="about__list">
                            <li>Java</li>
                            <li>Selenium</li>
                            <li>Linux</li>
                            <li>Python</li>
                            <li>Appium</li>
                            <li>Jenkins</li>
                            <li>Node.js</li>
                            <li>TestNG</li>
                            <li>Docker</li>
                            <li>React.js</li>
                            <li>Maven</li>
                            <li>Git</li>
                            <li>Github</li>
                            <li>Postman</li>
                            <li>Ansible</li>
                        </ul>
                        <button className="btn" onClick={downloadResume}>Donwload CV</button>
                    </div>

                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About