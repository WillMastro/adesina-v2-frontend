import NavBar from "../../components/navBar/navbar";
import { Slide, Fade } from "react-awesome-reveal";
import "./style.css"
import { LocateIcon } from "lucide-react";
import CityCarosel from "../home/city_carosel";
import Footer from "../components/footer/footer";
import { useState } from "react";
import ContactUs from "../components/submitInterest/submit";


const Cities = () => {
    const [submitInterest, setSubmitInterest] = useState<any>(false);

    const ibadan = [
        { img: "/ib8.jpg" },
        { img: "/aj.png" },
        { img: "/ib3.png" },
        { img: "/aj9.png" },
        { img: "/ib4.jpg" },
    ]

    const abuja = [
        { img: "/ab1.png"},
        { img: "/aj4.png"},
        { img: "/aj6.png" },
        { img: "/aj11.png" },
    ]

    return (
        <>
        {submitInterest && <ContactUs setSubmitInterest={setSubmitInterest}/> }
        <Fade>
            <div className="home">
                <section className="bg-black">
                    <NavBar active="Cities" />
                    <div className="my-col-10 off-1  xs-container down-15 ls-gap-elements xs-down-10vh ls-centered-align">
                        <div className="my-col-7 xs-12">
                            <div className="my-col-4 off-1 xs-12 xs-down-8 hidden-ls">
                                <div className="my-mother"><CityCarosel pictures={ibadan} />
                                </div>
                            </div>
                            <Slide direction="up" >
                                <div className="xs-down-10 xs-12 xs-cenered bd-botom my-bottom-20"><span className="px30 xs-px20 alice besley-bold">Lead With Adesina Economic City, Ibadan</span></div>
                            </Slide>
                            <div className="alice centered-align my-mother down-2">
                                <Slide direction="right" >
                                    <LocateIcon /> <span className="mg-10 besley-regular alice px13 xs-px13">Moniya, Ibadan</span>
                                </Slide>
                            </div>
                            <div className="alice centered-align my-mother down-5 xs-down-5">
                                <Slide direction="right" >
                                    <span className="besley-regular faded-2 px13 xs-px13 xs-jutify">
                                        Leveraging Ibadan’s emerging entrepreneurial population and the government’s open arms to enterprise development, Adesina Economic City with the iconic Adesina Lab will be a destination for residents and visiting business leaders seeking an enabling community to thrive.
                                    </span>
                                </Slide>
                            </div>
                            <div className="my-mother down-5">
                                <Slide direction="up" >
                                    <div className="xs-12 xs-down-10 down-5">
                                        <button onClick={() => { setSubmitInterest(true) }} className="button xs-px13 px12 alice besley-regular">Submit Interest</button>
                                    </div>
                                </Slide>
                            </div>
                        </div>

                        <div className="my-col-4 off-1 xs-12 hidden-xs">
                            <div className="my-mother"><CityCarosel pictures={ibadan} /></div>
                        </div>
                    </div>
                </section>

                <section className="bg-black ls-centered-align">
                    <div className="my-col-10 off-1 xs-container ls-gap-elements xs-down-15vh ls-centered-align">
                        <div className="my-col-4 xs-12">
                            <div className="my-mother"><CityCarosel pictures={abuja} /></div>
                        </div>
                        <div className="my-col-7 off-1 xs-12 xs-down-10">
                            <Slide direction="up" >
                                <div><span className="px30  xs-px20 alice besley-bold" >Lead With Adesina Economic City, Abuja</span></div>
                            </Slide>
                            <div className="alice centered-align xs-down-5 my-mother down-5">
                                <Slide direction="left" >
                                    <LocateIcon /> <span className="mg-10 besley-regular xs-px13 px13">Lugbe, Abuja</span>
                                </Slide>
                            </div>
                            <div className="alice centered-align my-mother down-5 xs-down-5">
                                <Slide direction="right" >
                                    <span className="besley-regular faded-2 px13 xs-px13">
                                        With Abuja’s unique political-economic terrain, Adesina Economic City is a needed asset, blending prime residential development, with a vibrant community for residents and visiting business leaders.
                                    </span>
                                </Slide>
                            </div>
                            <div className="my-mother down-5">
                                <Slide direction="up" >
                                    <div className="xs-12 xs-down-10 down-5">
                                        <button onClick={() => { setSubmitInterest(true) }} className="button xs-px13 px12 alice besley-regular">Submit Interest</button>
                                    </div>
                                </Slide>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="footer-section xs-down-10vh xs-12">
                    <Footer />
                </section>
            </div>
        </Fade>
        </>
    );
}

export default Cities;