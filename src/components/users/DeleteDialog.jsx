import {
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
} from "@mui/material";

const DeleteDialog = ({
  open,
  handleClose,
  onDelete,
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <DialogTitle>
        Delete this user?
      </DialogTitle>

      <DialogActions>

        <Button onClick={handleClose}>
          Cancel
        </Button>

        <Button
          color="error"
          variant="contained"
          onClick={onDelete}
        >
          Delete
        </Button>

      </DialogActions>

    </Dialog>
  );
};

export default DeleteDialog;