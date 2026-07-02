import { Chip } from "@mui/material";

const StatusChip = ({ status }) => {
  return (
    <Chip
      label={status}
      color={status === "Active" ? "success" : "error"}
      size="small"
      variant="filled"
    />
  );
};

export default StatusChip;