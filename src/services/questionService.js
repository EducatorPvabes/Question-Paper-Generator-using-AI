const STORAGE_KEY = "questionBank";

const initialize = () => {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify([])
    );
  }
};

export const getQuestions = () => {
  initialize();
  return JSON.parse(localStorage.getItem(STORAGE_KEY));
};

export const addQuestion = (question) => {
  const questions = getQuestions();

  questions.push({
    ...question,
    id: Date.now(),
  });

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(questions)
  );
};

export const updateQuestion = (id, data) => {
  const questions = getQuestions();

  const updated = questions.map((q) =>
    q.id === id ? { ...q, ...data } : q
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updated)
  );
};

export const deleteQuestion = (id) => {
  const questions = getQuestions().filter(
    (q) => q.id !== id
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(questions)
  );
};