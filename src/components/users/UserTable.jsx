import { DataGrid } from "@mui/x-data-grid";
import {
  Avatar,
  Box,
  Chip,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

import StatusChip from "./StatusChip";

const getRoleColor = (role) => {
  switch (role) {
    case "Admin":
      return "error";
    case "HOD":
      return "warning";
    case "Faculty":
      return "primary";
    default:
      return "default";
  }
};

const UserTable = ({
  rows,
  onEdit,
  onDelete,
}) => {
  const columns = [
    {
      field: "id",
      headerName: "#",
      width: 70,
    },

    {
      field: "name",
      headerName: "User",
      flex: 1.3,

      renderCell: (params) => (
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <Avatar>
            {params.row.name?.charAt(0).toUpperCase()}
          </Avatar>

          <Box>
            <Typography fontWeight={600}>
              {params.row.name}
            </Typography>

            <Typography
              variant="caption"
              color="text.secondary"
            >
              {params.row.email}
            </Typography>
          </Box>
        </Stack>
      ),
    },

    {
      field: "department",
      headerName: "Department",
      flex: 1,

      renderCell: (params) => (
        params.value || "-"
      ),
    },

    {
      field: "role",
      headerName: "Role",
      flex: 1,

      renderCell: (params) => (
        <Chip
          label={params.value}
          color={getRoleColor(params.value)}
          size="small"
        />
      ),
    },

    {
      field: "status",
      headerName: "Status",
      flex: 1,

      renderCell: (params) => (
        <StatusChip status={params.value} />
      ),
    },

    {
      field: "actions",
      headerName: "Actions",
      width: 170,
      sortable: false,

      renderCell: (params) => (
        <Stack direction="row" spacing={1}>
          <Tooltip title="View">
            <IconButton color="info">
              <VisibilityIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Edit">
            <IconButton
              color="primary"
              onClick={() => onEdit(params.row)}
            >
              <EditIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Delete">
            <IconButton
              color="error"
              onClick={() => onDelete(params.row)}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      ),
    },
  ];

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      getRowId={(row) => row.id}
      autoHeight
      density="comfortable"
      disableRowSelectionOnClick
      pageSizeOptions={[5, 10, 20, 50]}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 10,
          },
        },
      }}
      sx={{
        border: 0,
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: "#f5f5f5",
          fontWeight: "bold",
        },
        "& .MuiDataGrid-cell": {
          display: "flex",
          alignItems: "center",
        },
      }}
    />
  );
};

export default UserTable;