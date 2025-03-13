import { useState } from "react";
import NavBar from "../../components/navBar/navbar";
import { useGoogleLogin } from "@react-oauth/google";
import { isSending, notifyError } from "../../utils/useutils";
import { makeRequest } from "../../hook/useApi";
import { loginApi } from "../../data/apis";
import { Link } from "react-router-dom";
import "./Login.css"; // Import CSS file

const Login = () => {
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Manuallogin();
  };

  interface LoginData {
    email: string;
  }

  const loginHndler = async (data: LoginData) => {
    const cb = () => isSending(false);
    isSending(true, "Please Wait...");
    const res = await makeRequest("POST", loginApi, data, cb);
    if (res) {
      localStorage.setItem("adesina_token", res.data);
      window.location.reload();
    }
  };

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => handleSuccess(tokenResponse),
    onError: () => notifyError("Login Failed"),
  });

  const handleSuccess = async (response: { access_token: string }) => {
    const res = await makeRequest(
      "GET",
      "https://www.googleapis.com/oauth2/v3/userinfo",
      null,
      null,
      response?.access_token
    );
    if (res) {
      const data = { email: res.email };
      await loginHndler(data);
    }
  };

  const Manuallogin = async () => {
    if (email === "") {
      notifyError("Email is required");
      return;
    }
    await loginHndler({ email });
  };

  return (
    <section className="centered-algn">
    <NavBar active="signUp" />

    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <p className="login-description">
        Unlimited contents for you
        </p>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label>Email address</label>
            <input
              type="email"
              placeholder="abc@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <div className="password-container">
  <input
    type={showPassword ? "text" : "password"}
    value={password}
    onChange={(e) => setPassword(e.target.value)}
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
          <button type="submit" className="login-button">
            Login to your account
          </button>
        </form>
        <div className="divider">
          <span>or</span>
        </div>
        <button onClick={() => login()} className="social-login google">
        <img
                src="https://img.icons8.com/color/20/000000/google-logo.png"
                alt="Google"
                className="mr-2"
              />
              <span>Continue with Google</span>
        </button>
        
        <p className="signup-text">
          Don't have an account? <Link to="/signup" className="signup-link">Sign up</Link>
        </p>
      </div>
    </div>
    </section>
  );
};

export default Login;

