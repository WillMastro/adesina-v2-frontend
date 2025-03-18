import { useNavigate } from "react-router-dom";

const Footer = () => {
    const Navigate = useNavigate();

    return (<>
        <div className="my-container xs-container down-5 bd-bottom my-bottom-50">
            <div className="my-col-12 xs-12 space-50 ls-gap-elements ls-centered-align space-50 pace-btw">
                <div className="my-col-3 xs-12">
                    <span className="aaj-logo"><img src="/footer_logo.png" alt="" /></span>
                    <div className="my-mother down-3 xs-down-10">
                        <span className="besley-bold px13 alice xs-px15">Visit Our Social Handles</span>
                        <div className="my-mother down-2 ls-gap-elemets xs-down-4">
                            <a href="https://www.facebook.com/adesinaacohttps://www.facebook.com/adesinaaco"><i className="fab c-pointer pd-10 fa-facebook faded-2 px13 xs-px20"></i></a>
                            <a href="http://twitter.com/adesinaco"><i className="fab c-pointer pd-10 fa-twitter faded-2 px13 xs-px20"></i></a>
                            <a href="http://instagram.com/adesinaco"><i className="fab c-pointer pd-10 fa-instagram faded-2 px13 xs-px20"></i></a>
                            <a href="http://youtube.com/@adesinaco"><i className="fab c-pointer pd-10 fa-youtube faded-2 px13 xs-px20"></i></a>
                        </div>
                    </div>
                </div>

                <div className="my-col-3 xs-12 xs-down-10">
                    <div><span className="besley-bold px12 xs-px15 alice">Office Address</span></div>
                    <div className="my-mother down-2 xs-down-3"><span className="alice NeueMontreal-Regular faded-2 px10 xs-px13">4th floor,Tower C,
                        Churchgate Plaza
                        Central Business
                        District, Abuja, Nigeria</span></div>
                </div>
                <div className="my-col-3 xs-12 xs-down-10">
                    <div><span className="besley-bold px12 xs-px15 alice">Contact Us</span></div>
                    <div className="my-mother down-2 v-gap-20 xs-down-5">
                        <span className="link c-pointer my-mother NeueMontreal-Regular faded-2 px10 xs-px13">(+234)705 5554 807</span>
                        <span className="link c-pointer my-mother down-1 NeueMontreal-Regular faded-2 px10 xs-px13">(+234)805 3323 987</span>
                        {/* <span className="link c-pointer my-mother down-1 NeueMontreal-Regular faded-2 px10 xs-px13"><i className="fas fa-globe"></i> adesina.ng</span> */}
                        {/* <span className="link c-pointer my-mother down-1 NeueMontreal-Regular faded-2 px10 xs-px13"><i className="fas fa-envelope"></i> info@adesina.ng</span> */}
                    </div>
                </div>
            </div>
            
        </div>
        <div className="bg-black my-container ls-gap-elements space-50 ls-centered-align hidden-xs">
            <div className="my-col-10 off-1 down-4">
                <div className="my-col-3 faded-2 pd-10 px9 xs-px10 NeueMontreal-Regular">@Copyright Adeshina Assets</div>
                <div className="my-col-3 faded-2 pd-10 px10 xs-px10 NeueMontreal-Regular">Privacy Policy</div>
                <div className="my-col-3 faded-2 pd-10 px10 xs-px10 NeueMontreal-Regular">Terms and conditions</div>
                <div className="my-col-3 faded-2 pd-10 px10 xs-px10 NeueMontreal-Regular"> <a href="http://willmaestroit.com/" className="alice"> Website by WillmaestroIT</a> </div>
            </div>
        </div>
    </>);

}

export default Footer;