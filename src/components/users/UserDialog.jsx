import { useEffect, useState } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  TextField,
} from "@mui/material";

const initialState = {
  name: "",
  email: "",
  department: "",
  role: "Faculty",
  status: "Active",
};

const UserDialog = ({
  open,
  handleClose,
  onSave,
  editingUser,
}) => {
  const [user, setUser] = useState(initialState);

  useEffect(() => {
    if (editingUser) {
      setUser(editingUser);
    } else {
      setUser(initialState);
    }
  }, [editingUser, open]);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (
      !user.name ||
      !user.email ||
      !user.department
    ) {
      return;
    }

    onSave(user);
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>
        {editingUser ? "Edit User" : "Add User"}
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
          <MenuItem value="Admin">Admin</MenuItem>
          <MenuItem value="Faculty">Faculty</MenuItem>
          <MenuItem value="HOD">HOD</MenuItem>
        </TextField>

        <TextField
          select
          fullWidth
          margin="normal"
          label="Status"
          name="status"
          value={user.status}
          onChange={handleChange}
        >
          <MenuItem value="Active">Active</MenuItem>
          <MenuItem value="Inactive">Inactive</MenuItem>
        </TextField>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={handleSubmit}
        >
          {editingUser ? "Update" : "Save"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserDialog;