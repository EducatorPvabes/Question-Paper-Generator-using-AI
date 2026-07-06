const USERS_KEY = "users";

// Default Admin
const DEFAULT_ADMIN = {
  id: 1,
  name: "Administrator",
  email: "admin@gmail.com",
  password: "Admin@123",
  role: "Admin",
  status: "Active",
  createdAt: new Date().toISOString(),
};

// Initialize Database
const initializeUsers = () => {
  const users = JSON.parse(localStorage.getItem(USERS_KEY));

  if (!users || users.length === 0) {
    localStorage.setItem(USERS_KEY, JSON.stringify([DEFAULT_ADMIN]));
  }
};

// Get All Users
export const getUsers = () => {
  initializeUsers();
  return JSON.parse(localStorage.getItem(USERS_KEY));
};

// Save Users
const saveUsers = (users) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

// Login
export const loginUser = (credentials) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = getUsers();

      const user = users.find(
        (u) =>
          u.email === credentials.email &&
          u.password === credentials.password
      );

      if (!user) {
        reject({
          success: false,
          message: "Invalid Email or Password",
        });
        return;
      }

      if (user.status !== "Active") {
        reject({
          success: false,
          message: "Account is Disabled",
        });
        return;
      }

      resolve({
        success: true,
        token: "dummy-jwt-token",
        user,
      });
    }, 700);
  });
};

// Register
export const registerUser = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = getUsers();

      const exists = users.some(
        (u) => u.email.toLowerCase() === data.email.toLowerCase()
      );

      if (exists) {
        reject({
          success: false,
          message: "Email already exists",
        });
        return;
      }

      const newUser = {
        id: Date.now(),
        name: data.name,
        email: data.email,
        password: data.password,
        role: data.role || "Faculty",
        status: "Active",
        createdAt: new Date().toISOString(),
      };

      users.push(newUser);

      saveUsers(users);

      resolve({
        success: true,
        message: "Registration Successful",
      });
    }, 700);
  });
};

// Add User
export const addUser = (data) => {
  const users = getUsers();

  const newUser = {
    id: Date.now(),
    ...data,
    status: "Active",
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);

  saveUsers(users);

  return newUser;
};

// Update User
export const updateUser = (id, updatedData) => {
  let users = getUsers();

  users = users.map((user) =>
    user.id === id ? { ...user, ...updatedData } : user
  );

  saveUsers(users);
};

// Delete User
export const deleteUser = (id) => {
  const users = getUsers().filter((user) => user.id !== id);

  saveUsers(users);
};

// Toggle Status
export const toggleUserStatus = (id) => {
  const users = getUsers();

  const updated = users.map((user) => {
    if (user.id === id) {
      return {
        ...user,
        status: user.status === "Active" ? "Inactive" : "Active",
      };
    }

    return user;
  });

  saveUsers(updated);
};