import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import QuizIcon from "@mui/icons-material/Quiz";
import DescriptionIcon from "@mui/icons-material/Description";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

export const menuItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <DashboardIcon />,
  },
  {
    title: "Users",
    path: "/users",
    icon: <PeopleIcon />,
  },
  {
    title: "Subjects",
    path: "/subjects",
    icon: <MenuBookIcon />,
  },
  {
    title: "Question Bank",
    path: "/question-bank",
    icon: <QuizIcon />,
  },
  {
    title: "Paper Builder",
    path: "/paper-builder",
    icon: <AutoStoriesIcon />,
  },
  {
    title: "Generated Papers",
    path: "/generated-papers",
    icon: <DescriptionIcon />,
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <AssessmentIcon />,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <PersonIcon />,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <SettingsIcon />,
  },
  {
    title: "Logout",
    path: "/logout",
    icon: <LogoutIcon />,
  },
];