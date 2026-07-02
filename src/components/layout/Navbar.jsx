import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Badge,
  Box,
} from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";

import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <AppBar
      position="static"
      color="inherit"
      elevation={1}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1 }}
        >
          AI Question Paper Generator
        </Typography>

        <IconButton>
          <SearchIcon />
        </IconButton>

        <IconButton>
          <Badge
            badgeContent={4}
            color="error"
          >
            <NotificationsIcon />
          </Badge>
        </IconButton>

        <Box ml={2}>
          <Avatar>
            {user?.name?.charAt(0) || "A"}
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;