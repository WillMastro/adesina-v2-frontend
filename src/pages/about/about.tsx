
import NavBar from '../../components/navBar/navbar';
import CityCarosel from '../home/city_carosel';
import './style.css'
import { Slide, Fade } from 'react-awesome-reveal';
import TeamCarosel from './team_carosel';
import Footer from '../components/footer/footer';

const About = () => {




    return (<>
        <Fade>
            <div className="about">

                <section className='' >
                    <NavBar active="About" />
                    <div className='hero-secton img-cy'>
                        <div className='dark-scarf ls-centered-align'>
                            <div className='my-col-10 off-1 down-12 xs-container'>
                            <Slide direction='right'>
                                <div className='my-col-8 xs-12 down-20 xs-down-15vh'>
                                    <div className='alice besley-bold px30 xs-px40'>
                                        <Slide direction='up'><span>About Us </span></Slide>
                                        <Slide direction='left'><span className='dash xs-down-5 down-2'></span></Slide>
                                    </div>
                                    <div className='my-col-10 xs-12 down-5 xs-down-10'>
                                        <Slide direction='right'>
                                            <span className='besley-regular px13 xs-px13 faded-sol'>Driven by AfriProsperity and the core values of Excellence, Audacity and Honor, Adesina Develops Enabling Communities for Emerging Business Leaders.</span>
                                        </Slide>
                                    </div>
                                </div>
                                </Slide>

                                <div className='my-col-4 xs-12 xs-down-10 down-5 my-bottom-10'>
                                    <TeamCarosel />
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <section className="footer-section xs-down-10">
                    <Footer />
                </section>
            </div>
        </Fade>
    </>);
}

export default About;