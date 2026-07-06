const STORAGE_KEY = "generatedPapers";

export const getGeneratedPapers = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
};

export const saveGeneratedPaper = (paper) => {
  const papers = getGeneratedPapers();

  papers.unshift({
    id: Date.now(),
    createdAt: new Date().toLocaleString(),
    ...paper,
  });

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(papers)
  );
};

export const deleteGeneratedPaper = (id) => {
  const papers = getGeneratedPapers().filter(
    (p) => p.id !== id
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(papers)
  );
};