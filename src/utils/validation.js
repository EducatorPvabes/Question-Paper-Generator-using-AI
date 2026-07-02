export const emailValidation = {
  required: "Email is required",

  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Enter valid email",
  },
};

export const passwordValidation = {
  required: "Password is required",

  minLength: {
    value: 8,
    message: "Minimum 8 characters",
  },
};