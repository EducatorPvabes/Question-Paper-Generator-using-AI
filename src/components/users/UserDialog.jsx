import { useEffect, useState } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  MenuItem,
  TextField,
} from "@mui/material";

import { toast } from "react-toastify";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  department: "",
  role: "Faculty",
  status: "Active",
};

const departments = [
  "CSE",
  "CSE-AIML",
  "CSE-DS",
  "IT",
  "ECE",
  "EEE",
  "ME",
  "CE",
];

const UserDialog = ({
  open,
  handleClose,
  onSave,
  editingUser,
}) => {
  const [user, setUser] = useState(initialState);

  useEffect(() => {
    if (editingUser) {
      setUser({
        ...editingUser,
        password: "",
        confirmPassword: "",
      });
    } else {
      setUser(initialState);
    }
  }, [editingUser, open]);

  const handleChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    if (!user.name.trim()) {
      toast.error("Name is required");
      return false;
    }

    if (!user.email.trim()) {
      toast.error("Email is required");
      return false;
    }

    const emailRegex =
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!emailRegex.test(user.email)) {
      toast.error("Invalid Email");
      return false;
    }

    if (!user.department) {
      toast.error("Select Department");
      return false;
    }

    if (!editingUser) {
      if (!user.password) {
        toast.error("Password Required");
        return false;
      }

      if (user.password.length < 6) {
        toast.error(
          "Password must contain at least 6 characters"
        );
        return false;
      }

      if (user.password !== user.confirmPassword) {
        toast.error("Passwords do not match");
        return false;
      }
    }

    return true;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const payload = {
      name: user.name,
      email: user.email,
      department: user.department,
      role: user.role,
      status: user.status,
    };

    if (!editingUser) {
      payload.password = user.password;
    }

    onSave(payload);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="md"
    >
      <DialogTitle>
        {editingUser ? "Edit User" : "Add New User"}
      </DialogTitle>

      <DialogContent dividers>
        <Grid container spacing={2} mt={0.5}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Full Name"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Email Address"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </Grid>

          {!editingUser && (
            <>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  value={user.confirmPassword}
                  onChange={handleChange}
                />
              </Grid>
            </>
          )}

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              select
              fullWidth
              label="Department"
              name="department"
              value={user.department}
              onChange={handleChange}
            >
              {departments.map((dept) => (
                <MenuItem key={dept} value={dept}>
                  {dept}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              select
              fullWidth
              label="Role"
              name="role"
              value={user.role}
              onChange={handleChange}
            >
              <MenuItem value="Admin">Admin</MenuItem>
              <MenuItem value="HOD">HOD</MenuItem>
              <MenuItem value="Faculty">Faculty</MenuItem>
            </TextField>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              select
              fullWidth
              label="Status"
              name="status"
              value={user.status}
              onChange={handleChange}
            >
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
            </TextField>
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <Button onClick={handleClose}>
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={handleSubmit}
        >
          {editingUser ? "Update User" : "Save User"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserDialog;