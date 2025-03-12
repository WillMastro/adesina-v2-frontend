import { useNavigate } from "react-router-dom";
import NavBar from "../../components/navBar/navbar";
import { Slide } from "react-awesome-reveal";

const ContactUs = () => {
  const Navigate = useNavigate();
  const contactUS = ()=> {
    window.open(`https://wa.link/kkibey`)
 }
  
    return ( <>
    <NavBar active='Contact Us' />
    <div className="hero-ection img-">
        <div className="dark-scaf-2">

       <div className="my-col-12 xs-10 xs-off-1 xs-down-20vh down-20">
       <div className="ls-centered xs-12 xs-down-10">
          <div className="my-col-10 xs-12 off-1 px20 xs-px20 down-2 black besley-regular">
            {/* <div><span className="faded-sol px13 xs-px13 besley-bold">Contact Us</span></div> */}
            <Slide direction="left">
            <h1  className="px30 xs-px30 alice besley-bold" >Get in touch with Us</h1>
            </Slide>
          </div>
        </div>
         
         {/* <Slide direction="up"> */}
         <div className="my-col-10 off-1 down-4 pabsolue flex ls-gap-elements space-50 xs-10 xs-off-1 x8vh hidden-xs" >
           <div className="my-col-3 ls-centered  xs-down-5 xs-12 ls-centered-align rad-20 my-b-shadow my-bottom-50">
             <div className="my-col-10 off-1 xs-10 xs-off-1  xs-down-10 down-5">
                 <span className="pd-10 rad-10 my-b-shadow bg-faded-3"  onClick={contactUS}> <i className="fab fa-whatsapp alice xs-px13 px13"></i></span>
                 <div className="my-mother down-4 xs-down-8"><a onClick={contactUS} className="alice px15 xs-px20 c-pointer besley-regular" >start a conversation</a></div>
             </div>
           </div>
           <div className="my-col-3 ls-centered  xs-down-5 xs-12 ls-centered-align rad-20 my-b-shadow my-bottom-50">
             <div className="my-col-10 off-1 xs-10 xs-off-1  xs-down-10 down-5">
                 <a  href="mailto:info@adesina.com" className="pd-10 rad-10 my-b-shadow bg-faded-3"> <i className="fas fa-envelope alice xs-px13 px13"></i></a>
                 <div className="my-mother down-4 xs-down-8"><a href="mailto:info@adesina.com" className="alice px15 xs-px20 c-pointer besley-regular" >info@adesina.com</a></div>
             </div>
           </div>
           <div className="my-col-3 centered  xs-down-5 xs-12 rad-20 my-b-shadow my-bottom-50">
             <div className="my-col-10 off-1 xs-10 xs-off-1 xs-down-10 down-5">
                 <a href="tel:07055554807" className="pd-10 rad-10 my-b-shadow bg-faded-3"><i className="fa fa-phone alice px13"></i></a>
                 <div className="my-mother down-3 xs-down-8"><a href="tel:07055554807" className="alice px13 c-pointer besley-regular" >(+234) 705 5554 807, (+234) 805 3323 987 </a></div>
             </div>
           </div>
         </div>
       </div>
        </div>

        <div className="hidden-ls xs-10 xs-off-1 xs-down-10">
         <div className="my-mother bd-bottom my-bottom-20"><span onClick={contactUS} className="pd-10 rad-10 my-b-shadow bg-faded-3"> <i className="fab fa-whatsapp alice xs-px20 px13"></i></span>
         <div className="my-mother down-4 xs-down-5">
          <a onClick={contactUS} className="alice px15 xs-px20 c-pointer besley-regular" >start a conversation</a>
        </div>
         </div>
         <div className="my-mother bd-bottom my-bottom-20 xs-down-10"><a  href="mailto:info@adesina.com" className="pd-10 rad-10 my-b-shadow bg-faded-3"> <i className="fas fa-envelope alice xs-px20 px13"></i></a>
         <div className="my-mother down-4 xs-down-5">
          <a href="mailto:info@adesina.com" className="alice px15 xs-px20 c-pointer besley-regular" >info@adesina.com</a>
        </div>
         </div>
         <div className="my-mother bd-bottom my-bottom-20 xs-down-10"><span className="pd-10 rad-10 my-b-shadow bg-faded-3"> <i className="fa fa-phone alice px13 xs-px20"></i></span>
         <div className="my-mother down-3 xs-down-10"><a href="tel:07055554807" className="alice px13 xs-px20 c-pointer besley-regular" >(+234) 705 5554 807, (+234) 805 3323 987 </a></div></div>

        </div>

    </div>
      
    </> );
}
 
export default ContactUs;