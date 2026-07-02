import { useEffect, useState } from "react";

import { Typography, Paper } from "@mui/material";
import { toast } from "react-toastify";

import DashboardLayout from "../../layouts/DashboardLayout";

import UserToolbar from "../../components/users/UserToolbar";
import UserTable from "../../components/users/UserTable";
import UserDialog from "../../components/users/UserDialog";
import DeleteDialog from "../../components/users/DeleteDialog";

import { dummyUsers } from "../../utils/dummyUsers";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const [openDialog, setOpenDialog] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const [deleteDialog, setDeleteDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // Load users
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));

    if (storedUsers) {
      setUsers(storedUsers);
    } else {
      setUsers(dummyUsers);
    }
  }, []);

  // Save users
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // Search
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
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
  };

  // Save User
  const handleSaveUser = (user) => {
    if (editingUser) {
      const updatedUsers = users.map((u) =>
        u.id === editingUser.id
          ? { ...user, id: editingUser.id }
          : u
      );

      setUsers(updatedUsers);

      toast.success("User Updated Successfully");
    } else {
      const newUser = {
        ...user,
        id: Date.now(),
      };

      setUsers([...users, newUser]);

      toast.success("User Added Successfully");
    }

    setOpenDialog(false);
    setEditingUser(null);
  };

  // Delete Dialog
  const handleDeleteDialog = (user) => {
    setSelectedUser(user);
    setDeleteDialog(true);
  };

  // Delete User
  const handleDeleteUser = () => {
    const updatedUsers = users.filter(
      (u) => u.id !== selectedUser.id
    );

    setUsers(updatedUsers);

    toast.success("User Deleted Successfully");

    setDeleteDialog(false);
    setSelectedUser(null);
  };

  return (
    <DashboardLayout>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
      >
        User Management
      </Typography>

      <UserToolbar
        search={search}
        setSearch={setSearch}
        onAddUser={handleOpenDialog}
      />

      <Paper
        sx={{
          p: 2,
          height: 550,
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