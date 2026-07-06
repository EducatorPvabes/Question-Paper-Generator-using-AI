import {
  Box,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

const SubjectToolbar = ({
  search,
  setSearch,
  onAdd,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: 2,
        flexWrap: "wrap",
      }}
    >
      <TextField
        placeholder="Search Subject..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ minWidth: 320 }}
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
        Add Subject
      </Button>
    </Box>
  );
};

export default SubjectToolbar;