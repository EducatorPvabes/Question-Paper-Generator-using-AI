const STORAGE_KEY = "subjects";

const defaultSubjects = [
  {
    id: 1,
    code: "CSE301",
    name: "Data Structures",
    department: "CSE",
    semester: "3",
    credits: 4,
    faculty: "Dr. Amit",
    status: "Active",
  },
  {
    id: 2,
    code: "AIML402",
    name: "Machine Learning",
    department: "CSE-AIML",
    semester: "5",
    credits: 4,
    faculty: "Dr. Neha",
    status: "Active",
  },
];

const initialize = () => {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(defaultSubjects)
    );
  }
};

export const fetchSubjects = () => {
  initialize();
  return JSON.parse(localStorage.getItem(STORAGE_KEY));
};

export const createSubject = (subject) => {
  const subjects = fetchSubjects();

  subject.id = Date.now();

  subjects.push(subject);

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(subjects)
  );
};

export const updateSubject = (id, data) => {
  const subjects = fetchSubjects();

  const updated = subjects.map((item) =>
    item.id === id ? { ...item, ...data } : item
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updated)
  );
};

export const deleteSubject = (id) => {
  const subjects = fetchSubjects().filter(
    (item) => item.id !== id
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(subjects)
  );
};