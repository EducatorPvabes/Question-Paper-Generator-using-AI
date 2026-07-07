import { getQuestions } from "./questionService";

/**
 * Generate Question Paper
 * @param {Object} paperInfo
 * @param {Array} sections
 * @returns {Object}
 */
export const generatePaper = (paperInfo, sections) => {
  const questionBank = getQuestions();

  const generatedSections = [];

  const usedQuestionIds = new Set();

  sections.forEach((section) => {
    let filtered = [...questionBank];

    // -------------------------
    // Subject
    // -------------------------
    if (paperInfo.subject) {
      filtered = filtered.filter(
        (q) => q.subject === paperInfo.subject
      );
    }

    // -------------------------
    // Unit
    // -------------------------
    if (section.units?.length) {
      filtered = filtered.filter((q) =>
        section.units.includes(q.unit)
      );
    }

    // -------------------------
    // CO
    // -------------------------
    if (section.cos?.length) {
      filtered = filtered.filter((q) =>
        section.cos.includes(q.co)
      );
    }

    // -------------------------
    // Bloom
    // -------------------------
    if (section.blooms?.length) {
      filtered = filtered.filter((q) =>
        section.blooms.includes(q.bloom)
      );
    }

    // -------------------------
    // Difficulty
    // -------------------------
    if (section.difficulties?.length) {
      filtered = filtered.filter((q) =>
        section.difficulties.includes(
          q.difficulty
        )
      );
    }

    // -------------------------
    // Marks
    // -------------------------
    if (section.marksPerQuestion) {
      filtered = filtered.filter(
        (q) =>
          Number(q.marks) ===
          Number(section.marksPerQuestion)
      );
    }

    // -------------------------
    // Remove duplicates
    // -------------------------
    filtered = filtered.filter(
      (q) => !usedQuestionIds.has(q.id)
    );

    // -------------------------
    // Randomize
    // -------------------------
    if (section.randomize) {
     filtered = filtered
.sort(() => Math.random() - 0.5)
.sort((a,b)=>{

if(
a.difficulty===b.difficulty
)
return 0;

return a.difficulty>b.difficulty
?1
:-1;

});
    }

    // -------------------------
    // Select Questions
    // -------------------------
    const selected = filtered.slice(
      0,
      Number(section.showQuestions)
    );

    selected.forEach((q) =>
      usedQuestionIds.add(q.id)
    );

    generatedSections.push({
      ...section,
      questions: selected,
    });
  });
  if (
selected.length <
section.showQuestions
){

console.warn(

`${section.title} has only ${selected.length} questions.`

);

}

  return {
    paperInfo,
    sections: generatedSections,
    generatedAt: new Date().toISOString(),
  };
};