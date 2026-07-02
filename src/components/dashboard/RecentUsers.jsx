import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const users = [
  "Pranshi Verma",
  "Rahul Sharma",
  "Aman Gupta",
  "Sneha Singh",
];

const RecentUsers = () => {
  return (
    <Card>
      <CardContent>
        <Typography
          variant="h6"
          gutterBottom
        >
          Recent Users
        </Typography>

        <List>
          {users.map((user) => (
            <ListItem key={user}>
              <ListItemText
                primary={user}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default RecentUsers;