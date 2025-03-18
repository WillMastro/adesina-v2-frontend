import NavBar from "../../components/navBar/navbar";
import { Slide, Fade } from "react-awesome-reveal";
import "./style.css"
import Footer from "../components/footer/footer";
import { useNavigate } from "react-router-dom";


const HomePage = () => {
    const Navigate = useNavigate()

    return (
        <>
            <Fade>
                <div className="home">
                    <section>

                        <div className="video-container">
                            <video muted autoPlay>
                                <source src={"https://res.cloudinary.com/dv5skyhvl/video/upload/v1742200956/How_to_Scale_Your_Income_As_A_Founder___Adesina_Circle___AfriProsperity_ihm4j7.mp4"} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="bg-overlay-2">
                                <NavBar />
                                <div className="container ls-centered down-30 xs-down-20vh">
                                    <div className="px40 alice besley-bold xs-px30">Round Table With Adesina</div>
                                    <div className="my-col-10 off-1 down-5 xs-down-5"><span className="faded-sol px13 xs-px20 besley-regular">Roundtable With Adesina is an exclusive gathering of visionary business leaders, key industry players, and savvy wealth enthusiasts. This curated community comes together to share unconventional wealth intelligence, explore innovative opportunities, and foster meaningful connections.
                                    </span>
                                    </div>
                                    <div className="my-mother down-5 gap-elements xs-down-10 space-30 ls-flex">
                                        <Slide direction="down" className="hidden-x" >
                                            <a href="#about" className="button xs-px15 px12 alice besley-regular">Learn More</a>
                                        </Slide>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="about">
                        <div className="container">
                            <div className="ls-centered-align ls-gap-eleents">
                            <div className="my-col-6 hidden-ls">
                                    <div className="img-container-city"><img src="/table.jpg" alt="" /></div>
                                </div>
                                <div className="my-col-7 alice px12  besley-regular xs-down-5">
                                    <div><span className="alice px10 xs-px13 besley-regular">Roundtable With Adesina is an exclusive gathering of visionary business leaders, key industry players, and savvy wealth enthusiasts. This curated community comes together to share unconventional wealth intelligence, explore innovative opportunities, and foster meaningful connections.</span></div>
                                    <h2 className="down-5 xs-down-5 px13 xs-px13">Join Our Exclusive <em>Roundtable With Adesina</em></h2>
                                    <p className="down-5 xs-down-5 px10 xs-px13">By joining our Roundtable With Adesina, you'll gain access to:</p>
                                    <ul className="px9 my-col-10 off-1 xs-12 down-2 xs-down-5 v-gap-20 xs-px13">
                                        <li>Unconventional wealth intelligence and actionable insights from industry thought leaders</li>
                                        <li>Exclusive opportunities for collaboration, investment, and growth</li>
                                        <li>A curated network of like-minded individuals who share your passion for wealth creation and success</li>
                                        <li>A supportive environment that fosters innovation, creativity, and strategic thinking</li>
                                    </ul>

                                    <p className="my-col-12 down-5 xs-down-3 xs-px13 px10">If you're a business leader, entrepreneur, investor, or wealth enthusiast looking to elevate your network, expand your opportunities, and accelerate your growth, we invite you to join our exclusive <strong>Roundtable With Adesina</strong>.</p>
                                   <div className="down-5 xs-down-10 my-col-12"> <button className="button xs-px15 px10 alice besley-regular" onClick={() => { Navigate('/join') }}>Join Now</button></div>
                                </div>

                                <div className="my-col-6 hidden-xs">
                                    <div className="img-container-city"><img src="/table.jpg" alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="footer-section bg-black down-10 xs-down-10">
                        <Footer />
                    </section>
                </div>
            </Fade>
        </>
    );
}

export default HomePage;