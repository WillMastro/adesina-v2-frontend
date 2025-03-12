import { useState } from "react";
import NavBar from "../../components/navBar/navbar";
import { useGoogleLogin } from "@react-oauth/google";
import { isSending, notifyError } from "../../utils/useutils";
import { makeRequest } from "../../hook/useApi";
import { loginApi } from "../../data/apis";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const Navigate = useNavigate();
  const [user, setUser] = useState({
    email:"",
  })

  const handleChange = (e:any) => {
    const {name, value} = e.target;
    setUser({...user, [name]:value})
  }

  const loginHndler = async(data:any)=> {
    const cb = () => {isSending(false)};
    isSending(true, "Please Wait...");
     const res = await makeRequest("POST", loginApi, data, cb);
     if(res){
        localStorage.setItem('adesina_token', res.data);
        window.location.reload();
     } 
  }
  
  const login: () => void = useGoogleLogin({
    onSuccess: (tokenResponse) => handleSuccess(tokenResponse) ,
    onError: () => notifyError('login Failed')
  });

  const handleSuccess = async (response: any) => {
    const res = await makeRequest('GET', 'https://www.googleapis.com/oauth2/v3/userinfo', null, null, response?.access_token);
    if(res){
      const data = {email:res.email}
       await loginHndler(data);
   }
  };

 const Manuallogin = async() => {
     if(user?.email == ""){
         notifyError("Email is required");
         return
     }
     await loginHndler(user);
 }

  

    return ( <>
     <section  className="centered-algn">
        <NavBar active="login" />
        <div className="my-col-4 rad-20  my-bottom-50 bd-code-2 down-10 off-4 xs-down-30vh xs-container">
            <div className="my-container xs-10 xs-off-1 xs-down-10 down-5">
              <div><span className="px13 besley-bold alice xs-px15 ">Login</span>
              <div className="my-mother xs-down-1"><span className="px10 faded-sol besley-regular xs-px13">Unlimited contents for you</span></div>
               <div className="my-mother down-2 xs-down-5">
                {/* <span className="faded-sol gap-elements centered-align fnt-system bold px9 xs-px13"><i className="fas xs-px13  fa-envelope px9"></i>Email</span> */}
                <input type="text" name="email" value={user?.email} onChange={handleChange}  placeholder="Enter your email" className="input down-1 rad-10 xs-down-2 px10 xs-px12 alice besley-regular bd-code-2" />
               </div>
                <div className="my-mother down-2 xs-down-5">
                  <button className="input flex px9 besley-bold bg-faded-2 centered xs-px13 rad-10" onClick={Manuallogin}> Login</button>
                </div>
                <div className="my-mother down-3 xs-down-10">
                  <span className="alice bold c-pointer pd-10" onClick={()=> {login()}}>Continue With Google <i className="fab fa-google"></i></span>
                </div>
                <div className="my-mother down-3 xs-down-10">
                  <span className="alice c-pointer pd-10" onClick={()=> {Navigate('/signup')}}>I haven't signed up </span>
                </div>
              </div>
            </div>
        </div> 
     </section>
    
    </> );
}
 
export default Login;