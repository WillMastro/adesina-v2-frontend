import React, { useState } from "react";
import "./style.css";
import { makeRequest } from "../../hook/useApi";
import { isSending, notifySuccess} from "../../utils/useutils";
import { roundtableApi } from "../../data/apis";
import { useNavigate } from "react-router-dom";

const countries = ["Nigeria", "United States", "United Kingdom", "Canada"];
const industries = ["Technology", "Finance", "Healthcare", "Education"];
const incomes = ["Below ₦1M", "₦1M - ₦5M", "Above ₦5M"];

const Form: React.FC = () => {
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    country: "",
    phone: "",
    industry: "",
    organization: "",
    jobTitle: "",
    attendPhysically: "",
    annualIncome: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let newErrors: { [key: string]: string } = {};
    for (const key in formData) {
      if (!formData[key as keyof typeof formData]) {
        newErrors[key] = "This field is required";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      isSending(true, "Please wait...")
      const cb = () => isSending(false);
       const res = await makeRequest("POST", roundtableApi, formData, cb);
       if(res) {
         // suucesfun re moda should pup up after
         notifySuccess(`Thank you for registering. We've sent you the event detail to your email`);

         Navigate('/')
       }
    }
  };

  return (
    <>
    <div className="join down- my-mother">

    <div className={"container down-10 xs-down-10"}>
      <h2 className="besley-bold">Register</h2>
      <form onSubmit={handleSubmit} className="container down-10">
        <div className={"row"}>
          <div className={"inputGroup"}>
            <label>First Name*</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
            {errors.firstName && <p className={"error"}>{errors.firstName}</p>}
          </div>
          <div className={"inputGroup"}>
            <label>Last Name*</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
            {errors.lastName && <p className={"error"}>{errors.lastName}</p>}
          </div>
        </div>

        <div className={"inputGroup"}>
          <label>Email Address*</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <p className={"error"}>{errors.email}</p>}
        </div>

        <div className={"inputGroup"}>
          <label>City*</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} />
          {errors.city && <p className={"error"}>{errors.city}</p>}
        </div>

        <div className={"inputGroup"}>
          <label>Country/Region*</label>
          <select name="country" value={formData.country} onChange={handleChange}>
            <option value="">Select country/region</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          {errors.country && <p className={"error"}>{errors.country}</p>}
        </div>

        <div className={"inputGroup"}>
          <label>Phone*</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
          {errors.phone && <p className={"error"}>{errors.phone}</p>}
        </div>

        <div className={"inputGroup"}>
          <label>Industry*</label>
          <select name="industry" value={formData.industry} onChange={handleChange}>
            <option value="">Select industry</option>
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
          {errors.industry && <p className={"error"}>{errors.industry}</p>}
        </div>

        <div className={"inputGroup"}>
          <label>Organization*</label>
          <input type="text" name="organization" value={formData.organization} onChange={handleChange} />
          {errors.organization && <p className={"error"}>{errors.organization}</p>}
        </div>

        <div className={"inputGroup"}>
          <label>Job Title*</label>
          <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} />
          {errors.jobTitle && <p className={"error"}>{errors.jobTitle}</p>}
        </div>

        <div className={"inputGroup"}>
          <label>Would you like to attend physically?*</label>
          <select name="attendPhysically" value={formData.attendPhysically} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          {errors.attendPhysically && <p className={"error"}>{errors.attendPhysically}</p>}
        </div>

        <div className={"inputGroup"}>
          <label>Annual Income (Naira)*</label>
          <select name="annualIncome" value={formData.annualIncome} onChange={handleChange}>
            <option value="">Select</option>
            {incomes.map((income) => (
              <option key={income} value={income}>
                {income}
              </option>
            ))}
          </select>
          {errors.annualIncome && <p className={"error"}>{errors.annualIncome}</p>}
        </div>

        <button type="submit" className={"submitButton"}>
          Register
        </button>
      </form>
    </div>

    </div>
    
    </>
  );
};

export default Form;
