 import { DataGrid } from "@mui/x-data-grid";

import {
  Chip,
  IconButton,
  Stack,
  Tooltip,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const QuestionTable = ({
  rows,
  onEdit,
  onDelete,
}) => {
  const columns = [
    {
      field: "subject",
      headerName: "Subject",
      flex: 1,
    },
    {
      field: "unit",
      headerName: "Unit",
      width: 110,
    },
    {
      field: "co",
      headerName: "CO",
      width: 90,
    },
    {
      field: "bloom",
      headerName: "Bloom",
      width: 130,
    },
    {
      field: "difficulty",
      headerName: "Difficulty",
      width: 120,
      renderCell: (params) => (
        <Chip
          label={params.value}
          color={
            params.value === "Easy"
              ? "success"
              : params.value === "Medium"
              ? "warning"
              : "error"
          }
          size="small"
        />
      ),
    },
    {
      field: "marks",
      headerName: "Marks",
      width: 90,
    },
    {
      field: "question",
      headerName: "Question",
      flex: 2,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      renderCell: (params) => (
        <Chip
          label={params.value}
          color={
            params.value === "Approved"
              ? "success"
              : "warning"
          }
          size="small"
        />
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 130,
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

export default QuestionTable;