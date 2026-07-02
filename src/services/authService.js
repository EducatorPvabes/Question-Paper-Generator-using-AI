const DUMMY_USER = {
  email: "admin@gmail.com",
  password: "Admin@123",
  name: "Administrator",
  role: "Admin",
};

export const loginUser = (credentials) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        credentials.email === DUMMY_USER.email &&
        credentials.password === DUMMY_USER.password
      ) {
        resolve({
          success: true,
          token: "dummy-jwt-token",
          user: DUMMY_USER,
        });
      } else {
        reject({
          success: false,
          message: "Invalid Email or Password",
        });
      }
    }, 1500);
  });
};