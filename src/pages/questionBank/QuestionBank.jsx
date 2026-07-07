import { useEffect, useState } from "react";
import { Paper, Typography } from "@mui/material";
import { toast } from "react-toastify";
import QuestionFilter from "./QuestionFilter";
import DashboardLayout from "../../layouts/DashboardLayout";

import QuestionToolbar from "../../components/questionBank/QuestionToolbar";
import QuestionTable from "../../components/questionBank/QuestionTable";
import QuestionDialog from "../../components/questionBank/QuestionDialog";

import {
  getQuestions,
  addQuestion,
  updateQuestion,
  deleteQuestion,
} from "../../services/questionService";

const QuestionBank = () => {

  const [questions, setQuestions] = useState([]);

  const [search, setSearch] = useState("");

  const [openDialog, setOpenDialog] = useState(false);

  const [editingQuestion, setEditingQuestion] = useState(null);

  const [filters, setFilters] = useState({

  difficulty: "",

  bloom: "",

  subject: "",

  co: "",

});
  useEffect(() => {
    loadQuestions();
  }, []);

  const loadQuestions = () => {
    setQuestions(getQuestions());
  };

const filteredQuestions = questions.filter((q) => {

  const matchesSearch =
    q.question
      .toLowerCase()
      .includes(search.toLowerCase());

  const matchesDifficulty =
    !filters.difficulty ||
    q.difficulty === filters.difficulty;

  const matchesBloom =
    !filters.bloom ||
    q.bloom === filters.bloom;

  const matchesSubject =
    !filters.subject ||
    q.subject
      .toLowerCase()
      .includes(filters.subject.toLowerCase());

  const matchesCO =
    !filters.co ||
    q.co
      .toLowerCase()
      .includes(filters.co.toLowerCase());

  return (

    matchesSearch &&

    matchesDifficulty &&

    matchesBloom &&

    matchesSubject &&

    matchesCO

  );

});

  const handleAdd = () => {
    setEditingQuestion(null);
    setOpenDialog(true);
  };

  const handleEdit = (question) => {
    setEditingQuestion(question);
    setOpenDialog(true);
  };

  const handleDelete = (question) => {

    if (window.confirm("Delete this Question ?")) {

      deleteQuestion(question.id);

      loadQuestions();

      toast.success("Question Deleted");

    }

  };

  const handleSave = (question) => {

    if (editingQuestion) {

      updateQuestion(editingQuestion.id, question);

      toast.success("Question Updated");

    } else {

      addQuestion(question);

      toast.success("Question Added");

    }

    loadQuestions();

    setOpenDialog(false);

    setEditingQuestion(null);

  };

  return (

    <DashboardLayout>

      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
      >
        Question Bank
      </Typography>

      <QuestionToolbar
        search={search}
        setSearch={setSearch}
        onAdd={handleAdd}
      />
      <QuestionFilter

filters={filters}

setFilters={setFilters}

/>


      <Paper sx={{ p:2, mt:2 }}>

        <QuestionTable

          rows={filteredQuestions}

          onEdit={handleEdit}

          onDelete={handleDelete}

        />

      </Paper>

      <QuestionDialog

        open={openDialog}

        editingQuestion={editingQuestion}

        handleClose={() => setOpenDialog(false)}

        onSave={handleSave}

      />

    </DashboardLayout>

  );

};

export default QuestionBank;