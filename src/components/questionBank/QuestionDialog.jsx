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
  subject: "",
  unit: "",
  co: "",
  bloom: "",
  difficulty: "",
  marks: "",
  type: "",
  topic: "",
  question: "",
  answer: "",
  keywords: "",
  status: "Pending",
};

const QuestionDialog = ({
  open,
 handleClose,
  onSave,
  editingQuestion,
}) => {
  const [question, setQuestion] = useState(initialState);

  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("subjects")) || [];

    setSubjects(data);

    if (editingQuestion) {
      setQuestion(editingQuestion);
    } else {
      setQuestion(initialState);
    }
  }, [editingQuestion, open]);

  const handleChange = (e) => {
    setQuestion({
      ...question,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    if (!question.subject) {
      toast.error("Select Subject");
      return false;
    }

    if (!question.unit) {
      toast.error("Select Unit");
      return false;
    }

    if (!question.co) {
      toast.error("Select CO");
      return false;
    }

    if (!question.question.trim()) {
      toast.error("Enter Question");
      return false;
    }

    if (!question.marks) {
      toast.error("Enter Marks");
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    onSave(question);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="md"
    >
      <DialogTitle>
        {editingQuestion
          ? "Edit Question"
          : "Add Question"}
      </DialogTitle>

      <DialogContent dividers>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={12} md={6}>
            <TextField
              select
              fullWidth
              label="Subject"
              name="subject"
              value={question.subject}
              onChange={handleChange}
            >
              {subjects.map((sub) => (
                <MenuItem
                  key={sub.id}
                  value={sub.name}
                >
                  {sub.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              select
              fullWidth
              label="Unit"
              name="unit"
              value={question.unit}
              onChange={handleChange}
            >
              {[1,2,3,4,5].map((u)=>(
                <MenuItem
                  key={u}
                  value={`Unit ${u}`}
                >
                  Unit {u}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              select
              fullWidth
              label="Course Outcome"
              name="co"
              value={question.co}
              onChange={handleChange}
            >
              {[1,2,3,4,5].map((c)=>(
                <MenuItem
                  key={c}
                  value={`CO${c}`}
                >
                  CO{c}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              select
              fullWidth
              label="Bloom Level"
              name="bloom"
              value={question.bloom}
              onChange={handleChange}
            >
              {[
                "Remember",
                "Understand",
                "Apply",
                "Analyze",
                "Evaluate",
                "Create",
              ].map((b)=>(
                <MenuItem
                  key={b}
                  value={b}
                >
                  {b}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              select
              fullWidth
              label="Difficulty"
              name="difficulty"
              value={question.difficulty}
              onChange={handleChange}
            >
              <MenuItem value="Easy">
                Easy
              </MenuItem>

              <MenuItem value="Medium">
                Medium
              </MenuItem>

              <MenuItem value="Hard">
                Hard
              </MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              type="number"
              fullWidth
              label="Marks"
              name="marks"
              value={question.marks}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              select
              fullWidth
              label="Question Type"
              name="type"
              value={question.type}
              onChange={handleChange}
            >
              <MenuItem value="Theory">
                Theory
              </MenuItem>

              <MenuItem value="MCQ">
                MCQ
              </MenuItem>

              <MenuItem value="Numerical">
                Numerical
              </MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Topic"
              name="topic"
              value={question.topic}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              multiline
              rows={4}
              fullWidth
              label="Question"
              name="question"
              value={question.question}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              multiline
              rows={4}
              fullWidth
              label="Model Answer"
              name="answer"
              value={question.answer}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Keywords"
              name="keywords"
              value={question.keywords}
              onChange={handleChange}
              helperText="Example: Stack,LIFO,Array"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              select
              fullWidth
              label="Status"
              name="status"
              value={question.status}
              onChange={handleChange}
            >
              <MenuItem value="Pending">
                Pending
              </MenuItem>

              <MenuItem value="Approved">
                Approved
              </MenuItem>

              <MenuItem value="Rejected">
                Rejected
              </MenuItem>
            </TextField>
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={handleSubmit}
        >
          {editingQuestion
            ? "Update Question"
            : "Save Question"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default QuestionDialog;