import {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
  toggleUserStatus,
} from "./authService";

export const fetchUsers = () => getUsers();

export const createUser = (data) => addUser(data);

export const editUser = (id, data) => updateUser(id, data);

export const removeUser = (id) => deleteUser(id);

export const changeUserStatus = (id) => toggleUserStatus(id);