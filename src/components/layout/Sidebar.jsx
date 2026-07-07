import {
  Drawer,
  Toolbar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";

import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { menuItems } from "../../utils/menuItems";

const drawerWidth = 250;

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (item) => {
    if (item.path === "/logout") {
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      navigate("/login");

      return;
    }

    navigate(item.path);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,

        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar>

        <Typography
          variant="h6"
          fontWeight="bold"
        >
          AI Question Paper Generator
        </Typography>

      </Toolbar>

      <Divider />

      <List>

        {menuItems.map((item) => (

          <ListItemButton
            key={item.title}
            component={Link}
            to={item.path}
            selected={
              location.pathname === item.path
            }
            onClick={() =>
              handleClick(item)
            }
          >

            <ListItemIcon>

              {item.icon}

            </ListItemIcon>

            <ListItemText
              primary={item.title}
            />

          </ListItemButton>

        ))}

      </List>

    </Drawer>
  );
};

export default Sidebar;