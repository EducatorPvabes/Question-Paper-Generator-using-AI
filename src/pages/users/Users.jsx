import { useEffect, useState } from "react";
import { Typography, Paper } from "@mui/material";
import { toast } from "react-toastify";

import DashboardLayout from "../../layouts/DashboardLayout";

import UserToolbar from "../../components/users/UserToolbar";
import UserTable from "../../components/users/UserTable";
import UserDialog from "../../components/users/UserDialog";
import DeleteDialog from "../../components/users/DeleteDialog";

import {
  fetchUsers,
  createUser,
  editUser,
  removeUser,
} from "../../services/userService";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const [openDialog, setOpenDialog] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const [deleteDialog, setDeleteDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // Load Users
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = () => {
    const data = fetchUsers();
    setUsers(data);
  };

  // Search Filter
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase()) ||
    user.role.toLowerCase().includes(search.toLowerCase())
  );

  // Add User
  const handleOpenDialog = () => {
    setEditingUser(null);
    setOpenDialog(true);
  };

  // Edit User
  const handleEditUser = (user) => {
    setEditingUser(user);
    setOpenDialog(true);
  };

  // Close Dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditingUser(null);
  };

  // Save User
  const handleSaveUser = (user) => {
    try {
      if (editingUser) {
        editUser(editingUser.id, user);
        toast.success("User Updated Successfully");
      } else {
        createUser(user);
        toast.success("User Added Successfully");
      }

      loadUsers();

      setOpenDialog(false);
      setEditingUser(null);
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  };

  // Open Delete Dialog
  const handleDeleteDialog = (user) => {
    setSelectedUser(user);
    setDeleteDialog(true);
  };

  // Delete User
  const handleDeleteUser = () => {
    if (!selectedUser) return;

    removeUser(selectedUser.id);

    toast.success("User Deleted Successfully");

    loadUsers();

    setDeleteDialog(false);
    setSelectedUser(null);
  };

  return (
    <DashboardLayout>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        User Management
      </Typography>

      <UserToolbar
        search={search}
        setSearch={setSearch}
        onAddUser={handleOpenDialog}
      />

      <Paper
        elevation={3}
        sx={{
          p: 2,
          mt: 2,
          borderRadius: 2,
        }}
      >
        <UserTable
          rows={filteredUsers}
          onEdit={handleEditUser}
          onDelete={handleDeleteDialog}
        />
      </Paper>

      <UserDialog
        open={openDialog}
        handleClose={handleCloseDialog}
        onSave={handleSaveUser}
        editingUser={editingUser}
      />

      <DeleteDialog
        open={deleteDialog}
        handleClose={() => setDeleteDialog(false)}
        onDelete={handleDeleteUser}
      />
    </DashboardLayout>
  );
};

export default Users;