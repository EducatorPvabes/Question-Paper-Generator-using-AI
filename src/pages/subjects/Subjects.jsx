import { useEffect, useState } from "react";
import { Paper, Typography } from "@mui/material";
import { toast } from "react-toastify";

import DashboardLayout from "../../layouts/DashboardLayout";

import SubjectToolbar from "../../components/subjects/SubjectToolbar";
import SubjectTable from "../../components/subjects/SubjectTable";
import SubjectDialog from "../../components/subjects/SubjectDialog";

import {
  fetchSubjects,
  createSubject,
  updateSubject,
  deleteSubject,
} from "../../services/subjectService";

const Subjects = () => {
  const [subjects, setSubjects] = useState([]);
  const [search, setSearch] = useState("");

  const [openDialog, setOpenDialog] = useState(false);
  const [editingSubject, setEditingSubject] = useState(null);

  useEffect(() => {
    loadSubjects();
  }, []);

  const loadSubjects = () => {
    setSubjects(fetchSubjects());
  };

  const filteredSubjects = subjects.filter(
    (subject) =>
      subject.name.toLowerCase().includes(search.toLowerCase()) ||
      subject.code.toLowerCase().includes(search.toLowerCase()) ||
      subject.department.toLowerCase().includes(search.toLowerCase())
  );

  const handleAdd = () => {
    setEditingSubject(null);
    setOpenDialog(true);
  };

  const handleEdit = (subject) => {
    setEditingSubject(subject);
    setOpenDialog(true);
  };

  const handleDelete = (subject) => {
    if (window.confirm(`Delete ${subject.name}?`)) {
      deleteSubject(subject.id);
      loadSubjects();
      toast.success("Subject Deleted");
    }
  };

  const handleSave = (subject) => {
    if (editingSubject) {
      updateSubject(editingSubject.id, subject);
      toast.success("Subject Updated");
    } else {
      createSubject(subject);
      toast.success("Subject Added");
    }

    loadSubjects();
    setOpenDialog(false);
    setEditingSubject(null);
  };

  return (
    <DashboardLayout>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Subject Management
      </Typography>

      <SubjectToolbar
        search={search}
        setSearch={setSearch}
        onAdd={handleAdd}
      />

      <Paper sx={{ p: 2, mt: 2 }}>
        <SubjectTable
          rows={filteredSubjects}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </Paper>

      <SubjectDialog
        open={openDialog}
        editingSubject={editingSubject}
        handleClose={() => setOpenDialog(false)}
        onSave={handleSave}
      />
    </DashboardLayout>
  );
};

export default Subjects;