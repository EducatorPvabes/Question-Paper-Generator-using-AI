import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
} from "@mui/material";

import { useState, useEffect } from "react";

const roles = [
  "Admin",
  "Faculty",
  "HOD",
];

const UserDialog = ({
  open,
  handleClose,
  onSave,
  editingUser,
}) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    department: "",
    role: "Faculty",
    status: "Active",
  });

  useEffect(() => {
    if (editingUser) {
      setUser(editingUser);
    }
  }, [editingUser]);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    onSave(user);

    handleClose();

    setUser({
      name: "",
      email: "",
      department: "",
      role: "Faculty",
      status: "Active",
    });
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>
        {editingUser
          ? "Edit User"
          : "Add User"}
      </DialogTitle>

      <DialogContent>

        <TextField
          fullWidth
          margin="normal"
          label="Name"
          name="name"
          value={user.name}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Department"
          name="department"
          value={user.department}
          onChange={handleChange}
        />

        <TextField
          select
          fullWidth
          margin="normal"
          label="Role"
          name="role"
          value={user.role}
          onChange={handleChange}
        >
          {roles.map((role) => (
            <MenuItem
              key={role}
              value={role}
            >
              {role}
            </MenuItem>
          ))}
        </TextField>

      </DialogContent>

      <DialogActions>

        <Button
          onClick={handleClose}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={handleSubmit}
        >
          Save
        </Button>

      </DialogActions>

    </Dialog>
  );
};

export default UserDialog;