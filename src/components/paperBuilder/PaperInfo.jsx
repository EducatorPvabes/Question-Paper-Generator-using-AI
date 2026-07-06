import {
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

const PaperInfo = ({ paperInfo, setPaperInfo }) => {
  const handleChange = (e) => {
    setPaperInfo({
      ...paperInfo,
      [e.target.name]: e.target.value,
    });
  };

  const subjects =
    JSON.parse(localStorage.getItem("subjects")) || [];

  return (
    <>
      <Typography
        variant="h5"
        fontWeight="bold"
        mb={3}
      >
        Paper Information
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="College Name"
            name="college"
            value={paperInfo.college}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="University"
            name="university"
            value={paperInfo.university}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label="Department"
            name="department"
            value={paperInfo.department}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label="Course"
            name="course"
            value={paperInfo.course}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label="Branch"
            name="branch"
            value={paperInfo.branch}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            select
            fullWidth
            label="Subject"
            name="subject"
            value={paperInfo.subject}
            onChange={handleChange}
          >
            {subjects.map((subject) => (
              <MenuItem
                key={subject.id}
                value={subject.name}
              >
                {subject.name}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Subject Code"
            name="subjectCode"
            value={paperInfo.subjectCode}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <TextField
            select
            fullWidth
            label="Semester"
            name="semester"
            value={paperInfo.semester}
            onChange={handleChange}
          >
            {[1,2,3,4,5,6,7,8].map((sem)=>(
              <MenuItem
                key={sem}
                value={sem}
              >
                Semester {sem}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12} md={4}>
          <TextField
            select
            fullWidth
            label="Exam Type"
            name="examType"
            value={paperInfo.examType}
            onChange={handleChange}
          >
            <MenuItem value="Quiz">
              Quiz
            </MenuItem>

            <MenuItem value="Mid Semester">
              Mid Semester
            </MenuItem>

            <MenuItem value="End Semester">
              End Semester
            </MenuItem>

            <MenuItem value="Practical">
              Practical
            </MenuItem>

            <MenuItem value="Internal">
              Internal
            </MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label="Academic Session"
            name="session"
            value={paperInfo.session}
            onChange={handleChange}
            placeholder="2026-27"
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label="Duration"
            name="duration"
            value={paperInfo.duration}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <TextField
            type="number"
            fullWidth
            label="Maximum Marks"
            name="maxMarks"
            value={paperInfo.maxMarks}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="General Instructions"
            name="instructions"
            value={paperInfo.instructions}
            onChange={handleChange}
            placeholder="1. All questions are compulsory.
2. Assume suitable data wherever necessary.
3. Draw neat diagrams wherever required."
          />
        </Grid>
      </Grid>
    </>
  );
};

export default PaperInfo;