export const validateName = (name) => /^[A-Za-z]+$/.test(name);

export const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

export const validatePhone = (phone) => /^[6-9]\d{9}$/.test(phone);

export const validatePassword = (password) => 
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/.test(password);
