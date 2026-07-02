import {
  Box,
  Button,
  MenuItem,
  TextField,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

const UserToolbar = ({
  search,
  setSearch,
    onAddUser,
}) => {
  return (
    <Box
      display="flex"
      gap={2}
      mb={2}
      flexWrap="wrap"
    >
      <TextField
        label="Search User"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <TextField
        select
        label="Role"
        defaultValue=""
        sx={{ width: 170 }}
      >
        <MenuItem value="">
          All Roles
        </MenuItem>

        <MenuItem value="Admin">
          Admin
        </MenuItem>

        <MenuItem value="Faculty">
          Faculty
        </MenuItem>

        <MenuItem value="HOD">
          HOD
        </MenuItem>
      </TextField>

      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={onAddUser}
      >
        Add User
      </Button>
    </Box>
  );
};

export default UserToolbar;