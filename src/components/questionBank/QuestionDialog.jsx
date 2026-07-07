import { useEffect, useState } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  TextField,
  MenuItem,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import { toast } from "react-toastify";

const initialState = {
  subject: "",
  unit: "",
  co: "",
  bloom: "",
  difficulty: "",
  marks: 2,
  questionType: "Theory",
  topic: "",
  question: "",
  answer: "",
  keywords: "",
  aiGenerated: false,
  status: "Pending",
};

const QuestionDialog = ({
  open,
  editingQuestion,
  handleClose,
  onSave,
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

  const handleCheckbox = (e) => {
    setQuestion({
      ...question,
      aiGenerated: e.target.checked,
    });
  };

  const validate = () => {
    if (!question.subject) {
      toast.error("Select Subject");
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
    handleClose();
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
        key={sub.id || sub.name}
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
    {[1, 2, 3, 4, 5].map((u) => (
      <MenuItem
        key={u}
        value={`Unit ${u}`}
      >
        Unit {u}
      </MenuItem>
    ))}
  </TextField>
</Grid>

<Grid item xs={12} md={4}>
  <TextField
    select
    fullWidth
    label="Course Outcome"
    name="co"
    value={question.co}
    onChange={handleChange}
  >
    {[1, 2, 3, 4, 5].map((co) => (
      <MenuItem
        key={co}
        value={`CO${co}`}
      >
        CO{co}
      </MenuItem>
    ))}
  </TextField>
</Grid>

<Grid item xs={12} md={4}>
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
    ].map((level) => (
      <MenuItem
        key={level}
        value={level}
      >
        {level}
      </MenuItem>
    ))}
  </TextField>
</Grid>

<Grid item xs={12} md={4}>
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

<Grid item xs={12} md={4}>
  <TextField
    fullWidth
    type="number"
    label="Marks"
    name="marks"
    value={question.marks}
    onChange={handleChange}
  />
</Grid>

<Grid item xs={12} md={4}>
  <TextField
    select
    fullWidth
    label="Question Type"
    name="questionType"
    value={question.questionType}
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

    <MenuItem value="Programming">
      Programming
    </MenuItem>
  </TextField>
</Grid>

<Grid item xs={12} md={4}>
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
    fullWidth
    multiline
    rows={5}
    label="Question"
    name="question"
    value={question.question}
    onChange={handleChange}
    placeholder="Enter Question"
  />
</Grid>

<Grid item xs={12}>
  <TextField
    fullWidth
    multiline
    rows={4}
    label="Model Answer"
    name="answer"
    value={question.answer}
    onChange={handleChange}
    placeholder="Enter Model Answer"
  />
</Grid>

<Grid item xs={12}>
  <TextField
    fullWidth
    label="Keywords"
    name="keywords"
    value={question.keywords}
    onChange={handleChange}
    helperText="Example: Stack, Queue, LIFO"
  />
</Grid>

<Grid item xs={12} md={6}>
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

<Grid item xs={12} md={6}>
  <FormControlLabel
    control={
      <Checkbox
        checked={question.aiGenerated}
        onChange={handleCheckbox}
      />
    }
    label="AI Generated Question"
  />
</Grid>

</Grid>

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
{editingQuestion
? "Update Question"
: "Save Question"}
</Button>

</DialogActions>

</Dialog>

);

};

export default QuestionDialog;