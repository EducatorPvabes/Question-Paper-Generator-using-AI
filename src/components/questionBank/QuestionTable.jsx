import { DataGrid } from "@mui/x-data-grid";
import { IconButton, Stack } from "@mui/material";

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
      width: 100,
    },
    {
      field: "co",
      headerName: "CO",
      width: 100,
    },
    {
      field: "difficulty",
      headerName: "Difficulty",
      width: 120,
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
      field: "actions",
      headerName: "Actions",
      width: 130,
      sortable: false,
      renderCell: (params) => (
        <Stack direction="row">
          <IconButton
            color="primary"
            onClick={() => onEdit(params.row)}
          >
            <EditIcon />
          </IconButton>

          <IconButton
            color="error"
            onClick={() => onDelete(params.row)}
          >
            <DeleteIcon />
          </IconButton>
        </Stack>
      ),
    },
  ];

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
      autoHeight
    />
  );
};

export default QuestionTable;