import { Chip } from "@mui/material";

const StatusChip = ({ status }) => {
  return (
    <Chip
      label={status}
      color={
        status === "Active"
          ? "success"
          : "error"
      }
      size="small"
    />
  );
};

export default StatusChip;