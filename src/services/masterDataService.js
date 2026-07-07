const SUBJECTS_KEY = "subjects";
const DEPARTMENTS_KEY = "departments";

const defaultDepartments = [
  "CSE",
  "CSE-AIML",
  "CSE-DS",
  "IT",
  "ECE",
  "EEE",
  "ME",
  "CE",
];

const defaultQuestionTypes = [
  "MCQ",
  "Short Answer",
  "Long Answer",
  "Programming",
  "Case Study",
  "Numerical",
];

const defaultBloomLevels = [
  "Remember",
  "Understand",
  "Apply",
  "Analyze",
  "Evaluate",
  "Create",
];

const defaultDifficulty = [
  "Easy",
  "Medium",
  "Hard",
];

// -------------------------
// Subjects
// -------------------------

export const getSubjects = () => {
  return JSON.parse(
    localStorage.getItem(SUBJECTS_KEY)
  ) || [];
};

// -------------------------
// Units
// -------------------------

export const getUnitsBySubject = (subjectName) => {

  const subjects = getSubjects();

  const subject = subjects.find(
    (s) => s.name === subjectName
  );

  if (!subject) return [];

  return [
    "Unit 1",
    "Unit 2",
    "Unit 3",
    "Unit 4",
    "Unit 5",
  ];
};

// -------------------------
// Course Outcomes
// -------------------------

export const getCOBySubject = (subjectName) => {

  const subjects = getSubjects();

  const subject = subjects.find(
    (s) => s.name === subjectName
  );

  if (!subject) return [];

  return [
    "CO1",
    "CO2",
    "CO3",
    "CO4",
    "CO5",
  ];
};

// -------------------------
// Departments
// -------------------------

export const getDepartments = () => {

  const departments = JSON.parse(
    localStorage.getItem(DEPARTMENTS_KEY)
  );

  return departments || defaultDepartments;

};

// -------------------------
// Difficulty
// -------------------------

export const getDifficultyLevels = () => {

  return defaultDifficulty;

};

// -------------------------
// Bloom Levels
// -------------------------

export const getBloomLevels = () => {

  return defaultBloomLevels;

};

// -------------------------
// Question Types
// -------------------------

export const getQuestionTypes = () => {

  return defaultQuestionTypes;

};