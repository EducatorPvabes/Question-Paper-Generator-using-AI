import {
  Grid,
  MenuItem,
  TextField,
} from "@mui/material";

const QuestionFilter = ({
  filters,
  setFilters,
}) => {

  const handleChange = (e) => {

    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });

  };

  return (

    <Grid
      container
      spacing={2}
      mb={2}
    >

      <Grid item xs={12} md={3}>

        <TextField
          fullWidth
          select
          label="Difficulty"
          name="difficulty"
          value={filters.difficulty}
          onChange={handleChange}
        >

          <MenuItem value="">
            All
          </MenuItem>

          <MenuItem value="Easy">
            Easy
          </MenuItem>

          <MenuItem value="Medium">
            Medium
          </MenuItem>

          <MenuItem value="Hard">
            Hard
          </MenuItem>

        </TextField>

      </Grid>

      <Grid item xs={12} md={3}>

        <TextField
          fullWidth
          select
          label="Bloom"
          name="bloom"
          value={filters.bloom}
          onChange={handleChange}
        >

          <MenuItem value="">
            All
          </MenuItem>

          <MenuItem value="Remember">
            Remember
          </MenuItem>

          <MenuItem value="Understand">
            Understand
          </MenuItem>

          <MenuItem value="Apply">
            Apply
          </MenuItem>

          <MenuItem value="Analyze">
            Analyze
          </MenuItem>

          <MenuItem value="Evaluate">
            Evaluate
          </MenuItem>

          <MenuItem value="Create">
            Create
          </MenuItem>

        </TextField>

      </Grid>

      <Grid item xs={12} md={3}>

        <TextField
          fullWidth
          label="Subject"
          name="subject"
          value={filters.subject}
          onChange={handleChange}
        />

      </Grid>

      <Grid item xs={12} md={3}>

        <TextField
          fullWidth
          label="CO"
          name="co"
          value={filters.co}
          onChange={handleChange}
        />

      </Grid>

    </Grid>

  );

};

export default QuestionFilter;