import { useState } from "react";
import NavBar from "../../components/navBar/navbar";
import { useGoogleLogin } from "@react-oauth/google";
import { isSending, notifyError } from "../../utils/useutils";
import { makeRequest } from "../../hook/useApi";
import { signupApi } from "../../data/apis";
import { Link } from "react-router-dom";
import "./signup.css";

const SignUp = () => {
  const [user, setUser] = useState({
    fullname:"",
    email:"",
  })



  const signUpHndler = async(data: { fullname: string; email: string })=> {
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

  const handleSuccess = async (response: { access_token: string }) => {
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






  function setEmail(value: string): void {
    setUser((prevUser) => ({ ...prevUser, email: value }));
  }

    return ( <>
     <section  className="centered-algn">
        <NavBar active="signUp" />
        <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Create account</h2>
        <p className="signup-subtext">
          Get started by creating an account with us.
        </p>

        {/* Fullname Input */}
        <div className="input-group">
          <label>Fullname</label>
          <input
            type="text"
            value={user.fullname}
            onChange={(e) =>
              setUser((prevUser) => ({ ...prevUser, fullname: e.target.value }))
            }
            placeholder="Enter your fullname"
          />
        </div>

        {/* Email Input */}
        <div className="input-group">
          <label>Email address</label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="abc@email.com"
            required
          />
        </div>

        {/* Terms & Conditions */}
        <div className="terms">
          <p>
            By signing up, you agree to Adesina&apos;s{" "}
            <a href="#" className="link">Terms of Service</a> and{" "}
            <a href="#" className="link">Privacy Policy</a>.
          </p>
        </div>

        {/* Submit Button */}
        <button onClick={signupManual} className="signup-btn">
          Create account
        </button>

        {/* Social Login */}
        <div className="social-login">
          <button onClick={signUp} className="google-btn">
            <img
              src="https://img.icons8.com/color/20/000000/google-logo.png"
              alt="Google"
            />
            Continue with Google
          </button>
        </div>

        {/* Already have an account */}
        <p className="login-text">
          Already have an account?{" "}
          <Link to="/login" className="login-link">
            Login
            </Link>
        </p>
      </div>
    </div>
     </section>
    
    </> );
}
 
export default SignUp;