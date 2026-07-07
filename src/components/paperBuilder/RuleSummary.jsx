import {
  Card,
  CardContent,
  Typography,
  Grid,
  Alert,
  Divider,
} from "@mui/material";

const RuleSummary = ({ sections = [] }) => {
  const totalSections = sections.length;

  const totalQuestions = sections.reduce(
    (sum, section) =>
      sum + Number(section.showQuestions || 0),
    0
  );

  const totalAttemptQuestions = sections.reduce(
    (sum, section) =>
      sum + Number(section.attemptQuestions || 0),
    0
  );

  const totalMarks = sections.reduce(
    (sum, section) =>
      sum + Number(section.totalMarks || 0),
    0
  );

  const hasError = sections.some(
    (section) =>
      Number(section.attemptQuestions) >
      Number(section.showQuestions)
  );

  return (
    <Card sx={{ mt: 3 }}>
      <CardContent>

        <Typography
          variant="h6"
          fontWeight="bold"
          gutterBottom
        >
          Paper Summary
        </Typography>

        <Divider sx={{ mb: 2 }} />

        <Grid container spacing={2}>

          <Grid item xs={6} md={3}>
            <Typography variant="subtitle2">
              Total Sections
            </Typography>

            <Typography variant="h5">
              {totalSections}
            </Typography>
          </Grid>

          <Grid item xs={6} md={3}>
            <Typography variant="subtitle2">
              Total Questions
            </Typography>

            <Typography variant="h5">
              {totalQuestions}
            </Typography>
          </Grid>

          <Grid item xs={6} md={3}>
            <Typography variant="subtitle2">
              Attempt Questions
            </Typography>

            <Typography variant="h5">
              {totalAttemptQuestions}
            </Typography>
          </Grid>

          <Grid item xs={6} md={3}>
            <Typography variant="subtitle2">
              Total Marks
            </Typography>

            <Typography variant="h5">
              {totalMarks}
            </Typography>
          </Grid>

        </Grid>

        <Divider sx={{ my: 2 }} />

        {sections.length === 0 ? (
          <Alert severity="info">
            No sections added yet.
          </Alert>
        ) : hasError ? (
          <Alert severity="error">
            Some sections have invalid rules.
            Attempt Questions cannot exceed
            Questions to Show.
          </Alert>
        ) : (
          <Alert severity="success">
            Paper structure is valid and ready
            for Preview.
          </Alert>
        )}

      </CardContent>
    </Card>
  );
};

export default RuleSummary;