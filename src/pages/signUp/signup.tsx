import { useState } from "react";
import NavBar from "../../components/navBar/navbar";
import { useGoogleLogin } from "@react-oauth/google";
import { isSending, notifyError } from "../../utils/useutils";
import { makeRequest } from "../../hook/useApi";
import { signupApi } from "../../data/apis";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const Navigate = useNavigate();
  const [user, setUser] = useState({
    fullname:"",
    email:"",
  })

  const handleChange = (e:any) => {
    const {name, value} = e.target;
    setUser({...user, [name]:value})
  }

  const signUpHndler = async(data:any)=> {
    const cb = () => {isSending(false)};
    isSending(true, "Please Wait...");
     const res = await makeRequest("POST", signupApi, data, cb);
     if(res){
        localStorage.setItem('adesina_token', res.data);
        window.location.reload();
     } 
  }
  
  const signUp: () => void = useGoogleLogin({
    onSuccess: (tokenResponse) => handleSuccess(tokenResponse) ,
    onError: () => notifyError('signup Failed')
  });

  const handleSuccess = async (response: any) => {
    const res = await makeRequest('GET', 'https://www.googleapis.com/oauth2/v3/userinfo', null, null, response?.access_token);
    if(res){
      const data = {email:res.email, fullname:res.name}
       await signUpHndler(data);
   }
  };

  const signupManual = async() => {
    if(user?.fullname == ""){
      notifyError('enter your fullname');
      return
    }
    if(user?.email == ""){
      notifyError('enter your email');
      return
    }
    await signUpHndler(user);
  }




    return ( <>
     <section  className="centered-algn">
        <NavBar active="signUp" />
        <div className="my-col-4 rad-20  my-bottom-50 bd-code-2 down-10 xs-down-15vh off-4 xs-container">
            <div className="my-container xs-10 xs-off-1 xs-down-10 down-5">
              <div><span className="px13 besley-bold xs-px15 alice">Sign Up</span>
              <div className="my-mother xs-down-1"><span className="px10 faded-sol besley-regular xs-px13">Unlimited contents for you</span></div>
               
               <div className="my-mother down-2 xs-down-10">
                <span className="faded-sol gap-elements centered-align fnt-system bold px9 xs-px13"><i className="fas fa-user px9 xs-px13"></i>Fullname</span>
                <input type="text" name="fullname" value={user?.fullname} onChange={handleChange}  className="input down-1 xs-down-2 px10 xs-px12  rad-10 alice fnt-system bold bd-code-2" />
               </div>
               <div className="my-mother down-2 xs-down-5">
                <span className="faded-sol gap-elements centered-align fnt-system bold px9 xs-px13"><i className="fas fa-envelope px9 xs-px13"></i>Email</span>
                <input type="text" name="email" value={user?.email} onChange={handleChange}  className="input down-1 xs-down-2 px10 xs-px12  rad-10 alice besley-regular bd-code-2" />
               </div>
               {/* <div className="my-mother down-2">
                <span className="faded-sol gap-elements centered-align besley-regular px10"><i className="fas fa-key px8"></i>Password</span>
                <input type="password" name="password" value={user?.password}  onChange={handleChange}  className="input down-1 px10 alice besley-regular bd-code-2" />
               </div> */}

               <div className="centered-align gap-elements my-mother xs-down-5 alice down-3">
                <label htmlFor="yr" className="c-pointer">Sign up means you have read and agree to <u>terms of use</u></label>
               </div>
                <div className="my-mother down-2 xs-down-5">
                  <button className="input flex px9 besley-bold bg-faded-2 centered xs-px13 rad-10">Sign Up</button>
                </div>
                <div className="my-mother down-3 xs-down-10">
                  <span className="alice bold c-pointer pd-10" onClick={()=> {signUp()}}>Sign Up With Google <i className="fab fa-google"></i></span>
                </div>
                <div className="my-mother down-3 xs-down-5 xs-down-10">
                  <span className="alice c-pointer pd-10" onClick={()=> {Navigate('/login')}}>Login Instead </span>
                </div>
              </div>
            </div>
        </div> 
     </section>
    
    </> );
}
 
export default SignUp;