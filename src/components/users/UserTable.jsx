import { DataGrid } from "@mui/x-data-grid";
import StatusChip from "./StatusChip";

import {
  IconButton,
  Stack,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
  },

  {
    field: "name",
    headerName: "Name",
    flex: 1,
  },

  {
    field: "email",
    headerName: "Email",
    flex: 1.3,
  },

  {
    field: "department",
    headerName: "Department",
    flex: 1,
  },

  {
    field: "role",
    headerName: "Role",
    width: 120,
  },

  {
    field: "status",
    headerName: "Status",
    width: 120,
    renderCell: (params) => (
      <StatusChip status={params.value} />
    ),
  },

  {
    field: "actions",
    headerName: "Actions",
    width: 130,

    sortable: false,

    renderCell: () => (
      <Stack direction="row">
        <IconButton color="primary">
          <EditIcon />
        </IconButton>

        <IconButton color="error">
          <DeleteIcon />
        </IconButton>
      </Stack>
    ),
  },
];

const UserTable = ({ rows }) => {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      pageSizeOptions={[5, 10]}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      disableRowSelectionOnClick
    />
  );
};

export default UserTable;