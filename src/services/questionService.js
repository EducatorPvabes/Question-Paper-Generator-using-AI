const STORAGE_KEY = "questions";

// ----------------------------
// Get All Questions
// ----------------------------
export const getQuestions = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
};

// ----------------------------
// Add Question
// ----------------------------
export const addQuestion = (question) => {
  const questions = getQuestions();

  const newQuestion = {
    id: Date.now(),
    createdAt: new Date().toISOString(),
    ...question,
  };

  questions.push(newQuestion);

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(questions)
  );
};

// ----------------------------
// Update Question
// ----------------------------
export const updateQuestion = (id, updatedQuestion) => {
  const questions = getQuestions();

  const updated = questions.map((q) =>
    q.id === id
      ? {
          ...q,
          ...updatedQuestion,
        }
      : q
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updated)
  );
};

// ----------------------------
// Delete Question
// ----------------------------
export const deleteQuestion = (id) => {
  const questions = getQuestions();

  const updated = questions.filter(
    (q) => q.id !== id
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updated)
  );
};

// ----------------------------
// Get Question By Id
// ----------------------------
export const getQuestionById = (id) => {
  return getQuestions().find(
    (q) => q.id === id
  );
};

// ----------------------------
// Subject Filter
// ----------------------------
export const getQuestionsBySubject = (
  subject
) => {
  return getQuestions().filter(
    (q) => q.subject === subject
  );
};

// ----------------------------
// CO Filter
// ----------------------------
export const getQuestionsByCO = (co) => {
  return getQuestions().filter(
    (q) => q.co === co
  );
};

// ----------------------------
// Bloom Filter
// ----------------------------
export const getQuestionsByBloom = (
  bloom
) => {
  return getQuestions().filter(
    (q) => q.bloom === bloom
  );
};

// ----------------------------
// Difficulty Filter
// ----------------------------
export const getQuestionsByDifficulty = (
  difficulty
) => {
  return getQuestions().filter(
    (q) =>
      q.difficulty === difficulty
  );
};