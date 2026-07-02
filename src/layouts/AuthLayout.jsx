import { Box, Grid, Paper } from "@mui/material";
import hero from "../assets/hero.png";

const AuthLayout = ({ children }) => {
  return (
    <Grid container sx={{ minHeight: "100vh" }}>
      {/* Left Section */}
      <Grid
        item
        xs={false}
        md={6}
        sx={{
          backgroundColor: "#1976d2",
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={hero}
          alt="Hero"
          sx={{
            width: "80%",
            maxWidth: 500,
          }}
        />
      </Grid>

      {/* Right Section */}
      <Grid
        item
        xs={12}
        md={6}
        component={Paper}
        elevation={6}
        square
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 4,
          }}
        >
          {children}
        </Box>
      </Grid>
    </Grid>
  );
};

export default AuthLayout;