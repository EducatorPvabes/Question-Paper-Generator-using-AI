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
  code: "",
  name: "",
  department: "",
  semester: "",
  credits: "",
  faculty: "",
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

const SubjectDialog = ({
  open,
  handleClose,
  onSave,
  editingSubject,
}) => {
  const [subject, setSubject] = useState(initialState);

  useEffect(() => {
    if (editingSubject) {
      setSubject(editingSubject);
    } else {
      setSubject(initialState);
    }
  }, [editingSubject, open]);

  const handleChange = (e) => {
    setSubject((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    if (!subject.code.trim()) {
      toast.error("Subject Code is required");
      return false;
    }

    if (!subject.name.trim()) {
      toast.error("Subject Name is required");
      return false;
    }

    if (!subject.department) {
      toast.error("Select Department");
      return false;
    }

    if (!subject.semester) {
      toast.error("Select Semester");
      return false;
    }

    if (!subject.credits) {
      toast.error("Select Credits");
      return false;
    }

    if (!subject.faculty.trim()) {
      toast.error("Faculty Name is required");
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    onSave(subject);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="md"
    >
      <DialogTitle>
        {editingSubject ? "Edit Subject" : "Add New Subject"}
      </DialogTitle>

      <DialogContent dividers>
        <Grid container spacing={2} mt={0.5}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Subject Code"
              name="code"
              value={subject.code}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Subject Name"
              name="name"
              value={subject.name}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              select
              fullWidth
              label="Department"
              name="department"
              value={subject.department}
              onChange={handleChange}
            >
              {departments.map((dept) => (
                <MenuItem key={dept} value={dept}>
                  {dept}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              select
              fullWidth
              label="Semester"
              name="semester"
              value={subject.semester}
              onChange={handleChange}
            >
              {[1,2,3,4,5,6,7,8].map((sem) => (
                <MenuItem key={sem} value={sem}>
                  Semester {sem}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              select
              fullWidth
              label="Credits"
              name="credits"
              value={subject.credits}
              onChange={handleChange}
            >
              {[1,2,3,4,5].map((credit) => (
                <MenuItem key={credit} value={credit}>
                  {credit}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Faculty Name"
              name="faculty"
              value={subject.faculty}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              select
              fullWidth
              label="Status"
              name="status"
              value={subject.status}
              onChange={handleChange}
            >
              <MenuItem value="Active">
                Active
              </MenuItem>

              <MenuItem value="Inactive">
                Inactive
              </MenuItem>
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
          {editingSubject ? "Update Subject" : "Save Subject"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SubjectDialog;