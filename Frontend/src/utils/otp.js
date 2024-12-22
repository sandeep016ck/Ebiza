// otp.js

// Function to generate a 6-digit OTP
export const generateOTP = () => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    return otp.toString();  // Returning OTP as a string
  };
  
  // Function to validate the OTP
  export const validateOTP = (inputOTP, generatedOTP) => {
    return inputOTP === generatedOTP;  // Returns true if OTPs match
  };
  