import {
  Alert,
  Box,
} from "@mui/material";

import SectionCard from "./SectionCard";

const SectionList = ({
  sections,
  onEdit,
  onDelete,
  onDuplicate,
  onMoveUp,
  onMoveDown,
}) => {
  if (sections.length === 0) {
    return (
      <Alert severity="info" sx={{ mb: 3 }}>
        No sections added yet.
        <br />
        Click <strong>Add Section</strong> to create your first paper section.
      </Alert>
    );
  }

  return (
    <Box>

      {sections.map((section, index) => (
        <SectionCard
          key={section.id}
          section={section}
          index={index}
          totalSections={sections.length}
          onEdit={onEdit}
          onDelete={onDelete}
          onDuplicate={onDuplicate}
          onMoveUp={onMoveUp}
          onMoveDown={onMoveDown}
        />
      ))}

    </Box>
  );
};

export default SectionList;