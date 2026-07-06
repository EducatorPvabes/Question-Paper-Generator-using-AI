import { DataGrid } from "@mui/x-data-grid";

import {
  Chip,
  IconButton,
  Stack,
  Tooltip,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const SubjectTable = ({
  rows,
  onEdit,
  onDelete,
}) => {

  const columns = [

    {
      field: "code",
      headerName: "Subject Code",
      flex: 1,
    },

    {
      field: "name",
      headerName: "Subject Name",
      flex: 1.6,
    },

    {
      field: "department",
      headerName: "Department",
      flex: 1,
    },

    {
      field: "semester",
      headerName: "Semester",
      width: 120,
    },

    {
      field: "credits",
      headerName: "Credits",
      width: 100,
    },

    {
      field: "faculty",
      headerName: "Faculty",
      flex: 1.3,
    },

    {
      field: "status",
      headerName: "Status",
      width: 130,

      renderCell: (params) => (
        <Chip
          label={params.value}
          color={
            params.value === "Active"
              ? "success"
              : "error"
          }
          size="small"
        />
      ),
    },

    {
      field: "actions",
      headerName: "Actions",
      width: 140,
      sortable: false,

      renderCell: (params) => (
        <Stack direction="row">

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
      autoHeight
      rows={rows}
      columns={columns}
      pageSizeOptions={[5, 10, 20]}
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

export default SubjectTable;