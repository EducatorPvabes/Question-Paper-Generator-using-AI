import DashboardLayout from "../../layouts/DashboardLayout";

import {
  Grid,
  Typography,
} from "@mui/material";

import PeopleIcon from "@mui/icons-material/People";
import SchoolIcon from "@mui/icons-material/School";
import BusinessIcon from "@mui/icons-material/Business";
import DescriptionIcon from "@mui/icons-material/Description";

import StatCard from "../../components/dashboard/StatCard";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
      >
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Users"
            value="120"
            icon={<PeopleIcon fontSize="large" />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Faculty"
            value="40"
            icon={<SchoolIcon fontSize="large" />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Departments"
            value="8"
            icon={<BusinessIcon fontSize="large" />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Question Papers"
            value="250"
            icon={<DescriptionIcon fontSize="large" />}
          />
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;