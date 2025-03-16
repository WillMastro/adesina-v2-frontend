import { useState } from "react";
import NavBar from "../../components/navBar/navbar";
import { useSearchParams, useNavigate } from "react-router-dom";
import { makeRequest } from "../../hook/useApi";
import { notifyError, notifySuccess } from "../../utils/useutils";
import "./verifyEmail.css";

const VerifyEmail = () => {
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);  // 🟢 Loading state
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const email = searchParams.get("email");

  const verifyCode = async () => {
    if (!email || code.length !== 6) {
      notifyError("Invalid verification details");
      return;
    }

    setIsLoading(true);  // 🟢 Show loading before API call

    try {
      const res = await makeRequest("POST", "/api/verify-code", { email, code });

      if (res) {
        notifySuccess("Email verified successfully!");
        navigate("/login");
      } else {
        notifyError("Incorrect code. Please try again.");
      }
    } catch (error) {
      notifyError("Network error. Please try again.");
    } finally {
      setIsLoading(false);  // 🟢 Hide loading after API call
    }
  };

  return (
    <>
      <section className="centered-algn">
        <NavBar active="Verify Email" />
        <div className="verify-container">
          <h2>Email Verification</h2>
          <p>A verification code has been sent to email.
             Please enter it below:</p>

          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            onInput={(e) => {
              const input = e.target as HTMLInputElement;
              input.value = input.value.replace(/\D/g, '');
            }} // 🟢 Allow only numbers
            placeholder="Enter 6-digit code"
            maxLength={6}
            autoFocus  // 🟢 Automatically focus on input
          />

          <button onClick={verifyCode} disabled={isLoading}>
            {isLoading ? "Verifying..." : "Verify"}
          </button>
        </div>
      </section>
    </>
  );
};

export default VerifyEmail;
