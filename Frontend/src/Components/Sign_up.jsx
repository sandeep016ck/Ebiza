

import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {
  validateName,
  validateEmail,
  validatePassword,
  validatePhone,
} from "../utils/validation";
import { generateOTP, validateOTP } from "../utils/otp";
import bcrypt from "bcryptjs"; // For password encryption

const Sign_up = ({ onBack }) => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOTP, setGeneratedOTP] = useState("");
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [error, setError] = useState("");

  // Handle OTP generation
  const handleGenerateOTP = () => {
    if (!validatePhone(phone)) {
      setError("Please enter a valid phone number.");
      return;
    }

    const otp = generateOTP();
    setGeneratedOTP(otp);
    console.log("OTP generated: ", otp); // Simulated OTP generation
    alert(`OTP sent to ${phone}: ${otp}`); // Replace with SMS API integration
    setError("");
  };

  // Validate OTP
  const handleValidateOTP = () => {
    if (validateOTP(otp, generatedOTP)) {
      alert("OTP validated successfully!");
      setError("");
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };

  // Handle CAPTCHA
  const handleCaptcha = (value) => {
    setCaptchaVerified(!!value);
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateName(firstName) || !validateName(middleName) || !validateName(lastName)) {
      setError("Name must only contain letters.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!validatePassword(password)) {
      setError(
        "Password must be under 15 characters and include an uppercase letter, a lowercase letter, a number, and a special character."
      );
      return;
    }

    if (!captchaVerified) {
      setError("Please complete the CAPTCHA.");
      return;
    }

    if (!validateOTP(otp, generatedOTP)) {
      setError("Please validate the OTP before submitting.");
      return;
    }

    // Encrypt the password
    const encryptedPassword = await bcrypt.hash(password, 10);

    // Simulate storing user data (replace with API call)
    console.log("User data:");
    console.log({
      firstName,
      middleName,
      lastName,
      email,
      phone,
      password: encryptedPassword,
    });

    alert("Sign-up successful!");
    setError("");
    onBack(); // Navigate back to home or previous page after successful signup
  };

  useEffect(() => {
    // Change OTP every 5 minutes
    const otpInterval = setInterval(() => {
      setGeneratedOTP(generateOTP());
    }, 5 * 60 * 1000);

    return () => clearInterval(otpInterval); // Cleanup interval
  }, []);

  return (
    <div className="max-w-md mx-auto p-6 border border-gray-300 rounded-lg bg-gray-50">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Sign Up</h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Fields */}
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Middle Name"
          value={middleName}
          onChange={(e) => setMiddleName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Email and Phone Fields */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Password Field */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* CAPTCHA */}
        <div className="flex justify-center my-2">
          <ReCAPTCHA
            sitekey="your-site-key" // Replace with your actual site key
            onChange={handleCaptcha}
          />
        </div>

        {/* OTP Fields */}
        <button
          type="button"
          onClick={handleGenerateOTP}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Generate OTP
        </button>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-700"
        />
        <button
          type="button"
          onClick={handleValidateOTP}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Validate OTP
        </button>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>

        <button
          onClick={onBack}
          className="mt-4 w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 focus:outline-none"
        >
          Back
        </button>
      </form>
    </div>
  );
};

export default Sign_up;