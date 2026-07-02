import {
  Box,
  Toolbar,
  Typography,
} from "@mui/material";

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 250,
        minHeight: "100vh",
        bgcolor: "primary.main",
        color: "#fff",
      }}
    >
      <Toolbar />

      <Typography
        variant="h6"
        align="center"
        mt={3}
      >
        AI Question Paper
      </Typography>
    </Box>
  );
};

export default Sidebar;