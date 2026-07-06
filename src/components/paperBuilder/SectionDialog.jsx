import { useEffect, useState } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Grid,
  MenuItem,
  Switch,
  TextField,
  Typography,
} from "@mui/material";

const initialState = {
  title: "",

  questionType: "Theory",

  showQuestions: 1,

  attemptQuestions: 1,

  marksPerQuestion: 2,

  totalMarks: 2,

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

const blooms = [
  "Remember",
  "Understand",
  "Apply",
  "Analyze",
  "Evaluate",
  "Create",
];

const difficulties = [
  "Easy",
  "Medium",
  "Hard",
];

const units = [
  "Unit 1",
  "Unit 2",
  "Unit 3",
  "Unit 4",
  "Unit 5",
];

const cos = [
  "CO1",
  "CO2",
  "CO3",
  "CO4",
  "CO5",
];

const questionTypes = [
  "Theory",
  "MCQ",
  "Numerical",
  "Programming",
  "Case Study",
  "Assertion Reason",
];

const SectionDialog = ({
  open,
  handleClose,
  onSave,
  editingSection,
}) => {

  const [section, setSection] =
    useState(initialState);

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

    setSection((prev)=>({

      ...prev,

      totalMarks: total,

    }));

  },[
    section.showQuestions,
    section.marksPerQuestion
  ]);

  const handleChange = (e)=>{

    setSection({

      ...section,

      [e.target.name]:e.target.value

    });

  };

  const handleSwitch=(e)=>{

    setSection({

      ...section,

      [e.target.name]:e.target.checked

    });

  };