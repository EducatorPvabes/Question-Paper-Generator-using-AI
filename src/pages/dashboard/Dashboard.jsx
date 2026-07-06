import DashboardLayout from "../../layouts/DashboardLayout";

import {
  Grid,
  Typography,
  Paper,
  Box,
} from "@mui/material";

import PeopleIcon from "@mui/icons-material/People";
import SchoolIcon from "@mui/icons-material/School";
import BusinessIcon from "@mui/icons-material/Business";
import DescriptionIcon from "@mui/icons-material/Description";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

import StatCard from "../../components/dashboard/StatCard";
import BarChart from "../../components/dashboard/BarChart";
import PieChart from "../../components/dashboard/PieChart";
import RecentUsers from "../../components/dashboard/RecentUsers";
import RecentActivity from "../../components/dashboard/RecentActivity";

const Dashboard = () => {

  const stats = [
    {
      title: "Total Users",
      value: 24,
      icon: <PeopleIcon fontSize="large" />,
    },
    {
      title: "Faculty",
      value: 16,
      icon: <SchoolIcon fontSize="large" />,
    },
    {
      title: "Departments",
      value: 8,
      icon: <BusinessIcon fontSize="large" />,
    },
    {
      title: "Question Papers",
      value: 120,
      icon: <DescriptionIcon fontSize="large" />,
    },
    {
      title: "Question Bank",
      value: 542,
      icon: <LibraryBooksIcon fontSize="large" />,
    },
    {
      title: "Pending Approval",
      value: 7,
      icon: <PendingActionsIcon fontSize="large" />,
    },
    {
      title: "Approved Papers",
      value: 113,
      icon: <CheckCircleIcon fontSize="large" />,
    },
    {
      title: "AI Generated",
      value: 89,
      icon: <AutoAwesomeIcon fontSize="large" />,
    },
  ];

  return (
    <DashboardLayout>

      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
      >
        AI Question Paper Generator Dashboard
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        mb={4}
      >
        Welcome back! Here's an overview of your system.
      </Typography>

      <Grid container spacing={3} mb={3}>
        {stats.map((item, index) => (
          <Grid
            key={index}
            size={{ xs: 12, sm: 6, md: 3 }}
          >
            <StatCard
              title={item.title}
              value={item.value}
              icon={item.icon}
            />
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>

        <Grid size={{ xs: 12, md: 8 }}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              borderRadius: 3,
              height: "100%",
            }}
          >
            <Typography
              variant="h6"
              mb={2}
              fontWeight="bold"
            >
              Question Paper Analytics
            </Typography>

            <BarChart />
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              borderRadius: 3,
              height: "100%",
            }}
          >
            <Typography
              variant="h6"
              mb={2}
              fontWeight="bold"
            >
              Question Distribution
            </Typography>

            <PieChart />
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              borderRadius: 3,
              height: "100%",
            }}
          >
            <Typography
              variant="h6"
              mb={2}
              fontWeight="bold"
            >
              Recent Users
            </Typography>

            <RecentUsers />
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              borderRadius: 3,
              height: "100%",
            }}
          >
            <Typography
              variant="h6"
              mb={2}
              fontWeight="bold"
            >
              Recent Activities
            </Typography>

            <RecentActivity />
          </Paper>
        </Grid>

      </Grid>

      <Box height={20} />

    </DashboardLayout>
  );
};

export default Dashboard;