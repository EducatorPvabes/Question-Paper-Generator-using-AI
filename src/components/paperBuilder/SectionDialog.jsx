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
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  Checkbox,
  ListItemText,
  FormControlLabel,
  Switch,
  Typography,
  Alert,
} from "@mui/material";

import {
  getDifficultyLevels,
  getBloomLevels,
  getQuestionTypes,
  getUnitsBySubject,
  getCOBySubject,
} from "../../services/masterDataService";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const initialState = {
  title: "",
  questionType: "MCQ",

  showQuestions: 1,

  attemptQuestions: 1,

  marksPerQuestion: 1,

  totalMarks: 1,

  difficulty: [],

  bloom: [],

  units: [],

  co: [],

  topics: "",

  randomize: true,

  hasInternalChoice: false,

  internalChoiceCount: 0,

  instructions: "",
};

const SectionDialog = ({
  open,
  handleClose,
  onSave,
  editingSection,
}) => {

  const [section, setSection] =
    useState(initialState);

  const difficulties =
    getDifficultyLevels();

  const blooms =
    getBloomLevels();

  const questionTypes =
    getQuestionTypes();

  const units =
    getUnitsBySubject();

  const cos =
    getCOBySubject();

  useEffect(() => {

    if (editingSection) {

      setSection(editingSection);

    } else {

      setSection(initialState);

    }

  }, [editingSection, open]);

  useEffect(() => {

    const total =
      Number(section.showQuestions) *
      Number(section.marksPerQuestion);

    setSection((prev) => ({
      ...prev,
      totalMarks: total,
    }));

  }, [
    section.showQuestions,
    section.marksPerQuestion,
  ]);

  const handleChange = (e) => {

    setSection({

      ...section,

      [e.target.name]: e.target.value,

    });

  };

  const handleMultiSelect = (e) => {

    const {
      name,
      value,
    } = e.target;

    setSection({

      ...section,

      [name]:
        typeof value === "string"
          ? value.split(",")
          : value,

    });

  };

  const handleSwitch = (e) => {

    setSection({

      ...section,

      [e.target.name]:
        e.target.checked,

    });

  };

  const validateForm = () => {

    if (section.title.trim() === "") {

      return "Section Name is required.";

    }

    if (
      Number(section.showQuestions) <= 0
    ) {

      return "Show Questions must be greater than zero.";

    }

    if (
      Number(section.attemptQuestions) <= 0
    ) {

      return "Attempt Questions must be greater than zero.";

    }

    if (
      Number(section.attemptQuestions) >
      Number(section.showQuestions)
    ) {

      return "Attempt Questions cannot exceed Total Questions.";

    }

    if (
      Number(section.marksPerQuestion) <= 0
    ) {

      return "Marks should be greater than zero.";

    }

    return "";

  };

  const handleSubmit = () => {

    const error = validateForm();

    if (error) {

      alert(error);

      return;

    }

    onSave(section);

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

        {editingSection
          ? "Edit Section"
          : "Add New Section"}

      </DialogTitle>

      <DialogContent>

        <Grid
          container
          spacing={2}
          mt={1}
        >
          {/* Section Name */}

<Grid item xs={12}>
  <TextField
    fullWidth
    label="Section Name"
    name="title"
    value={section.title}
    onChange={handleChange}
  />
</Grid>

{/* Question Type */}

<Grid item xs={12} md={6}>
  <TextField
    select
    fullWidth
    label="Question Type"
    name="questionType"
    value={section.questionType}
    onChange={handleChange}
  >
    {questionTypes.map((item) => (
      <MenuItem key={item} value={item}>
        {item}
      </MenuItem>
    ))}
  </TextField>
</Grid>

{/* Show Questions */}

<Grid item xs={6} md={3}>
  <TextField
    fullWidth
    type="number"
    label="Questions to Show"
    name="showQuestions"
    value={section.showQuestions}
    onChange={handleChange}
  />
</Grid>

{/* Attempt */}

<Grid item xs={6} md={3}>
  <TextField
    fullWidth
    type="number"
    label="Attempt Questions"
    name="attemptQuestions"
    value={section.attemptQuestions}
    onChange={handleChange}
  />
</Grid>

{/* Marks */}

<Grid item xs={6}>
  <TextField
    fullWidth
    type="number"
    label="Marks per Question"
    name="marksPerQuestion"
    value={section.marksPerQuestion}
    onChange={handleChange}
  />
</Grid>

<Grid item xs={6}>
  <TextField
    fullWidth
    disabled
    label="Section Total Marks"
    value={section.totalMarks}
  />
</Grid>

{/* Difficulty */}

<Grid item xs={12} md={6}>
  <FormControl fullWidth>

    <InputLabel>
      Difficulty
    </InputLabel>

    <Select
      multiple
      name="difficulty"
      value={section.difficulty}
      onChange={handleMultiSelect}
      input={<OutlinedInput label="Difficulty" />}
      renderValue={(selected) =>
        selected.join(", ")
      }
      MenuProps={MenuProps}
    >

      {difficulties.map((item) => (
        <MenuItem
          key={item}
          value={item}
        >
          <Checkbox
            checked={
              section.difficulty.indexOf(item) > -1
            }
          />

          <ListItemText primary={item} />

        </MenuItem>
      ))}

    </Select>

  </FormControl>
</Grid>

{/* Bloom */}

<Grid item xs={12} md={6}>
  <FormControl fullWidth>

    <InputLabel>
      Bloom Level
    </InputLabel>

    <Select
      multiple
      name="bloom"
      value={section.bloom}
      onChange={handleMultiSelect}
      input={<OutlinedInput label="Bloom Level" />}
      renderValue={(selected) =>
        selected.join(", ")
      }
      MenuProps={MenuProps}
    >

      {blooms.map((item) => (
        <MenuItem
          key={item}
          value={item}
        >
          <Checkbox
            checked={
              section.bloom.indexOf(item) > -1
            }
          />

          <ListItemText primary={item} />

        </MenuItem>
      ))}

    </Select>

  </FormControl>
</Grid>

{/* Units */}

<Grid item xs={12} md={6}>
  <FormControl fullWidth>

    <InputLabel>
      Units
    </InputLabel>

    <Select
      multiple
      name="units"
      value={section.units}
      onChange={handleMultiSelect}
      input={<OutlinedInput label="Units" />}
      renderValue={(selected) =>
        selected.join(", ")
      }
      MenuProps={MenuProps}
    >

      {units.map((item) => (
        <MenuItem
          key={item}
          value={item}
        >
          <Checkbox
            checked={
              section.units.indexOf(item) > -1
            }
          />

          <ListItemText primary={item} />

        </MenuItem>
      ))}

    </Select>

  </FormControl>
</Grid>

{/* Course Outcomes */}

<Grid item xs={12} md={6}>
  <FormControl fullWidth>

    <InputLabel>
      Course Outcomes
    </InputLabel>

    <Select
      multiple
      name="co"
      value={section.co}
      onChange={handleMultiSelect}
      input={<OutlinedInput label="Course Outcomes" />}
      renderValue={(selected) =>
        selected.join(", ")
      }
      MenuProps={MenuProps}
    >

      {cos.map((item) => (
        <MenuItem
          key={item}
          value={item}
        >
          <Checkbox
            checked={
              section.co.indexOf(item) > -1
            }
          />

          <ListItemText primary={item} />

        </MenuItem>
      ))}

    </Select>

  </FormControl>
</Grid>
{/* Topics */}

<Grid item xs={12}>
  <TextField
    fullWidth
    label="Topics (Comma Separated)"
    name="topics"
    value={section.topics}
    onChange={handleChange}
    placeholder="Arrays, Linked List, Stack"
  />
</Grid>

{/* Random Question */}

<Grid item xs={12} md={6}>
  <FormControlLabel
    control={
      <Switch
        checked={section.randomize}
        onChange={handleSwitch}
        name="randomize"
      />
    }
    label="Randomize Questions"
  />
</Grid>

{/* Internal Choice */}

<Grid item xs={12} md={6}>
  <FormControlLabel
    control={
      <Switch
        checked={section.hasInternalChoice}
        onChange={handleSwitch}
        name="hasInternalChoice"
      />
    }
    label="Enable Internal Choice"
  />
</Grid>

{section.hasInternalChoice && (
  <Grid item xs={12}>
    <TextField
      fullWidth
      type="number"
      label="Internal Choice Count"
      name="internalChoiceCount"
      value={section.internalChoiceCount}
      onChange={handleChange}
    />
  </Grid>
)}

{/* Instructions */}

<Grid item xs={12}>
  <TextField
    fullWidth
    multiline
    rows={3}
    label="Section Instructions"
    name="instructions"
    value={section.instructions}
    onChange={handleChange}
    placeholder="Attempt any 5 questions."
  />
</Grid>

{/* Summary */}

<Grid item xs={12}>
  <Alert severity="info">

    <Typography variant="body2">

      Questions :
      <strong> {section.showQuestions}</strong>

      &nbsp;&nbsp;|&nbsp;&nbsp;

      Attempt :
      <strong> {section.attemptQuestions}</strong>

      &nbsp;&nbsp;|&nbsp;&nbsp;

      Marks :
      <strong> {section.totalMarks}</strong>

    </Typography>

  </Alert>
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

{editingSection
? "Update Section"
: "Save Section"}

</Button>

</DialogActions>

</Dialog>

);

};

export default SectionDialog;