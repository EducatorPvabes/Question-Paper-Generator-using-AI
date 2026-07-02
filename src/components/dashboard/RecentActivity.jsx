import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const activities = [
  "Admin logged in",
  "Question Paper Generated",
  "Faculty Registered",
  "Department Updated",
];

const RecentActivity = () => {
  return (
    <Card>
      <CardContent>
        <Typography
          variant="h6"
          gutterBottom
        >
          Recent Activity
        </Typography>

        <List>
          {activities.map((activity) => (
            <ListItem key={activity}>
              <ListItemText
                primary={activity}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;