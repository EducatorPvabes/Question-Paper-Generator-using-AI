import { useState } from "react";

import {
  Typography,
  Paper,
  Box,
  Button,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import DashboardLayout from "../../layouts/DashboardLayout";

import PaperInfo from "../../components/paperBuilder/PaperInfo";
import SectionList from "../../components/paperBuilder/SectionList";
import SectionDialog from "../../components/paperBuilder/SectionDialog";
import RuleSummary from "../../components/paperBuilder/RuleSummary";

const PaperBuilder = () => {

  const [paperInfo, setPaperInfo] = useState({
    college: "",
    university: "",
    department: "",
    course: "",
    branch: "",
    semester: "",
    subject: "",
    subjectCode: "",
    examType: "",
    session: "",
    duration: "3 Hours",
    maxMarks: 70,
    instructions: "",
  });

  const [sections, setSections] = useState([]);

  const [openDialog, setOpenDialog] = useState(false);

  const [editingSection, setEditingSection] = useState(null);

  //------------------------
  // Add Section
  //------------------------

  const handleAddSection = () => {
    setEditingSection(null);
    setOpenDialog(true);
  };

  //------------------------
  // Edit Section
  //------------------------

  const handleEditSection = (section) => {
    setEditingSection(section);
    setOpenDialog(true);
  };

  //------------------------
  // Delete Section
  //------------------------

  const handleDeleteSection = (id) => {
    const updated = sections.filter(
      (item) => item.id !== id
    );

    setSections(updated);
  };

  //------------------------
  // Duplicate Section
  //------------------------

  const handleDuplicate = (section) => {

    const copy = {
      ...section,
      id: Date.now(),
      title: section.title + " Copy",
    };

    setSections([...sections, copy]);
  };

  //------------------------
  // Move Up
  //------------------------

  const moveUp = (index) => {

    if (index === 0) return;

    const arr = [...sections];

    [arr[index], arr[index - 1]] =
      [arr[index - 1], arr[index]];

    setSections(arr);
  };

  //------------------------
  // Move Down
  //------------------------

  const moveDown = (index) => {

    if (index === sections.length - 1)
      return;

    const arr = [...sections];

    [arr[index], arr[index + 1]] =
      [arr[index + 1], arr[index]];

    setSections(arr);
  };

  //------------------------
  // Save Section
  //------------------------

  const handleSaveSection = (section) => {

    if (editingSection) {

      const updated = sections.map((item) =>
        item.id === editingSection.id
          ? {
              ...section,
              id: editingSection.id,
            }
          : item
      );

      setSections(updated);

    } else {

      setSections([
        ...sections,
        {
          ...section,
          id: Date.now(),
        },
      ]);

    }

    setEditingSection(null);

    setOpenDialog(false);
  };

  return (

    <DashboardLayout>

      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
      >
        Paper Template Builder
      </Typography>

      <Paper sx={{ p: 3, mb: 3 }}>

        <PaperInfo

          paperInfo={paperInfo}

          setPaperInfo={setPaperInfo}

        />

      </Paper>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >

        <Typography variant="h5">

          Sections

        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAddSection}
        >
          Add Section
        </Button>

      </Box>

      <SectionList

        sections={sections}

        onEdit={handleEditSection}

        onDelete={handleDeleteSection}

        onDuplicate={handleDuplicate}

        onMoveUp={moveUp}

        onMoveDown={moveDown}

      />

      <RuleSummary

        paperInfo={paperInfo}

        sections={sections}

      />

      <SectionDialog

        open={openDialog}

        editingSection={editingSection}

        handleClose={() => setOpenDialog(false)}

        onSave={handleSaveSection}

      />

    </DashboardLayout>

  );

};

export default PaperBuilder;