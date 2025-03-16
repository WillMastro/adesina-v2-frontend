import { useState } from "react";
import NavBar from "../../components/navBar/navbar";
import { useGoogleLogin } from "@react-oauth/google";
import { isSending, notifyError } from "../../utils/useutils";
import { makeRequest } from "../../hook/useApi";
import { signupApi } from "../../data/apis";
import { useNavigate } from "react-router-dom";
import "./signup.css";

const SignUp = () => {
  const Navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordValidations, setPasswordValidations] = useState({
    has8Chars: false,
    hasUpperCase: false,
    hasLowerCase: false,
  });

   // try push

   const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    // Validate password
    setPasswordValidations({
      has8Chars: value.length >= 8,
      hasUpperCase: /[A-Z]/.test(value),
      hasLowerCase: /[a-z]/.test(value),
    });
  };
  



  const signUpHndler = async(data: { email: string; password: string })=> {
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
      const data = {email:res.email, password:res.password}
       await signUpHndler(data);
   }
  };

  const signupManual = async() => {
    if(user?.email == ""){
      notifyError('enter your email');
      return
    }
    
    await signUpHndler(user);
  }






  const setEmail = (value: string): void => {
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

          {/* Email Input */}
          <div className="input-group">
          <label>Email address</label>
          <input className="email-input"
            type="email"
            value={user.email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="abc@email.com"
            required
          />
          </div>
          <div className="input-group">
            <label>Password</label>
            <div className="password-container">
  <input
    type={showPassword ? "text" : "password"}
    value={password}
    onChange={handlePasswordChange}
    placeholder="Enter your password"
    required
  />
  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="toggle-password"
  >
    {showPassword ? "🙈" : "👁️"}
  </button>
  
</div>

          </div>

          {/* Password validation checks */}
<div className="password-validations">
  <p className={passwordValidations.has8Chars ? "valid" : "invalid"}>
    8 characters <span>✔️</span>
  </p>
  <p className={passwordValidations.hasUpperCase ? "valid" : "invalid"}>
    Upper case <span>✔️</span>
  </p>
  <p className={passwordValidations.hasLowerCase ? "valid" : "invalid"}>
    Lower case <span>✔️</span>
  </p>
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
          <span  onClick={()=> {Navigate('/login')}} className="login-link">
            Login
            </span>
        </p>
      </div>
    </div>
      </section>
    </>
  );
};
 
export default SignUp;