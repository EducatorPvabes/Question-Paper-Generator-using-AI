import DashboardLayout from "../../layouts/DashboardLayout";
import { Typography } from "@mui/material";

const GeneratePaper = () => {
  return (
    <DashboardLayout>
      <Typography variant="h4">
        Generate Question Paper
      </Typography>

      <Typography sx={{ mt: 2 }}>
        This module is under development.
      </Typography>
    </DashboardLayout>
  );
};

export default GeneratePaper;