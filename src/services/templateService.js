const STORAGE_KEY = "paperTemplates";

// Initialize storage
const initialize = () => {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
  }
};

// Get All Templates
export const getTemplates = () => {
  initialize();
  return JSON.parse(localStorage.getItem(STORAGE_KEY));
};

// Save New Template
export const saveTemplate = (template) => {
  const templates = getTemplates();

  templates.unshift({
    id: Date.now(),
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString(),
    ...template,
  });

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(templates)
  );
};

// Update Template
export const updateTemplate = (id, template) => {
  const templates = getTemplates();

  const updatedTemplates = templates.map((item) =>
    item.id === id
      ? {
          ...item,
          ...template,
          updatedAt: new Date().toLocaleString(),
        }
      : item
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedTemplates)
  );
};

// Delete Template
export const deleteTemplate = (id) => {
  const templates = getTemplates().filter(
    (item) => item.id !== id
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(templates)
  );
};

// Get Template By ID
export const getTemplateById = (id) => {
  return getTemplates().find(
    (item) => item.id === id
  );
};

// Duplicate Template
export const duplicateTemplate = (id) => {
  const template = getTemplateById(id);

  if (!template) return;

  saveTemplate({
    ...template,
    name: `${template.name} Copy`,
  });
};