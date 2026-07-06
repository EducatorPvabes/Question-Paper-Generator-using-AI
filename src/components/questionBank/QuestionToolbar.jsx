import {
  Box,
  Button,
  InputAdornment,
  TextField,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

const QuestionToolbar = ({
  search,
  setSearch,
  onAdd,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 2,
        mb: 2,
      }}
    >
      <TextField
        placeholder="Search Question..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ minWidth: 350 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={onAdd}
      >
        Add Question
      </Button>
    </Box>
  );
};

export default QuestionToolbar;