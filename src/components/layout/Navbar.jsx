import {
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      elevation={1}
      color="inherit"
    >
      <Toolbar>
        <Typography
          variant="h6"
          fontWeight="bold"
        >
          Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;