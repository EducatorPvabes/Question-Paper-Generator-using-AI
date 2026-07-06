import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import QuizIcon from "@mui/icons-material/Quiz";
import DescriptionIcon from "@mui/icons-material/Description";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import PersonIcon from "@mui/icons-material/Person";

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
    title: "Generate Paper",
    path: "/generate-paper",
    icon: <DescriptionIcon />,
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <AnalyticsIcon />,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <PersonIcon />,
  },
];