

import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Sign_in = ({ onBack }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [error, setError] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState(null);

  const handleCaptcha = (value) => {
    setCaptchaVerified(!!value);
  };

  const startBlockTimer = () => {
    setIsBlocked(true);
    setTimeout(() => {
      setIsBlocked(false);
      setAttempts(0);
    }, 10 * 60 * 1000); // Block for 10 minutes
  };

  const sendOtp = () => {
    if (isBlocked) {
      setError("You are temporarily blocked. Please try again later.");
      return;
    }

    if (!/^\d{10}$/.test(mobile)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otp);
    alert(`OTP sent to ${mobile}: ${otp}`);
    setError("");
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    if (isBlocked) {
      setError("You are temporarily blocked. Please try again later.");
      return;
    }

    if (!captchaVerified) {
      setError("Please complete the CAPTCHA.");
      return;
    }

    if (!generatedOtp || otp !== generatedOtp) {
      setError("Invalid OTP.");
      incrementAttempts();
      return;
    }

    if (!email || !password) {
      setError("Both email and password are required.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      incrementAttempts();
      return;
    }

    alert("Sign-in successful!");
    setError("");
    setAttempts(0);
    // Perform additional actions after successful sign-in
  };

  const incrementAttempts = () => {
    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    if (newAttempts >= 3) {
      startBlockTimer();
      setError("Too many failed attempts. You are blocked for 10 minutes.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black bg-opacity-50 text-white p-4">
      <form
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
        onSubmit={handleSignIn}
      >
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Sign In
        </h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* Mobile and OTP Fields */}
        <div className="mb-4">
          <label
            htmlFor="mobile"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Mobile Number
          </label>
          <input
            type="text"
            id="mobile"
            placeholder="Enter your mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4 flex items-center gap-2">
          <input
            type="text"
            id="otp"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none"
            onClick={sendOtp}
          >
            Send OTP
          </button>
        </div>

        <hr className="my-4" />

        {/* Email and Password Fields */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <hr className="my-4" />

        {/* CAPTCHA */}
        <ReCAPTCHA
          sitekey="your-recaptcha-site-key"
          onChange={handleCaptcha}
          className="mb-4"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
          disabled={isBlocked}
        >
          Sign In
        </button>

        <button
          type="button"
          onClick={onBack}
          className="mt-4 w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 focus:outline-none"
        >
          Back
        </button>
      </form>
    </div>
  );
};

export default Sign_in;