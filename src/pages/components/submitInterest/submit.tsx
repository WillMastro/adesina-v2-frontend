/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { isSending, notifySuccess } from "../../../utils/useutils";
import { makeRequest } from "../../../hook/useApi";
// import { makeRequest } from "../hook/useApi";
// import { isSending, notifySuccess } from "../utils/useutils";

const ContactUs = ({setSubmitInterest}:any) => {
 const [submitted, setSubmitted] = useState(false);
 const [params, setParams] = useState<any>({
   title:"Mr",
   fullname:"",
   email:"",
   phonenumber:"",
   district:"Lugbe, Abuja"
 })

 const updateCustomer = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  const { name, value } = event.target;
  setParams((prevCustomer: any) => ({
    ...prevCustomer,
    [name]: value,
  }));
};


const Send = async (e:any) => {
   e.preventDefault();
   const cb =()=> {
    isSending(false, "")
   }
   isSending(true, "Submitting...")
   const res = await makeRequest('POST', "", params, cb);
   if(res){
    notifySuccess("Interest Sumitted!");
    setSubmitted(true)
   }
}


  return (
    <>  

       <div className="my-modal flex my-mother bg-blur centered-align" onClick={() => {setSubmitInterest(false)}}>

      {submitted &&  <div className="pop-modal" onClick={()=> {setSubmitted(false)}}>
      <div className="my-bottom-50 bg-black xs-top-25 xs-10 rad-20 centered-lign px15 interBold">
        <div className="my-col-10 off-1 xs-container xs-down-10 down-5">
          <div className="px80 xs-px80 ">😇</div>
          <div className="my-mother down-2 xs-down-3 white xs-px20">Your Interest has been submitted!</div>
          <div className="my-mother down-5 xs-down-5 xs-px15 InterLight white">We will reachout shortly ...</div>
        </div>
      </div>
     </div>}


        <div onClick={(e)=> {e.stopPropagation()}} className="xs-top-10 my-col-6 md-11 xs-container bd-code-2 rad-20 my-bottom-50 bg-black">
          <div className="my-container down-5 xs-10 xs-off-1 xs-down-10 md-10 md-off-1 md-down-10 ">
            {/* <span onClick={() => {setSubmitInterest(false)}} className="fl-right pd-10 black xs-px13 md-p13 px13 c-pointer"><i className="fas fa-times white"></i></span> */}
            <div className="my-col-10 off-1 xs-12 left centered">
              <div className="my-mother">
                <span className="white xs-px20 md-px30 px13 besley-bold upper-cae">
                  Submit Interest
                </span>
              </div>

              <div className="down-2 xs-down-4 md-down-2 my-mother">
                <span className="px10 besley-bold  xs-px12 md-px20 faded-2">
                  Get up to 50% higher demands on your properties on folda
                  districts
                </span>
              </div>
               
               <form onSubmit={Send}>

              <div className="my-mother gap-elements xs-down-5 md-down-5 down-5">
                <div className="my-col-3 md-3 xs-3">
                  <span className="besley-bold  alice xs-px13 md-px13 px9">
                    Title<span className="red">*</span>
                  </span>
                  <select required  name="title" 
                   onChange={updateCustomer}
                  className="input down-1 xs-down- md-down-5 alice xs-px13 md-px13 px9 bg-faded-3 fla-border-1 rad-10">
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option>
                  </select>
                </div>
                <div className="my-col-9 xs-9 md-9">
                  <span className="besley-bold  xs-px13 md-px13 alice px9">
                    Full Name <span className="red">*</span>
                  </span>
                  <input
                  required
                    name="fullname"
                    type="text"
                    onChange={updateCustomer}
                    className="input px9 down-1 xs-px13 md-px13 md-down-1 alice bg-faded-3 fla-border-1 rad-10"
                  />
                </div>
              </div>
              <div className="my-mother gap-elements xs-down-5 md-down-2 down-3">
                <div className="my-col-7 xs-7 xs-6 md-7">
                  <span className="besley-bold  alice xs-px13 md-px13 px9">
                    Email<span className="red">*</span>
                  </span>
                  <input
                  required
                    name="email"
                    onChange={updateCustomer}
                    type="email"
                    placeholder="john@example.com"
                    className="input px9 my-mother down-1 md-down-1 xs-px13 md-px13 alice bg-faded-3 fla-border-1 rad-10"
                  />
                </div>
                <div className="my-col-5 xs-5 md-6">
                  <span className="besley-bold  alice xs-px13 md-px13 px9">
                    Phone Number<span className="red">*</span>
                  </span>
                  <input
                  required
                    name="phonenumber"
                    onChange={updateCustomer}
                    type="tel"
                    placeholder="+234***"
                    className="input px9 down-1 md-down-1 xs-px13 md-px13  alice bg-faded-3 fla-border-1 rad-10"
                  />
                </div>
              </div>
              <div className="my-mother gap-elements xs-down-5 md-down-5 down-3">
                <div className="my-col-12 xs-12  md-12">
                  <span className="besley-bold  alice xs-px13 md-px13 px9">
                    District of Interest<span className="red">*</span>
                  </span>
                  <select
                  required
                   name="district"
                   onChange={updateCustomer}
                  className="input down-1 md-down-1 px9 xs-px13 md-px13 alice bg-faded-3 fla-border-1 rad-10">
                    <option value="Moniya, Ibadan">Moniya, Ibadan</option>
                    <option value="Lugbe, Abuja">Lugbe, Abuja</option>
                  </select>
                </div>
              </div>

                <div className="my-col-12 xs-12 md-12 xs-down-5 md-down-5 down-3"><button className="px10 xs-px13 md-px13 unset-indent besley-bold  input rad-10 flex bg-white px13">Submit Interest</button></div>
               </form>
            </div>
            <div className="folda-logo hidden-ls xs-4 my-col-7 down-2 off-1"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
  