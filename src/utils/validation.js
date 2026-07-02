// Name Validation
export const nameValidation = {
  required: "Full Name is required",

  minLength: {
    value: 3,
    message: "Name must be at least 3 characters",
  },

  maxLength: {
    value: 50,
    message: "Name cannot exceed 50 characters",
  },
};

// Email Validation
export const emailValidation = {
  required: "Email is required",

  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Enter a valid email address",
  },
};

// Password Validation
export const passwordValidation = {
  required: "Password is required",

  minLength: {
    value: 8,
    message: "Minimum 8 characters",
  },

  pattern: {
    value:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
    message:
      "Password must contain uppercase, lowercase, number and special character",
  },
};

// Confirm Password Validation
export const confirmPasswordValidation = (getValues) => ({
  required: "Confirm Password is required",

  validate: (value) =>
    value === getValues("password") ||
    "Passwords do not match",
});