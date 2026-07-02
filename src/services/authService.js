const DUMMY_USER = {
  email: "admin@gmail.com",
  password: "Admin@123",
  name: "Administrator",
  role: "Admin",
};

export const loginUser = (credentials) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Default Admin Login
      if (
        credentials.email === DUMMY_USER.email &&
        credentials.password === DUMMY_USER.password
      ) {
        resolve({
          success: true,
          token: "dummy-admin-token",
          user: {
            name: DUMMY_USER.name,
            email: DUMMY_USER.email,
            role: DUMMY_USER.role,
          },
        });
        return;
      }

      // Registered User Login
      const registeredUser = JSON.parse(
        localStorage.getItem("registeredUser")
      );

      if (
        registeredUser &&
        credentials.email === registeredUser.email &&
        credentials.password === registeredUser.password
      ) {
        resolve({
          success: true,
          token: "dummy-user-token",
          user: {
            name: registeredUser.name,
            email: registeredUser.email,
            role: registeredUser.role,
          },
        });
      } else {
        reject({
          success: false,
          message: "Invalid Email or Password",
        });
      }
    }, 1000);
  });
};

export const registerUser = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Save user locally (temporary until backend)
      localStorage.setItem(
        "registeredUser",
        JSON.stringify(data)
      );

      resolve({
        success: true,
        message: "Registration Successful 🎉",
      });
    }, 1000);
  });
};