import {
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

const StatCard = ({
  title,
  value,
  icon,
}) => {
  return (
    <Card
      elevation={3}
      sx={{
        borderRadius: 3,
      }}
    >
      <CardContent>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography
              color="text.secondary"
              variant="body2"
            >
              {title}
            </Typography>

            <Typography
              variant="h4"
              fontWeight="bold"
              mt={1}
            >
              {value}
            </Typography>
          </Box>

          <Box>{icon}</Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StatCard;